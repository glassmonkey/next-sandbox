'use server';

import {HOST} from "@/config";
import {FormSchema} from "@/app/schema";

export type Value = {
    data: any
    error?: string
}

export async function requestValue(data:  Value): Promise<Value> {
    const res = await fetch(`${HOST}/api/action`, {
        method: "POST",
        body: JSON.stringify(
            data.data
        ),
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
    return {
        data: await res.json(),
        error: undefined,
    }
}