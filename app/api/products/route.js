import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// جلب كل المنتجات
export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

// إضافة منتج جديد
export async function POST(request) {
  const data = await request.json();
  const product = await prisma.product.create({
    data: {
      name: data.name,
      price: parseFloat(data.price),
    },
  });
  return NextResponse.json(product);
}
