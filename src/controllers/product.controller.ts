// ./src/controllers/product.controller.ts

import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public product = new ProductService();

  create = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.product.create(product);
    res.status(201).json(productCreated);
  };

  getProducts = async (_req:Request, res:Response) => {
    const products = await this.product.getProducts();
    res.status(200).json(products);
  };
}
