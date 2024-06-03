import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/client"
import schema from "./schema"

export async function GET(request: NextRequest) {
    const stars = await prisma.star.findMany();
    return NextResponse.json(stars)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const newStar = await prisma.star.create({
        data: {
            name: body.name,
            type: body.type,
            magnitude: body.magnitude,
            description: body.description,
            constellationName: body.constellationName
        }
    })

    return NextResponse.json(newStar, { status: 201 })
}