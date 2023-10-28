import express from 'express';
import AuthMiddleware from '../middlewares/auth.middleware.js';
import { createInventoryController, getInventoryController } from '../controllers/inventory.controller.js';

const router = express.Router();

router.post("/create-inventory", AuthMiddleware, createInventoryController)
router.get("/get-inventory", AuthMiddleware, getInventoryController)

export default router;