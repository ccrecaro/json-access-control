export function getKeyByValue(enumObject: any, value: any) {
    return Object.keys(enumObject).find(key => enumObject[key] === value);
}