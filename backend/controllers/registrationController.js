import Registration from "../models/Registration.js";

export const registerUser = async (req, res) => {
  const { name, email, event } = req.body;
  const reg = new Registration({ name, email, event });
  await reg.save();
  res.status(201).json(reg);
};

export const getRegistrations = async (req, res) => {
  const regs = await Registration.find().populate("event");
  res.json(regs);
};
