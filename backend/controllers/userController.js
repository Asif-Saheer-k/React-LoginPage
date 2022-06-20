const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const registerUser = asyncHandler(async (req, res) => {
  console.log("gdhgf",req.body);
  const { name, email, password} = req.body;

  const uerExists = await User.findOne({ email });
  if (uerExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Error occured");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

const userdatails=asyncHandler(async(req,res)=>{
  const users=await User.find()
  if(users){
   res.status(201).json({

   })
  }

})


module.exports = { registerUser, authUser,userdatails };
