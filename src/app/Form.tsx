"use client"
import {requestValue} from './action'

export default function Form() {
    return <form action={requestValue}>
        <input type="text" name="value" />
        <button type="submit">Request</button>
    </form>
}