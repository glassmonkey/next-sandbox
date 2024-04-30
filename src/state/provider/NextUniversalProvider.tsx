import {NextUniversalClientProvider} from "@/state/provider/NextUniverserlClientProvider";
import {PropsWithChildren} from "react";
import {createAsyncObjectStack} from "async-object-stack";
import {Schema} from "@/state/provider/struct";

const stack = createAsyncObjectStack();

export function NextUniversalStoreProvider<T extends Schema>({children, value}: PropsWithChildren<{value: T}>) {
    stack.push(value)
    return <NextUniversalClientProvider value={value}>
        {children}
    </NextUniversalClientProvider>
}

export function getUniversalValue<T extends Schema>(key: keyof T) {
    const store= stack.render() as T;
    if (!(key in store)) {
        return {
            value: undefined,
            error: new Error(`key ${key.toString()} not found in universal store on server side`)
        }
    }
    return {
        value: store[key],
        error: undefined,
    }
}