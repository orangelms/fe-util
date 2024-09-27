import { isDate, isNumber, isString } from "./type";

export interface StorageItem {
    /**
     * 存储的值
     */
    value: string;
    /**
     * 过期时间，支持number，Date，string
     * number 类型：以毫秒为单位来表示从当前时间到过期时间的间隔
     */
    expiry: number | Date | string;
}

/**
 * Usage
 * 1 设置5秒后过期
 *    ExpireLocalStorage.setItem('test', 'hello world', 5000); 
 * 2 直接设置过期时间
 *    const specificTime = new Date('2024-01-01 00:00:00');
 *    ExpireLocalStorage.setItem('test2', 'hello again, I will expire in 2024-01-01 00:00:00', specificTime);
 * 3 直接设置时间字符 必须确保字符串被正确解析为日期
 *    const dateStr = '2024-01-01 00:00:00';
 *    ExpireLocalStorage.setItem('test3', 'hello again, I will expire in 2024-01-01 00:00:00', dateStr);
 */
class ExpireLocalStorage {
    private static prefix = 'expiring_';

    /**
     * 设置带有过期时间的项
     * @param key localStorage item key
     * @param value value
     * @param ttl Time To Live
     */
    static setItem(key: string, value: string, expiry: number | Date | string) {
        try {
            const now = new Date();
            let expiryTime: number;
            // 无论传入的是什么，都转化为时间戳
            if (isNumber(expiry)) {
                expiryTime = now.getTime() + (expiry as number); // expiry为毫秒数
            } else if (isDate(expiry)) {
                expiryTime = (expiry as Date).getTime(); // expiry为Date对象
            } else if (isString(expiry)) {
                const date = new Date(expiry);
                if (!isNaN(date.getTime())) { // 确保字符串被正确解析为日期
                    expiryTime = date.getTime();
                } else {
                    throw new Error('Invalid date string');
                }
            } else {
                throw new Error('Invalid expiry type');
            }
            const item: StorageItem = { value: value, expiry: expiryTime };
            if (typeof window === 'undefined') {
                // 没有window 对象，请在浏览器环境下使用
                throw new Error('There is no window object, please use it in a browser environment');
            } else {
                window.localStorage.setItem(ExpireLocalStorage.prefix + key, JSON.stringify(item));
            }
        } catch (error) {
            // 假设解析或处理存储项时出错 并记录错误。
            if (typeof window !== 'undefined') {
                window.console.error('Failed to set localStorage:', error);
            }
            return null
        }
    }


    static getItem(key: string): string | null {
        try {
            let itemStr = null
            if (typeof window === 'undefined') {
                // 没有window 对象，请在浏览器环境下使用
                throw new Error('There is no window object, please use it in a browser environment');
            } else {
                itemStr = window.localStorage.getItem(ExpireLocalStorage.prefix + key);
            }
            if (!itemStr) {
                return null;
            }
            const item: StorageItem = JSON.parse(itemStr);
            const now = new Date().getTime();
            // 由于设置的时候进行了转化处理，这里得到的必然是时间戳
            if (now > Number(item.expiry)) {
                if (typeof window === 'undefined') {
                    // 没有window 对象，请在浏览器环境下使用
                    throw new Error('There is no window object, please use it in a browser environment');
                } else {
                    window.localStorage.removeItem(ExpireLocalStorage.prefix + key);
                }
                return null;
            }
            return item.value;
        } catch (error) {
            // 假设解析或处理存储项时出错，我们将其从localStorage中移除，并记录错误。
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(ExpireLocalStorage.prefix + key);
                window.console.error('Failed to get localStorage:', error);
            }
            return null;
        }
    }

}

export default ExpireLocalStorage;
