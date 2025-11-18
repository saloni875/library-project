import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    seatNumber: {
        type: Number,
        required: true,
        unique: true
    },
    isOccupied: {
        type: Boolean,
        default: false
    },
    currentMember: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member",
        default: null
    }
});

export default mongoose.model("Seat", seatSchema);
