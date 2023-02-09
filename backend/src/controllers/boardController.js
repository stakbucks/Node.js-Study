export const boardShow = (req, res) => {
  return res.send(`Show ${req.params.id}`);
};
export const boardEdit = (req, res) => res.send("Board Edit");
export const boardDelete = (req, res) => res.send("Board Delete");
export const boardUpload = (req, res) => res.send("Board Upload");
