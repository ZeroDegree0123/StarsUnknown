import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client"
import schema from "../schema";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const planet = await prisma.planet.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!planet) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(planet)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const planet = await prisma.planet.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!planet) return NextResponse.json({ error: "Product not found" }, { status: 400 });

    const updatedPlanet = await prisma.planet.update({
        where: { id: planet.id },
        data: {
            name: body.name,
            image: body.image,
            type: body.type,
            size: body.size,
            moons: body.moons,
            distance: body.distance,
            description: body.description,
            starName: body.starName
        }
    })

    return NextResponse.json(updatedPlanet)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const planet = await prisma.planet.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!planet) return NextResponse.json({ error: 'planet Not Found' }, { status: 404 });

    await prisma.planet.delete({
        where: { id: planet.id }
    })

    return NextResponse.json({})
}