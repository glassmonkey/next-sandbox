"use client"
import { useFormState } from 'react-dom';
import { requestValue } from './action'

export default function Form() {
    const [state, dispatch, isPending] = useFormState(requestValue, null);

    return <form action={dispatch}>
        <input type="text" name="value" />
        <button type="submit">Request</button>
        {isPending && <div>...loading...</div>}
        {state && <div>Response: {JSON.stringify(state.value)}</div>}
    </form>
}