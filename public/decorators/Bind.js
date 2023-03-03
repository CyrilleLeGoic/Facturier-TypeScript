export function bind(target, name, descriptor) {
    const originalMethod = descriptor.value;
    const newDescriptor = {
        get() {
            return originalMethod.bind(this);
        }
    };
    return newDescriptor;
}
