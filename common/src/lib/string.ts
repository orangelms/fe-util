
/**
 * 判断字符串是否为空或 null
 * @param string 字符串
 */
export function stringIsEmpty(string: string | null) {
  return string === null || string === '' || string === undefined || (typeof string === 'undefined')
}

/**
 * 字符串转换成 bool
 * @param value 字符串
 * @param falseList 被当做 false 的字符串列表，默认：`['false', '0', 'null', 'undefined']`
 */
export function stringToBoolean(
  value: string | null,
  falseList = ['false', '0', 'null', 'undefined']
) {
  const val = String(value).trim().toLowerCase()
  return falseList.includes(val) ? false : Boolean(val)
}

/**
 * 对字符串 `str` 执行正则 `regex`，并返回第 `index` 个捕捉组的内容，若无，返回默认值 `defVal`
 *
 * @param str 要操作的字符串
 * @param regex 要执行的正则表达式
 * @param index 返回的捕捉组索引
 * @param defVal 失败时的默认值
 */
export function stringExtract(str: string, regex: RegExp, index = 1, defVal = ''): string {
  return ((str || '').match(regex) || [])[index] || defVal
}

/**
 * 获取字符串的字节长度，Unicode 大于 \u00ff 的算作两个字节
 * @param str 要操作的字符串
 */
export function stringGetSize(str: string) {
  return str.replace(/[^\x00-\xff]/g, 'ci').length
}

/**
 * 以字节长度截取子串，size 字节长度
 * @param str 要操作的字符串
 * @param size 字节长度
 * @param tail 可选的结尾，只有截取时才添加
 */
export function stringSubBytes(str: string, size: number, tail = '...') {
  const substr = size > 0 && stringGetSize(str) > size
    ? str.substr(0, size)
      .replace(/([^\x00-\xff])/g, '\x241 ')  // 双字节字符替换成两个，\x241 => $1
      .substr(0, size)                       // 截取长度
      .replace(/[^\x00-\xff]$/, '')          // 去掉临界双字节字符
      .replace(/([^\x00-\xff]) /g, '\x241')  // 还原
    : str
  return substr === str ? substr : substr + tail
}

/**
 * 生成随机字符串
 * @param prefix 可选前缀
 * @param suffix 可选后缀
 */
export function stringRandom(prefix = '', suffix = '') {
  return prefix
    + Math.random().toString(36).slice(2)
    + new Date().getTime().toString(36)
    + suffix
}