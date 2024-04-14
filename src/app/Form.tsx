"use client"
import { useFormState } from 'react-dom';
import { requestValue } from './action'

export default function Form() {
    const [state, action, isPending] = useFormState(requestValue, null);

    return <form action={action}>
        <input type="text" name="value" />
        <button type="submit">Request</button>
        {isPending && <div>...loading...</div>}
        {state && <div>Response: {JSON.stringify(state.value)}</div>}
    </form>
}