import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const data = {"msg": "ok"}
    console.log(await req.json())
    return Response.json({ data }, {
        status: 200,
    })
}