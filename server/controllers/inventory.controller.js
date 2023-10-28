import Inventory from "../models/inventory.model.js";
import User from "../models/user.model.js";

export const createInventoryController = async() => {
    try {
        const {email, inventoryType} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return new Error('User Not Found');
        }
        if(inventoryType === 'in' && user.role !== 'donar'){
            return new Error('Not a donar Account');
        }
        if(inventoryType === 'out' && user.role !== 'hospital'){
            return new Error('Not a Hospital');
        }
        const inventory = new Inventory(req.body);
        await inventory.save();
        return res.status(201).send({
            success: true,
            message: 'New Blood Record Added'
        })
    } catch (error) {
        console.log(error);
        return resizeBy.status(500).send({
            success: false,
            message: 'Error in creat inventory API',
            error
        })
    }
}