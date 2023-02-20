import styled from "styled-components";
import { IPost } from "../../interfaces/Post";
import { Container } from "../../styles/PostContainer";
import PostPreview from "../PostPreview";

function ShowAllPosts({ data }: { data: IPost[] }) {
  return (
    <Container>
      {data?.map((post) => (
        <PostPreview key={post._id} post={post} />
      ))}
    </Container>
  );
}
export default ShowAllPosts;
