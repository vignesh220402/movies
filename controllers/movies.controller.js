export const MovieIndex =(req, res) => {
    res.send(`get all movies list`)
}

export const MovieCreate =(req, res) => {
    console.log(req.body)
    return res.json(req.body)
}
export const MovieUpdate =(req, res) => {
    res.send(`Update movie list`)
}
export const MovieDelete =(req, res) => {
    res.send(`Delete movie list`)
}