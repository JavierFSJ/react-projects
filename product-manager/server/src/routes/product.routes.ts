import { Router } from "express";
import { getProducts } from "../handlers/product";

export class ProductRoutes {


  static Routes(router: Router){
    //Add routes here
    router.get('/',  getProducts);


    return router;
  }

}