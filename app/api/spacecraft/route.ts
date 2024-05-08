import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/client"
import schema from "./schema"

export async function GET(request: NextRequest) {
    const spaceCraft = await prisma.spaceCraft.findMany();

    return NextResponse.json(spaceCraft)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const newSpaceCraft = await prisma.spaceCraft.create({
        data: {
            name: body.name,
            image: body.image,
            nation: body.nation,
            yearLaunched: body.yearLaunched,
            description: body.description,
        }
    })

    return NextResponse.json(newSpaceCraft, { status: 201 })
}