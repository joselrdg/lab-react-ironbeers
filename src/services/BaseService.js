import axios from 'axios';

const http = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
})

http.interceptors.response.use(response => response.data)

export const getBeers = () => {    
    return http.get('/')
}

export const getBeer = (id) => {
    return http.get(`/${id}`)
    
}

export const getRamdon = () => {
    return http.get('/random')
}


export const postBeer = (fields) => {
    return http.post('/new', {...fields})
}

export const getSearch = (query) => {
    return http.get(`/search?q=${query}`)
    
}