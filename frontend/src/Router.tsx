import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DeletePost from "./pages/DeletePost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import UploadPost from "./pages/UploadPost";
import Signup from "./pages/Signup";
import SignupForm from "./components/SignupForm";
import SignupSuccess from "./components/SignupSuccess";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
        children: [
          {
            path: "",
            element: <SignupForm />,
          },
          {
            path: "success",
            element: <SignupSuccess />,
          },
        ],
      },
    ],
  },
]);

export default router;
