import {HOST} from "@/config";

export default async function ServerComponent() {
   const res = await fetch(`${HOST}/api/data`, {
       method: "POST",
       cache: "no-cache",
       body: JSON.stringify({"from": "server"})
   }).then((response) => {
       if (!response.ok) {
           throw new Error(response.statusText);
       }
       return response
   }).catch((e: Error) =>  {
       console.error({
           "message": "server side view error",
           "error": e,
       })
       return e
   })
    if (res instanceof Error) {
        return <div>API Error: {res.message}</div>
    }
    const text = await res.text()
    return <div>
        <div>Server Api Response: {text}</div>
    </div>
}