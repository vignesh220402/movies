import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.send(`get all movies list`)
})
router.post("/", (req, res) => {
    res.send(`create a movie`)
})
router.put("/:id", (req, res) => {
    res.send(`update a movie-`)
})
router.delete("/:id", (req, res) => {
    res.send(`update a movie`)
})
export default router