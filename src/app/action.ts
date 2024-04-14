'use server';

import {HOST} from "@/config";

export type Value = {
    data: any
    error?: string
}

export async function requestValue(v:  Value, formData: FormData): Promise<Value> {
    const value = formData.get('value');
    const res = await fetch(`${HOST}/api/action`, {
        method: "POST",
        body: JSON.stringify({
            value
        }),
        cache: "no-cache"
    }).then((res) => {
        if(!res.ok) {
            throw new Error(res.statusText)
        }
        return res
    }).catch((e: Error) =>  {
        console.error({
            "message": "action error",
            "error": e,
        })
        return e
    })
    if (res instanceof Error) {
        const result = {
            error: res.message,
            data: null
        }
        console.log(result)
        return result
    }
    const result = {
        data: await res.json(),
        error: undefined,
    }
    console.log(result)

    return result
}