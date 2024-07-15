"use client"
import { useFormState } from 'react-dom';
import {FormSchema} from "@/app/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {requestValue, Value} from "@/app/action";
import {useState} from "react";
import {isValid} from "zod";


const useLocalForm = () => {
    const {
        register,
        formState: { errors, isValid, isSubmitting },
        handleSubmit
    } = useForm<{value: string}>({
        resolver: zodResolver(FormSchema),
        mode: "all",
    })
    const [state, setState] = useState<Value>({
        data: null,
    })

    const submit = handleSubmit(async (data: {value: string}) => {
        const result = await requestValue({
            data
        })
        setState(result)
    })

    return {
        register,
        formState: {
          errors,
          isValid,
          isSubmitting,
        },
        handler: submit,
        result: state,
    }

}

export default function Form() {
    const {register, formState, handler, result} = useLocalForm()

    return <form onSubmit={handler}>
        <input type="text" {...register("value")}/>
        {formState.errors.value && <div style={{'color': 'red'}} >{formState.errors.value.message}</div>}
        <div>
            <button type="submit" disabled={!formState.isValid}>Request</button>
        </div>
        <div>{JSON.stringify(result.data)}</div>
        <div>
            {formState.isSubmitting && <div>...loading...</div>}
        </div>
        {
            result.error && <div style={{'color': 'red'}}>{result.error}</div>
        }
    </form>
}