import express from "express";
import {
  lawyerGetAllApplications,
  userDeleteApplication,
  userGetAllApplications,
  postApplication,
} from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isAuthenticated, postApplication);
router.get("/lawyer/getall", isAuthenticated, lawyerGetAllApplications);
router.get("/user/getall", isAuthenticated, userGetAllApplications);
router.delete("/delete/:id", isAuthenticated, userDeleteApplication);

export default router;
