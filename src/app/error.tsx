"use client"
import {useEffect} from "react";

export default function Error({error, reset}: { error: Error & { digest?: string }, reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h1>error page</h1>
            {error.message}
        </div>
    )
}