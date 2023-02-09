import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getVideoInfo, IPost } from "../api";
function Post() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id + "";
  const { data, isLoading } = useQuery<IPost>("video", () => getVideoInfo(id));
  const handleClick = () => {
    navigate("edit");
  };
  console.log(data?.title);
  return (
    <>
      <h1>{data?.title}</h1>
      <div>{data?.text}</div>
      <button onClick={handleClick}>수정하기</button>
    </>
  );
}
export default Post;
