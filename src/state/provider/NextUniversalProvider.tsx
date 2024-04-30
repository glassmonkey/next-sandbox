import {NextUniversalClientProvider} from "@/state/provider/NextUniverserlClientProvider";
import {PropsWithChildren} from "react";
import {createAsyncObjectStack} from "async-object-stack";
import {pickValue, Schema} from "@/state/provider/struct";

const stack = createAsyncObjectStack();

export function NextUniversalStoreProvider<T extends Schema>({children, value}: PropsWithChildren<{value: T}>) {
    stack.push(value)
    return <NextUniversalClientProvider value={value}>
        {children}
    </NextUniversalClientProvider>
}

export function getUniversalValue<T extends Schema>(key: keyof T) {
    const store= stack.render() as T;
    return pickValue(key, store, "server")
}

export function getForceUniversalValue<T extends Schema>(key: keyof T) {
    const {value, error} = getUniversalValue<T>(key)
    if (error) {
        throw error
    }
    return value
}