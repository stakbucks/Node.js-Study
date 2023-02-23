import styled from "styled-components";
import { IPost } from "../interfaces/Post";
import { useNavigate } from "react-router-dom";

const PostContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

function PostPreview({ post }: { post: IPost }) {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/board/${id}`);
  };
  return (
    <PostContainer onClick={() => handleClick(post._id)}>
      {post.title}
    </PostContainer>
  );
}
export default PostPreview;
