import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/client"

export async function GET(request: NextRequest) {
    const constellations = await prisma.constellation.findMany();

    return NextResponse.json(constellations)
}

export async function POST(request: NextRequest) {
    const body = await request.json();


    // const validation = schema
}