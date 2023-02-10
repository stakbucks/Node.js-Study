import User from "../models/User";
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
export const login = (req, res) => res.send("Login");
export const search = (req, res) => res.send("Search");

export const handleUserEdit = (req, res) => res.send("Edit User");
export const handleUserDelete = (req, res) => res.send("Delete User");
