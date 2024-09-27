export { default as parseJson } from './lib/parseJson'
export { isEmpty, isMobile, isEqual } from './lib/is'
export { default as isVisible } from './lib/dom/isVisible'
export { hasClass, addClass,removeClass } from './lib/dom/class'
export { isObject, isString, isArray, isFunction, isNumber, isBoolean, isRegExp, isDate, isType } from './lib/type'
export {
  base64Encode,
  base64Decode,
  safeUrlBase64Encode,
  safeUrlBase64Decode,
  jsonSafeUrlBase64Encode,
  jsonSafeUrlBase64Decode
} from './lib/base64'
export { default as KeyCode } from './lib/keyCode'
export { prettyQuery, buildUrl, urlParam } from './lib/url'
export { stringIsEmpty, stringToBoolean, stringExtract, stringGetSize, stringSubBytes, stringRandom } from './lib/string'
export { debounce, throttle } from './lib/method'
export { default as ExpireLocalStorage, StorageItem } from './lib/storage'


