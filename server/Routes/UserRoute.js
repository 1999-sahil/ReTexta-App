import express from "express";
import { deleteUser, followUser, getUser, UnFollowUser, UpdateUser, getAllUser } from "../Controllers/UserController.js";
import AuthMiddleWare from "../MiddleWare/AuthMiddleWare.js";

const router = express.Router();

router.get('/', getAllUser)
router.get('/:id', getUser)
router.put('/:id', AuthMiddleWare, UpdateUser)
router.delete('/:id', AuthMiddleWare, deleteUser)
router.put('/:id/follow', AuthMiddleWare, followUser)
router.put('/:id/unfollow', AuthMiddleWare, UnFollowUser)

export default router;
