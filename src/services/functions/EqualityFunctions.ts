// Util para las evaluaciones de igualdad de cualquier tipo de elemento
export function argumentsEqual(arg1: any, arg2: any) {
    return arg1 === arg2;
}

export function stringEqualIgnoreCase(arg1: string, arg2: string) {
    return arg1.toLowerCase() === arg2.toLowerCase();
}