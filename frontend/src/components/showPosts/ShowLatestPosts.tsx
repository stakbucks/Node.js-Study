import styled from "styled-components";
import PostPreview from "../PostPreview";
import { IPost } from "../../interfaces/Post";
import { Container } from "../../styles/PostContainer";

function ShowLatest({ data }: { data: IPost[] }) {
  return (
    <Container>
      {data?.slice(0, 8).map((post) => (
        <PostPreview key={post._id} post={post} />
      ))}
    </Container>
  );
}
export default ShowLatest;
