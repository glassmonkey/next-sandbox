"use client"

import {createContext, PropsWithChildren, useContext, useState} from "react";
import {Schema} from "@/state/provider/struct";

const  context  = createContext({} as Record<string, any>)

export function NextUniversalClientProvider<T extends Schema>({children, value}: PropsWithChildren<{value: T}>) {
    const [v] = useState(value)
    return <context.Provider value={v}>{children}
        {children}
    </context.Provider>
}

export function useUniversalValue<T extends Schema>(key: keyof T) {
    const store = useContext(context) as T;
    if (!(key in store)) {
        return {
            value: undefined,
            error: new Error(`key ${key.toString()} not found in universal store on client side`)
        }
    }
    return {
        value: store[key],
        error: undefined,
    }
}