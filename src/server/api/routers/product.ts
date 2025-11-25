import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      name: z.string(),
      price: z.number(),
      description: z.string(),
      imageUrl: z.string().optional(),
      categoryId: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.create({
        data: {
          name: input.name,
          price: input.price,
          description: input.description,
          categoryId: input.categoryId,
          reference: `PROD-${Date.now()}`,
          images: { createMany: { data: [{ url: input.imageUrl ?? "", order: 1 }] } },
        },
      });
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.product.findMany({include: { images: true }});
  }),
  getList: publicProcedure.query(async ({ ctx }) => {
     const data = await ctx.db.product.findMany({
      include: { images: {select:{url : true}}, category: {select: {name: true, id: true}} },
    });

    return data.map(product=> ({
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.images[0]?.url ?? "",
        price: product.price,
        inStock: product.inStock,
        category: product.category
      }));
    
  }),
  setStockStatus: publicProcedure
    .input(z.object({
      productId: z.number(),
      inStock: z.boolean()
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.product.update({
        where: { id: input.productId },
        data: { inStock: input.inStock }
      });
    }),
});
