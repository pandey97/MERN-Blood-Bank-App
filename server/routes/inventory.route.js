import express from 'express';
import AuthMiddleware from '../middlewares/auth.middleware.js';
import { createInventoryController } from '../controllers/inventory.controller.js';

const router = express.Router();

router.post("/create-inventory", AuthMiddleware, createInventoryController)

export default router;