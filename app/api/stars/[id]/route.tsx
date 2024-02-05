import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../../prisma/client"
import schema from "../schema";

interface Props {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const star = await prisma.star.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!star) return NextResponse.json({ error: "Product not found" }, { status: 404 });

    return NextResponse.json(star)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const star = await prisma.star.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!star) return NextResponse.json({ error: "Product not found" }, { status: 400 });

    const updatedstar = await prisma.star.update({
        where: { id: star.id },
        data: {
            name: body.name,
            description: body.description,
            // distance: body.distance
        }
    })

    return NextResponse.json(updatedstar)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const star = await prisma.star.findUnique({
        where: { id: parseInt(params.id) }
    })

    if (!star) return NextResponse.json({ error: 'star Not Found' }, { status: 404 });

    await prisma.star.delete({
        where: { id: star.id }
    })

    return NextResponse.json({})
}