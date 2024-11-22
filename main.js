import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({msg:"hello"})
})
app.get("/movies",(req,res)=>{

})
app.post("/movies",(req,res)=>{
    
})
app.put("/movies/:id",(req,res)=>{
    
})
app.delete("/movies/:id",(req,res)=>{
    
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})