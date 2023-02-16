import User from "../models/User";
import bcrypt from "bcrypt";
import { session } from "express-session";
export const join = async (req, res) => {
  const { name, username, password, email } = req.body;
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    res.status(400);
    return res.send("중복 발생");
  }
  await User.create({
    name,
    username,
    email,
    password,
  });
  console.log("USER ADDED");
  return res.send();
};

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  return res.send(users);
};
export const edit = (req, res) => res.send("Edit User");

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send("Invalid Username");
  }
  const ok = await bcrypt.compare(password, user.password);

  if (!ok) {
    return res.status(400).send("Wrong Password");
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.send(req.session);
};


export const handleUserEdit = (req, res) => res.send("Edit User");
export const handleUserDelete = (req, res) => res.send("Delete User");
