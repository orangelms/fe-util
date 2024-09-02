/**
 * 回城：触发100次，只执行最后一次
 * 触发事件后，等待指定时间才执行函数。如果在这段时间内再次触发了该事件，则会重新计算延迟时间，直到在指定时间内没有再次触发该事件
 * @param fn 触发事件
 * @param delay 等待时间
 * @param immediate 是否为首次调用
 * @returns
 */
export function debounce<T extends (...args: any[]) => any>(
    fn: T,
    delay: number = 1000,
    immediate: boolean = false,
  ): (...funcArgs: Parameters<T>) => void {
    let timer: NodeJS.Timeout | null = null;
    let isFirstCall = true; // **‌用于标记是否为首次调用**
    const debouncedFunc = (...args: Parameters<T>): void => {
      const context = fn;
      // 如果已经设定过定时器了就清空上一次的定时器
      if (timer) {
        clearTimeout(timer);
      }
  
      // **如果是首次调用且设置了立即执行，‌则直接执行**
      if (immediate && isFirstCall) {
        // @ts-ignore
        context.apply(this, args);
        isFirstCall = false; // **标记非首次调用**
      } else {
        timer = setTimeout(() => {
          // @ts-ignore
          context.apply(this, args);
          timer = null;
        }, delay);
      }
    };
    return debouncedFunc;
  }
  
  /**
   * 放技能：在CD时间内，执行一次。可以多次触发，执行多次
   * @param fn 技能名
   * @param delay 冷却时间
   * @returns
   */
  export function throttle<T extends (...args: any[]) => any>(
    fn: T,
    delay: number = 1000,
  ): (...funcArgs: Parameters<T>) => void {
    let timer: NodeJS.Timeout | null = null;
    const func = (...args: Parameters<T>): void => {
      const context = fn;
      if (timer) {
        return; // 和防抖的区别在于，这里不清除定时器，而是直接返回，让事件保持在上一次的执行过程中，达到间断执行的效果
      }
      timer = setTimeout(() => {
        // @ts-ignore
        context.apply(this, args);
        timer = null;
      }, delay);
    };
    return func;
  }
  