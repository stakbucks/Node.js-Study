import Post from "../models/Post";

export const home = async (req, res) => {
  try {
    console.log("1");
    const posts = await Post.find({});
    console.log("2");
    console.log(posts);
    return res.send(posts);
  } catch {
    return res.send("server-error");
  }
};
export const boardShow = async (req, res) => {
  const id = String(req.params.id);
  console.log(id);
  const post = await Post.find({ _id: id });
  console.log(post);
  return res.send(post[0]);
};
export const boardEdit = (req, res) => {
  const id = Number(req.params.id);
  const video = videos.filter((v) => v.id === id);
  const newTitle = req.body.newTitle;
  console.log(newTitle);
  video[0].title = newTitle;
  return res.send(video[0]);
};
export const boardUpload = async (req, res) => {
  const { id, title, text } = req.body;
  await Post.create({
    title,
    text,
    views: 0,
    createdAt: Date.now(),
  });
  return res.redirect("/");
};
export const boardDelete = (req, res) => res.send("Board Delete");
