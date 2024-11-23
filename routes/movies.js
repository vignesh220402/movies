import express from "express"
import { MovieCreate, MovieDelete, MovieIndex, MovieUpdate, MoviesDetails } from "../controllers/movies.controller.js"
const router = express.Router()

router.get("/", MovieIndex)
router.get("/:id",MoviesDetails)
router.post("/", MovieCreate)
router.put("/:id", MovieUpdate)
router.delete("/:id", MovieDelete)
export default router