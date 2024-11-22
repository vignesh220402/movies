import express from "express";
import moviesRouter from "./routes/movies.js"; // Ensure this path is correct
const app = express();
const port = 3000;
app.use("/movies", moviesRouter);
app.get("/",(req,res)=>{
    res.json({msg:"hello"})
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
