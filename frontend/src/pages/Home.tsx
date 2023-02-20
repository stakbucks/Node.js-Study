import axios from "axios";
import { getAll } from "../api/postApi";
import { useQuery } from "react-query";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { postGithub } from "../api/userApi";
import { useForm } from "react-hook-form";
import { searchPost } from "../api/postApi";
import { ISearchForm } from "../interfaces/Search";
import { IPost } from "../interfaces/Post";
import PostPreview from "../components/PostPreview";
import { Title } from "../styles/Title";
import ShowLatest from "../components/showPosts/ShowLatestPosts";
import { Wrapper } from "../styles/PageWrapper";
import { useCookies } from "react-cookie";
const Goto = styled.div`
  position: absolute;
  right: 50px;
  bottom: 100px;
  width: 100px;
  height: auto;
  gap: 20px;
  text-decoration: underline;
`;

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty },
  } = useForm<ISearchForm>({
    defaultValues: { text: "" },
  });
  const text = watch("text");
  const [code, setCode] = useState(location.search.split("=")[1]);
  const [result, setResult] = useState<IPost[]>([]);
  useEffect(() => {
    // postGithub(code).then((res) => console.log(res));
  }, []);

  const { data, isLoading } = useQuery<IPost[]>("latest", getAll);
  return (
    <Wrapper>
      <Title>최근 게시물</Title>
      {data ? <ShowLatest data={data} /> : null}
      <Goto>
        <Link to="/">더 보기 →</Link>
      </Goto>
    </Wrapper>
  );
}
export default Home;
