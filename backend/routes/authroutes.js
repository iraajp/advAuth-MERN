import express from 'express';
import{join,access,exit} from '../controllers/auth.controller.js';
const router = express.Router();
router.get('/join',join);
router.get('/access',access);
router.get('/exit',exit);
export default router;
