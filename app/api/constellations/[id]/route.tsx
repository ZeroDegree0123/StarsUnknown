import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client"
import schema from "../schema";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const constellation = await prisma.constellation.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!constellation) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(constellation)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const constellation = await prisma.constellation.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!constellation) return NextResponse.json({ error: "Product not found" }, { status: 400 });

    const updatedConstellation = await prisma.constellation.update({
        where: { id: constellation.id },
        data: {
            name: body.name,
            description: body.description,
            // distance: body.distance
        }
    })

    return NextResponse.json(updatedConstellation)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const constellation = await prisma.constellation.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!constellation) return NextResponse.json({ error: 'Constellation Not Found' }, { status: 404 });

    await prisma.constellation.delete({
        where: { id: constellation.id }
    })

    return NextResponse.json({})
}