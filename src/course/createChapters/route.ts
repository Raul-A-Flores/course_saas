

import { NextResponse } from "next/server"

export async function POST(req: Request, res: Response){

    return NextResponse.json({
        hello: 'world'
    })
}