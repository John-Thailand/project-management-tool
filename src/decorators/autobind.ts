
// qutobind decorator
export function autobind(
    _: any,
    __: string,
    descriptor: PropertyDescriptor,
) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}
