import Menu from "../models/menuModel.js";

export const getMenu = async(req, res) =>{
    try{
        const menu = await Menu.find();

        res.status(200).json(menu);
    }catch(error){
        res.status(404).json({message: error.message});
    }
    
};
