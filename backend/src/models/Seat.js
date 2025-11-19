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
    },
    expiryDate: {
        type: Date,
        default: null
    },
    paymentStatus: {
        type: String,
        enum: ["paid", "pending"],
        default: "pending"
    }
},
    { timestamps: true }
);

export default mongoose.model("Seat", seatSchema);
