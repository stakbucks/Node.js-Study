/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { getTrending, IPost } from "../api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

function Home() {
  const { data, isLoading } = useQuery<IPost[]>("trending", getTrending);
  console.log(data);
  return (
    <>
      <h1>Welcome to Stakbucks!</h1>
      <ul>
        <h2>Trending</h2>
        {data?.map((post) => (
          <li key={post._id}>
            <Link to={`/board/${post._id + ""}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <span>
        <Link to="board/upload">추가하기</Link>
      </span>
    </>
  );
}
export default Home;
