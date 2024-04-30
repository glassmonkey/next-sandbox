export interface Schema extends Record<string, any>{}


export function pickValue<T extends Schema>(key: keyof T, store: T, storeType: 'client' | 'server') {
    if (!(key in store)) {
        return {
            value: undefined,
            error: new Error(`key ${key.toString()} not found on ${storeType} universal store`)
        }
    }
    return {
        value: store[key],
        error: undefined,
    }
}