import ServerComponent from "@/app/ServerComponent";
import Form from "@/app/Form";
import ClientComponent from "@/app/ClientComponent";
import {Suspense} from "react";



export default function Page() {
  return <>
    <ServerComponent />
    <ClientComponent />
    <Form />
  </>
}