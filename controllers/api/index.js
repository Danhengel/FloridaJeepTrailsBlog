// Import the required modules
import { Router } from "express";
import userRoutes from "./user-routes";
import postRoutes from "./post-routes";
import commentRoutes from "./comment-routes";

// Set up the routes
const router = Router();
router.use("/users", userRoutes); // Routes for user-related functionality
router.use("/posts", postRoutes); // Routes for post-related functionality
router.use("/comments", commentRoutes); // Routes for comment-related functionality

// Export the router
export default router;
