import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/client"
import schema from "./schema"

export async function GET(request: NextRequest) {
    const astronauts = await prisma.astronaut.findMany();

    return NextResponse.json(astronauts)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const newAstronaut = await prisma.astronaut.create({
        data: {
            name: body.name,
            image: body.image,
            nation: body.nation,
            missions: body.missions,
            description: body.description,
        }
    })

    return NextResponse.json(newAstronaut, { status: 201 })
}