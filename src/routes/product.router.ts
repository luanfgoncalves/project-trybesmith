// ./src/routes/product.router.ts

import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

router.post('/', productController.create);
router.get('/', productController.getProducts);

export default router;
