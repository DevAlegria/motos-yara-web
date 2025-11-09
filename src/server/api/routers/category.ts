import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const categoryRouter = createTRPCRouter({
    /**
 * Creates a new category in the database.
 *
 * @procedure create
 * @description
 *  This procedure creates a category with a required name and,
 *  optionally, a description and a parent category identifier.
 *
 * @input
 *  - name (string): The category name. Must be at least 3 characters long.
 *  - description (string, optional): A brief description of the category.
 *  - parentId (number, optional): The ID of the parent category, if it exists.
 *
 * @returns Category
 *  Returns the created category object.
 */
    create: publicProcedure.input(z.object({
        name: z.string().min(3),
        description: z.string().optional(),
        parentId: z.number().optional(),
    }))
    .mutation(async ({ctx, input}) => {
        return await ctx.db.category.create(({
            data: {
                name: input.name,
                description: input.description,
                parentId: input.parentId,
            },
        }));
    }),
    getAll: publicProcedure.query(async ({ctx}) => {
        const categories = await ctx.db.category.findMany({
        orderBy: { name: "asc" },
        });
        return categories;
    })
});