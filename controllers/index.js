
import { Router } from "express";
import apiRoutes from "./api";
import homeRoutes from "./home-routes";

const router = Router();

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

export default router;
