import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string(), price: z.number(), description: z.string(), imageUrl: z.string().optional(), categoryId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create({
        data: {
          name: input.name,
          price: input.price,
          description: input.description,
          categoryId: input.categoryId,
          reference: `PROD-${Date.now()}`,
        },
      });
    }),
    getAll: publicProcedure.query(async ({ ctx }) => {
      return ctx.db.product.findMany();
    }),
});
