import { model, Schema } from "mongoose";

const schema = new Schema({
    title: String,
    desc: String,
})
const Movie = model("Movie", schema)
export default Movie
