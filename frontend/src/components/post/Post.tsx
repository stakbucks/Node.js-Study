import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { IPost } from "../../interfaces/Post";
import { getPostInfo } from "../../api/postApi";

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 700px;

  border: 1px solid black;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
`;
const Text = styled.div`
  margin: 5px;
  font-size: 16px;
`;

function Post() {
  const { id } = useParams();
  const { data, isLoading } = useQuery<IPost>(["post", `${id}`], () =>
    getPostInfo(id + "")
  );
  return (
    <Wrapper>
      <Title>{data?.title}</Title>
      <Text>{data?.text}</Text>
    </Wrapper>
  );
}

export default Post;
