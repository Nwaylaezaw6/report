const express = require('express');
const { createUser, getUser, getUserById, updateUser, deleteUser } = require('../controllers/userControllers');
const router = express.Router();
const userRouter=express.Router();
userRouter.post('/',createUser );
userRouter.get('/', getUser);
userRouter.get('/:id',getUserById );
userRouter.put('/:id', updateUser);
userRouter.delete('/:id',deleteUser);

module.exports = userRouter;
