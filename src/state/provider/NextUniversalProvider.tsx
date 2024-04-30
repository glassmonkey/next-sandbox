import {NextUniversalClientProvider} from "@/state/provider/NextUniverserlClientProvider";
import {PropsWithChildren} from "react";
import {createAsyncObjectStack} from "async-object-stack";
import {Schema} from "@/state/provider/struct";

const stack = createAsyncObjectStack();

export function NextUniversalStoreProvider<T extends Schema>({children, value}: PropsWithChildren<{value: T}>) {
    console.log("store provider", value)
    stack.push(value)
    return <NextUniversalClientProvider value={value}>
        {children}
    </NextUniversalClientProvider>
}

export function getUniversalValue<T extends Schema>(key: keyof T) {
    console.log(stack.render())
    const store= stack.render() as T;
    return store[key]
}