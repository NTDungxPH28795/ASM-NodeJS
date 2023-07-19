import Product from "../models/Product"
import productValidator from "../validations/products"

export const create = async( req, res)=>{
    try{
        const {error} = productValidator.validate(req.body)

        if(error){
            return res.status(400).json({
                message: error.details[0].message,
            })
        }
        const data = await Product.create(req.body)
        if(!data){
            return res.status(404).json({
                message: "Create products failed"
            })
        }
        return res.status(200).json({
            message: "Create products successfully", 
            data
        })
    }catch(error){
        return res.status(500).json({
            message: error.message,
        })
    }
}

export const getAll = async( req, res)=>{
    try{

        const data = await Product.find({})
        if(!data){
            return res.status(404).json({
                message: "Get all products failed"
            })
        }
        return res.status(200).json({
            message: "Get all products successfully", 
            data
        })
    }catch(error){
        return res.status(500).json({
            message: error.message,
        })
    }
}
export const getDetail = async( req, res)=>{
    try{

        const data = await Product.findById(req.params.id)
        if(!data){
            return res.status(404).json({
                message: "Get detail products failed"
            })
        }
        return res.status(200).json({
            message: "Get detail products successfully", 
            data
        })
    }catch(error){
        return res.status(500).json({
            message: error.message,
        })
    }
}
export const remove = async( req, res)=>{
    try{

        const data = await Product.findByIdAndDelete(req.params.id)
        if(!data){
            return res.status(404).json({
                message: "Remove products failed"
            })
        }
        return res.status(200).json({
            message: "Remove products successfully", 
            data
        })
    }catch(error){
        return res.status(500).json({
            message: error.message,
        })
    }
}
export const update = async( req, res)=>{
    try{

        const {error} = productValidator.validate(req.body)

        if(error){
            return res.status(400).json({
                message: error.details[0].message,
            })
        }

        const data = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!data){
            return res.status(404).json({
                message: "Update products failed"
            })
        }
        return res.status(200).json({
            message: "Update products successfully", 
            data
        })
    }catch(error){
        return res.status(500).json({
            message: error.message,
        })
    }
}
