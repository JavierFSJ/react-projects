import { Router } from "express";
import { ProductRoutes } from "./product.routes";

const createApplicationRouter = () => {
  const router = Router();

  //Add your routes here
  router.use('/api/products', ProductRoutes.Routes(router));


  return router;
}

export default createApplicationRouter;