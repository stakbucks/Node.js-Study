import axios from "axios";
import { getTrending, IPost } from "../api/postApi";
import { useQuery } from "react-query";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { postGithub } from "../api/userApi";
import { useForm } from "react-hook-form";
import { searchPost } from "../api/postApi";
interface ISearchForm {
  text: string;
}

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.main`
  width: 1150px;
  height: auto;
  min-height: 100vh;
  border-left: 1px solid tomato;
  border-right: 1px solid tomato;
`;

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searching, setSearching] = useState(false);
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
    console.log(code);
    // postGithub(code).then((res) => console.log(res));
  }, []);

  const { data, isLoading } = useQuery<IPost[]>("trending", getTrending);
  return (
    <Main>
      <Wrapper>
        <h1>환영합니다</h1>
        <span style={{ cursor: "pointer" }} onClick={() => setSearching(true)}>
          ⌕
        </span>
        {searching ? (
          <form onSubmit={handleSubmit(() => {})}>
            <input
              {...register("text", {
                required: true,
                onChange: async (e) => {
                  try {
                    await searchPost(e.target.value).then((res) => {
                      setResult(res.data);
                      console.log(res.data);
                    });
                  } catch (error) {
                    console.log(error);
                  }
                },
              })}
            />
            <button>검색</button>
          </form>
        ) : null}
        {isDirty ? (
          <ul>
            <h2>{text}에 대한 검색 결과...</h2>
            {result.map((post) => (
              <li key={post._id}>
                <Link to={`/board/${post._id + ""}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            <h2>인기 게시물</h2>
            {data?.map((post) => (
              <li key={post._id}>
                <Link to={`/board/${post._id + ""}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        )}

        <div>
          <Link to="board/upload">추가하기</Link>
        </div>
        <div>
          <Link to="/login">로그인</Link>
        </div>
        <div>
          <Link to="/signup">회원가입</Link>
        </div>
        <Outlet />
      </Wrapper>
    </Main>
  );
}
export default Home;
