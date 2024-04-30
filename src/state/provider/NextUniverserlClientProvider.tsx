"use client"

import {createContext, PropsWithChildren, useContext, useState} from "react";
import {Schema} from "@/state/provider/struct";
import {Message} from "@/app/struct";

const  context  = createContext({} as Record<string, any>)

export function NextUniversalClientProvider<T extends Schema>({children, value}: PropsWithChildren<{value: T}>) {
    const [v] = useState(value)
    return <context.Provider value={v}>{children}
        {children}
    </context.Provider>
}

export function useUniversalValue<T extends Schema>(key: keyof T) {
    const store = useContext(context) as T;
    if(!store) {
        throw new Error("useUniversalValue must be used within a NextUniversalClientProvider")
    }
    return store[key]
}