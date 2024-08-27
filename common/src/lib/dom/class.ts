/**
 * element has class
 * @param node 
 * @param className 
 */
export function hasClass(node: HTMLElement, className: string): boolean {  
  if (node.classList) {  
    return node.classList.contains(className);  
  }  
  const originClass = node.className || ''; // 确保 className 是字符串  
  return ` ${originClass} `.indexOf(` ${className} `) > -1;  
}  

/**
 * add element class
 * @param node 
 * @param className 
 */
export function addClass(node: HTMLElement, className: string) {  
  if (node.classList) {  
    node.classList.add(className);  
  } else {  
    if (!hasClass(node, className)) {  
      node.className = `${node.className} ${className}`;  
    }  
  }  
}  
/**
 * remove element class
 * @param node 
 * @param className 
 */
export function removeClass(node: HTMLElement, className: string) {  
  if (node.classList) {  
    node.classList.remove(className);  
  } else {  
    if (hasClass(node, className)) {  
      const originClass = node.className || ''; // 确保 className 是字符串  
      node.className = ` ${originClass} `.replace(` ${className} `, ' ').trim(); // 添加 trim() 以移除多余的空格  
    }  
  }  
}