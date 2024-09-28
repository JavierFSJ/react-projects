import { Request, Response } from "express";
import Product from "../models/Product.model";

export const createProduct = async (req: Request, res: Response) => {
  //Validate the request body
  /*  
  
  await check('name').notEmpty().withMessage('El nombre del Producto no puede ser vacio')
    .run(req);

  await check('price')
        .notEmpty().withMessage('El precio del Producto no puede ser vacio')
        .isNumeric().withMessage('El precio no es valido')
        .custom( value => value > 0).withMessage('El precio debe ser mayor a 0')
        .run(req);

  */

  try {
    const product = await Product.create(req.body);
    res.json({
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const productos = await Product.findAll();
    res.json({
      data: productos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const producto = await Product.findOne({ where: { id } });

    if (!producto) {
      res.status(404).send({ message: "Producto no encontrado" });
      return;
    }

    res.json({
      data: producto,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const producto = await Product.findOne({ where: { id } });
    if (!producto) {
      res.status(404).send({ message: "Producto no encontrado" });
      return;
    }
    const updatedProduct = await producto.update(req.body);
    await producto.save();
    res.json({
      data: updatedProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateAvailability = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const producto = await Product.findOne({ where: { id } });
    if (!producto) {
      res.status(404).send({ message: "Producto no encontrado" });
      return;
    }

    producto.availability = req.body.availability;
    await producto.save();
    res.json({
      data: producto,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const producto = await Product.findOne({ where: { id } });
    if (!producto) {
      res.status(404).send({ message: "Producto no encontrado" });
      return;
    }
    await producto.destroy();
    res.json({ message: "Producto eliminado con éxito" });
  } catch (error) {
    console.log(error);
  }
};
