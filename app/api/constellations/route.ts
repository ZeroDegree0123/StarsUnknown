import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/client"
import schema from "./schema"

export async function GET(request: NextRequest) {
    const constellations = await prisma.constellation.findMany();

    return NextResponse.json(constellations);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const newConstellation = await prisma.constellation.create({
        data: {
            name: body.name,
            description: body.description,
            distance: body.distance,
            // stars: body.stars
        }
    })

    return NextResponse.json(newConstellation, { status: 201 })
}

