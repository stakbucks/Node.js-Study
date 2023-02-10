import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getPostInfo, IPost } from "../api/postApi";
import styled from "styled-components";

const Text = styled.div`
  white-space: pre-line;
`;

function Post() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id + "";
  const { data } = useQuery<IPost>(["video", id], () => getPostInfo(id));
  const handleClick = () => {
    navigate("edit");
  };
  return (
    <>
      <h1>{data?.title}</h1>
      <div style={{ whiteSpace: "pre-line" }}>{data?.text}</div>
      <button onClick={handleClick}>수정하기</button>
    </>
  );
}
export default Post;
