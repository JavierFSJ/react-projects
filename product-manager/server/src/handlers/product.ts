import { Request, Response } from "express";

const sampleProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
  },
  {
    id: 2,
    name: "Product 2",
    price: 9.99,
  },
]


export const createProduct = (req: Request, res: Response) => {

}

export const getProducts = (req: Request, res: Response) => {
  res.json(sampleProducts);
};