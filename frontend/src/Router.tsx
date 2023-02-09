import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DeletePost from "./pages/DeletePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import Post from "./pages/Post";
import UploadPost from "./pages/UploadPost";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/board/upload",
        element: <UploadPost />,
      },
      {
        path: "/board/:id",
        element: <Post />,
      },
      {
        path: "/board/:id/edit",
        element: <EditPost />,
      },
      {
        path: "/board/:id/delete",
        element: <DeletePost />,
      },
    ],
  },
]);

export default router;
