import { isEmpty } from "./is";

/**  
 * 尝试解析 JSON，解析不成功，返回默认值 null  
 * @param json JSON 字符串  
 * parseJson<any>('[{"value":"value","label":"label","children":[{"value":"value","label":"label"}]},{"value":"value","label":"label"}]')
 */  
export default function parseJson<T = any>(json: string | null | undefined): T | null;  
  
/**  
 * 尝试解析 JSON，解析不成功，返回默认值 {}  
 * @param json JSON 字符串  
 * @param defaultValue 默认值，默认为 {}  
 */  
export default function parseJson<T = Record<string, never>>(json: string | null | undefined, defaultValue: T): T;

/**  
 * 尝试解析 JSON，解析不成功，返回默认值 null
 * @param json JSON 字符串  
 * @param defaultValue 默认值，默认为 null
 * parseJson('[{"value":"value","label":"label","children":[{"value":"value","label":"label"}]},{"value":"value","label":"label"}]')
 */
export default function parseJson<T>(json: string | null | undefined, defaultValue: T = null as any): T {  
  try {  
    return isEmpty(json)
      ? defaultValue 
      : JSON.parse(json as any) ;  
  } catch {  
    return defaultValue;  
  }  
}


