import { conection } from './conection.js'



export const findAll = async() => {
    return conection( async(db)=>{
       return await db.collection('chistes').find({}).toArray()   
    }) 
}