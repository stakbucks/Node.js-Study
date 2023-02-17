import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EditPost from "./pages/post/EditPost";
import Home from "./pages/Home";
import Login from "./pages/account/Login";
import Post from "./components/ShowPost";
import UploadPost from "./pages/post/UploadPost";
import Signup from "./pages/account/Signup";
import SignupForm from "./components/form/SignupForm";
import SignupSuccess from "./components/SignupSuccess";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/board/:id",
            element: <Post />,
          },
        ],
      },
      {
        path: "/board/upload",
        element: <UploadPost />,
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
