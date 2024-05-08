import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client"
import schema from "../schema";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const spaceCraft = await prisma.spaceCraft.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!spaceCraft) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(spaceCraft)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const spaceCraft = await prisma.spaceCraft.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!spaceCraft) return NextResponse.json({ error: "Product not found" }, { status: 400 });

    const updatedSpaceCraft = await prisma.spaceCraft.update({
        where: { id: spaceCraft.id },
        data: {
            name: body.name,
            image: body.image,
            nation: body.nation,
            yearLaunched: body.yearLaunched,
            description: body.description,
        }
    })

    return NextResponse.json(updatedSpaceCraft)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const spaceCraft = await prisma.spaceCraft.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!spaceCraft) return NextResponse.json({ error: 'spaceCraft Not Found' }, { status: 404 });

    await prisma.spaceCraft.delete({
        where: { id: spaceCraft.id }
    })

    return NextResponse.json({})
}