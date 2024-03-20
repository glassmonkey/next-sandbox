import Counter from "@/app/Form";
import Form from "@/app/Form";

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
           "message": "view error",
           "error": e,
       })
       return null
   })
    const text = await res?.text()
    return <div>
        <div>ApiResponse: {text}</div>
    </div>
}