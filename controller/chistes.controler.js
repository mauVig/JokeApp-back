import { findAll } from '../model/chistes.dao.js'

let azarUltumo = null
let flag = true

export const getOne = (req,res) =>{
    findAll()
        .then((all)=>{
            all.filter(val => val.delete == false)
            const limit = all.length - 1            
            let rnd = undefined 

            if (flag){
                rnd =  Math.floor(Math.random()*limit)
                flag = false
                azarUltumo = rnd
                res.send(all[rnd]) 
            }else{
                do{
                    rnd =  Math.floor(Math.random()*limit)
                }while( rnd === azarUltumo )
                azarUltumo = rnd
                res.send(all[rnd])
            }
        })
}