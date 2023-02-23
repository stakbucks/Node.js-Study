import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EditPost from "./components/post/EditPost";
import Home from "./pages/Home";
import Login from "./pages/account/Login";
import UploadPost from "./components/post/UploadPost";
import Signup from "./pages/account/Signup";
import SignupForm from "./components/form/SignupForm";
import SignupSuccess from "./components/SignupSuccess";
import AllPosts from "./components/post/AllPosts";
import Post from "./components/post/Post";

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
      { path: "/board/:id", element: <Post /> },
      {
        path: "/show-all",
        element: <AllPosts />,
      },
      {
        path: "/board/:id/edit",
        element: <EditPost />,
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
