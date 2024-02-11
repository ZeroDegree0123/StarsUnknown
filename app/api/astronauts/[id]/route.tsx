import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client"
import schema from "../schema";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const astronaut = await prisma.astronaut.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!astronaut) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(astronaut)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const astronaut = await prisma.astronaut.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!astronaut) return NextResponse.json({ error: "Product not found" }, { status: 400 });

    const updatedAstronaut = await prisma.astronaut.update({
        where: { id: astronaut.id },
        data: {
            name: body.name,
            image: body.image,
            nation: body.nation,
            missions: body.missions,
            description: body.description,
        }
    })

    return NextResponse.json(updatedAstronaut)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const astronaut = await prisma.astronaut.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!astronaut) return NextResponse.json({ error: 'astronaut Not Found' }, { status: 404 });

    await prisma.astronaut.delete({
        where: { id: astronaut.id }
    })

    return NextResponse.json({})
}