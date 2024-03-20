'use server';
import {Simulate} from "react-dom/test-utils";

export async function requestValue(formData: FormData) {
    const value = formData.get('value');
    const res = await fetch("http://127.0.0.1:3000/api/action", {
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
        return null
    })
    if (!res) {
        return
    }
    console.log(await res.json())
}