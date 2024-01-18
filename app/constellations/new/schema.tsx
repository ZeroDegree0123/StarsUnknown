import { z } from "zod";

const schema = z.object({
    name: z.string().min(3),
    description: z.string(),
    stars: z.array(z.string()),
    distance: z.number(),
})

export default schema;