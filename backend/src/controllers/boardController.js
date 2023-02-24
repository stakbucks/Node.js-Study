import Post from "../models/Post";

export const home = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ createdAt: "desc" });
    return res.send(posts);
  } catch {
    return res.send("server-error");
  }
};
export const boardShow = async (req, res) => {
  const id = String(req.params.id);
  const post = await Post.findById(id);
  console.log(post);
  if (post) {
    return res.send(post);
  } else {
    console.log("error");
    return res.status(400).send("Invalid Id");
  }
};
export const boardEdit = async (req, res) => {
  const id = String(req.params.id);
  const { newTitle, newText } = req.body;
  const post = await Post.exists({ _id: id });
  if (!post) {
    return res.sendStatus(404);
  }
  await Post.findByIdAndUpdate(id, {
    title: newTitle,
    text: newText,
  });
  return res.send();
  console.log(newTitle);
};
export const boardUpload = async (req, res) => {
  const { id, title, text, createdBy } = req.body;
  try {
    const newPost = await Post.create({
      title,
      text,
      createdBy,
    });
    return res.send(newPost);
  } catch (error) {
    console.log(error._message);
    return res.status(400);
  }
};
export const boardDelete = async (req, res) => {
  const id = String(req.params.id);
  const post = await Post.exists({ _id: id });
  console.log(id);
  if (!post) {
    return res.sendStatus(404);
  }
  await Post.findByIdAndDelete(id);
  return res.send();
};

export const boardSearch = async (req, res) => {
  const text = req.query.text;
  let post = [];
  if (text) {
    post = await Post.find({
      title: { $regex: text, $options: "i" },
    });
    return res.send(post);
  }
  return res.send([]);
};
