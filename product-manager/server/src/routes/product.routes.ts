import { Router } from "express";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middlewares";

import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
  updateProduct,
} from "../handlers/product";

export class ProductRoutes {
  static Routes(router: Router) {
    //Add routes here
    router.get("/", getProducts);
    router.get(
      "/:id",
      param("id").isInt().withMessage("ID no valido"),
      handleInputErrors,
      getProductById
    );

    //Validation in route
    router.post(
      "/",
      // Validación
      body("name")
        .notEmpty()
        .withMessage("El nombre de Producto no puede ir vacio"),
      body("price")
        .isNumeric()
        .withMessage("Valor no válido")
        .notEmpty()
        .withMessage("El precio de Producto no puede ir vacio")
        .custom((value) => value > 0)
        .withMessage("Precio no válido"),
      handleInputErrors,
      createProduct
    );

    router.put(
      "/:id",
      body("name")
        .notEmpty()
        .withMessage("El nombre de Producto no puede ir vacio"),
      body("price")
        .isNumeric()
        .withMessage("Valor no válido")
        .notEmpty()
        .withMessage("El precio de Producto no puede ir vacio")
        .custom((value) => value > 0)
        .withMessage("Precio no válido"),
      body("availability").isBoolean().withMessage("Valor no valido"),
      handleInputErrors,
      updateProduct
    );

    router.patch(
      "/:id/availability",
      param("id").isInt().withMessage("ID no valido"),
      body("availability").isBoolean().withMessage("Valor no valido"),
      handleInputErrors,
      updateAvailability
    );

    router.delete(
      "/:id",
      param("id").isInt().withMessage("ID no valido"),
      handleInputErrors,
      deleteProduct
    );

    return router;
  }
}
