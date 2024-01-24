import { z } from "zod";

const schema = z.object({
    name: z.string().min(3),
    description: z.string(),
    distance: z.string(),
})

export default schema;