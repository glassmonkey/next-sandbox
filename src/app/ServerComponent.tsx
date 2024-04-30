import {HOST} from "@/config";
import {getForceUniversalValue} from "@/state/provider/NextUniversalProvider";
import {Message} from "@/app/struct";

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
    const value = getForceUniversalValue<Message>("message")
    if (res instanceof Error) {
        return <div>API Error: {res.message}</div>
    }
    const text = await res.text()
    return <div>
        <div>Server Api Response: {text}</div>
        <div>Server Universal Context: {value}</div>
    </div>
}