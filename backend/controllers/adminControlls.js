const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const userdatails = asyncHandler(async (req, res) => {
  const users = await User.find({});
  console.log("usr", users);
  if (users) {
    console.log(users);
    res.json(users);
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});
const user = asyncHandler(async (req, res) => {
  console.log("joofh");
  const user = await User.findById(req.params.userId);
  if (user) {
    console.log(user);
    res.json(user);
  } else {
    res.json(400);
    throw new Error("Error occured");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.query.id);
    await user.remove();
    res.json({});
  } catch (error) {
    res.json(error);
  }
});
const EditUser = asyncHandler(async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const id=req.params.userId
console.log(email,name,id);
    const user = await User.findByIdAndUpdate(id, {
      name: name,
      email: email,
    });
    res.json(user);
    console.log(user);
  } catch (error) {

  }
});

module.exports = { userdatails, user, deleteUser, EditUser };
