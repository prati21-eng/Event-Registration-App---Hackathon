import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  }
});

export default mongoose.model("Registration", registrationSchema);
