let urlBase = "http://localhost:3000/api"

let urls = {
    continents: `${urlBase}/continents`,
    countries: `${urlBase}/countries`
}

const getHome = async (req, res) =>{
    res.json(urls);
}

export const methods = {
    getHome
}