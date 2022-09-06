import axios from 'axios'

export const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
        axios.get(`${process.env.REACT_APP_API_URL}/products`).then(response=>{
            resolve(response.data.rows)
        }).catch(err=>{
            reject(err.message | "Error")
        })
    })
}