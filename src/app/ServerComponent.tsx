export default async function ServerComponent() {
   const res = await fetch("http://127.0.0.1:3000/api/data", {
       method: "POST",
       cache: "no-cache"
   }).then((response) => {
       if (!response.ok) {
           throw new Error(response.statusText);
       }
       return response
   }).catch((e: Error) =>  {
       console.error({
           "message": "action error",
           "error": e,
       })
       return e
   })
    if (res instanceof Error) {
        return <div>API Error</div>
    }
    const text = await res.text()
    return <div>
        <div>Api Response: {text}</div>
    </div>
}