import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getPostInfo, IPost } from "../api/postApi";
import styled from "styled-components";

const Text = styled.div`
  white-space: pre-line;
`;

const Modal = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid pink;
  background-color: aqua;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const EditBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  bottom: 10px;
`;

const XBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;
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
    <Modal>
      <h1>{data?.title}</h1>
      <div style={{ whiteSpace: "pre-line" }}>{data?.text}</div>
      <EditBtn onClick={handleClick}>수정하기</EditBtn>
      <XBtn onClick={() => navigate("/")}>✕</XBtn>
    </Modal>
  );
}
export default Post;
