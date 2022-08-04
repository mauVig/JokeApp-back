import { findAll } from '../model/chistes.dao.js'

let lastOne = null
let flag = true

export const getOne = (req,res) =>{
    findAll()
        .then((all)=>{
            all.filter(val => val.delete === false)
            const limit = all.length - 1            
            let rnd = undefined 

            if (flag){
                rnd =  Math.floor(Math.random()*limit)
                flag = false
                lastOne = rnd
                res.send(all[rnd]) 
            }else{
                do{
                    rnd =  Math.floor(Math.random()*limit)
                }while( rnd === lastOne )
                lastOne = rnd
                res.send(all[rnd])
            }
        })
}