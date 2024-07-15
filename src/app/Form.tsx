"use client"
import { useFormState } from 'react-dom';
import { requestValue, Value } from './action'
import {FormSchema} from "@/app/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

export default function Form() {
    const [state, dispatch, isPending] = useFormState<Value, FormData>(requestValue, { data: null });
    const {
        register,
        formState: { errors, isValid },
    } = useForm<{value: string}>({
        resolver: zodResolver(FormSchema),
        mode: "all",
    });

    const cantSubmit = !isValid || isPending;

    return <form action={dispatch}>
        <input type="text" {...register("value")}/>
        {errors.value && <div style={{'color': 'red'}} >{errors.value.message}</div>}
        <div>
            <button type="submit" disabled={cantSubmit}>Request</button>
        </div>
        {isPending && <div>...loading...</div>}
        {state.data && <div>Response: {JSON.stringify(state.data)}</div>}
        {state.error && <div>Response Error: {state.error}</div>}
    </form>
}