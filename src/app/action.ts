'use server';

export async function requestValue(_:  {value: any;} | null, formData: FormData) {
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
        return null
    }
    const result = {
        value: await res.json()
    }
    console.log(result)

    return result
}