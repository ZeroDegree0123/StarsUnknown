import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/client"
import schema from "./schema"

export async function GET(request: NextRequest) {
    const planets = await prisma.planet.findMany();

    return NextResponse.json(planets)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const newPlanet = await prisma.planet.create({
        data: {
            name: body.name,
            type: body.type,
            size: body.size,
            moons: body.moons,
            distance: body.distance,
            description: body.description,
            starName: body.starName
        }
    })

    return NextResponse.json(newPlanet, { status: 201 })
}