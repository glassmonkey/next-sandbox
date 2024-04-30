import ServerComponent from "@/app/ServerComponent";
import Form from "@/app/Form";
import ClientComponent from "@/app/ClientComponent";
import {Suspense} from "react";
import {NextUniversalStoreProvider} from "@/state/provider/NextUniversalProvider";
import {Message} from "@/app/struct";



export default function Page() {
  return <NextUniversalStoreProvider<Message> value={{"message": "test", "language": "jp"}}>
    <ServerComponent />
    <ClientComponent />
    <Form />
  </NextUniversalStoreProvider>
}