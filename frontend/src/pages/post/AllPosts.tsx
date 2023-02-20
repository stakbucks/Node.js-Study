import { useQuery } from "react-query";
import { getAll } from "../../api/postApi";
import ShowAllPosts from "../../components/showPosts/ShowAllPosts";
import { IPost } from "../../interfaces/Post";
import { Wrapper } from "../../styles/PageWrapper";
import { Title } from "../../styles/Title";

function AllPosts() {
  const { data, isLoading } = useQuery<IPost[]>("latest", getAll);
  return (
    <Wrapper>
      <Title>모든 게시물</Title>
      {data ? <ShowAllPosts data={data} /> : null}
    </Wrapper>
  );
}
export default AllPosts;
