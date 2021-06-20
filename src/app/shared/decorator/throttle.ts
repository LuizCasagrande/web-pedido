export function throttle(wait: number = 100, immediately: boolean = false): MethodDecorator {
  return (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originFunction = descriptor.value;
    let timer = null;
    descriptor.value = function(this: any, ...args: any[]): any {
      clearTimeout(timer);
      if (timer === null && immediately === true) {
        originFunction.apply(this, args);
      }
      timer = setTimeout(() => {
        if (immediately === false) {
          originFunction.apply(this, args);
        }
        timer = null;
      }, wait);
    };
    return descriptor;
  };
}
