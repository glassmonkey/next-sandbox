"use client"
import { useFormState } from 'react-dom';
import {requestValue, Value} from './action'

export default function Form() {
    const [state, dispatch, isPending] = useFormState<Value, FormData>(requestValue, { data: null });
    return <form action={dispatch}>
        <input type="text" name="value" />
        <button type="submit">Request</button>
        {isPending && <div>...loading...</div>}
        {state.data && <div>Response: {JSON.stringify(state.data)}</div>}
        {state.error && <div>Response Error: {state.error}</div>}
    </form>
}