"use client"

import {createContext, PropsWithChildren, useContext, useState} from "react";
import {pickValue, Schema} from "@/state/provider/struct";

const  context  = createContext({} as Record<string, any>)

export function NextUniversalClientProvider<T extends Schema>({children, value}: PropsWithChildren<{value: T}>) {
    const [initValue] = useState(value)
    return <context.Provider value={initValue}>{children}</context.Provider>
}

export function useUniversalValue<T extends Schema>(key: keyof T) {
    const store = useContext(context) as T;
    return pickValue(key, store, "client")
}


export function useForceUniversalValue<T extends Schema>(key: keyof T) {
   const {value, error} = useUniversalValue<T>(key)
    if (error) {
        throw error
    }
    return value
}