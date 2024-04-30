import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const data = {"msg": "ok"}
    return Response.json({ data }, {
        status: 200,
    })
}