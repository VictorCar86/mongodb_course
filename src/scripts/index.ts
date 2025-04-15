import { prisma } from "./prisma";

(async () => {
  const products = await prisma.products.create({
    data: {
      name: "Product 2",
      description: "Product 2 description",
      price: 200,
    }
  });
  // const products = await prisma.products.findMany();
  console.log("🚀 ~ products:", products);
})();