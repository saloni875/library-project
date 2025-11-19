import Seat from "../models/Seat.js";

export const getAllSeat = async(req, res) =>{
    try{
        const seats = await Seat.find();
        res.json(seats);
    } catch (err){
        res.status(500).json({error : "Fail to fetch the seat"});
    }
};