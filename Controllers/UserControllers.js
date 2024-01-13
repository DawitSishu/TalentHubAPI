const asyncHandler = require("express-async-handler");
const Users = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { type, email, password } = req.body;
  if (!type || !email || !password) {
    res.status(400);
    throw new Error("all fields are required");
  }
  const anotherUser = await Users.find({ email });
  if (anotherUser.length > 0) {
    console.log(anotherUser);
    res.status(400);
    throw new Error("email is already taken try with a different one");
  }
  let hashedPassword = await bcrypt.hash(password, 10);
  const token = jwt.sign(
    { userId: newUser._id, email: newUser.email, type: newUser.type },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
  const newUser = await Users.create({
    type,
    email,
    password: hashedPassword,
  });
  res.status(201).json({
    _id: newUser._id,
    email: newUser.email,
    type: newUser.username,
    token,
  });
});

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("all fields are required");
  }
  const user = await Users.find({ email });
  if (user.length == 0) {
    res.status(404);
    throw new Error("email or password is incorrect");
  }
  const correctPassword = await bcrypt.compare(password, user[0].password);
  if (!correctPassword) {
    res.status(404);
    throw new Error("email or password is incorrect");
  }
  const token = jwt.sign(
    { userId: user[0].id, email: user[0].email, type: user[0].type },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
  res.status(200).json({
    token,
  });
});

module.exports = {
  registerUser,
  loginUser,
};
