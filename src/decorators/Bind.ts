export function bind(
    target : any,
    name : string,
    descriptor : PropertyDescriptor
){
    const originalMethod = descriptor.value;
    const newDescriptor : PropertyDescriptor = {
        get(){
            return originalMethod.bind(this);
        }
}
    return newDescriptor;
}
