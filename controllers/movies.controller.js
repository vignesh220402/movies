import Movie from "../models/movie.model.js"
export const MovieIndex = (req, res) => {
    res.send(`get all movies list`)
}

export const MovieCreate = async (req, res) => {

    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc,
    })
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie)
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }

}
export const MovieUpdate = (req, res) => {
    res.send(`Update movie list`)
}
export const MovieDelete = (req, res) => {
    res.send(`Delete movie list`)
}