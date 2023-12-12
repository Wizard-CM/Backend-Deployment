import express from "express";
// Controllers
import {
  deleteUser,
  dynamicRouting,
  getAllUsers,
  newUsers,
  updateUser,
} from "../controller/users.js";

const router = express.Router();

router.get("/all", getAllUsers);

router
  .route("/userid/:id")
  .get(dynamicRouting)
  .put(updateUser)
  .delete(deleteUser);

// POST REQUESTS

router.post("/new", newUsers);

export default router;
