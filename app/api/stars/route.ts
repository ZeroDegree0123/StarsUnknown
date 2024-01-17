import { NextRequest, NextResponse } from "next/server";

import prisma from "../../../prisma/client"

export async function GET(request: NextRequest) {
    const stars = await prisma.star.findMany();

    return NextResponse.json(stars)
}

