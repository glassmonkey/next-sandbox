import {NextResponse} from "next/server";

export function POST() {
    const data = {"msg": "ok"}
    return Response.json({ data }, {
        status: 500,
    })
}