import { z } from "zod";

const schema = z.object({
    name: z.string().min(3),
    type: z.string(),
    size: z.string(),
    distance: z.string(),
    description: z.string(),
    constellation: z.string()
})

export default schema;