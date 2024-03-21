"use client"
import useSWR from "swr";
import dynamic from "next/dynamic";
import {Suspense} from "react";

function _ClientComponent() {
    const { data, error } = useSWR('/api/data', (url) => fetch(`http://127.0.0.1:3000${url}`, {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify({"from": "client"}),
    }).then(async (response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.text()
    }).catch((e: Error) =>  {
        console.error({
            "message": "client view error",
            "error": e,
        })
        return e
    }),{
        suspense: true,
        fallback: {
            "/api/data": '',
        }
    })

    if (error || data instanceof Error) {
        return <div>Api Error</div>
    }
    if (!data) {
        return "loading..."
    }
    return <div>
        <div>Client Api Response: {data}</div>
    </div>
}

export default function ClientComponent() {
    return <_ClientComponent />
}