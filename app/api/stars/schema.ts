import { z } from "zod";

const schema = z.object({
    name: z.string().min(3),
    type: z.string(),
    magnitude: z.string(),
    description: z.string(),
    constellationName: z.string(),
})

export default schema;