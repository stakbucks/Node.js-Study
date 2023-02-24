import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { IPost } from "../../interfaces/Post";
import { getPostInfo } from "../../api/postApi";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { userLoggedIn } from "../../recoil/atoms/userAtom";
import { IUser, IUserLoggedIn } from "../../interfaces/User";

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 300px;
  border: 1px solid black;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
`;
const Text = styled.div`
  white-space: pre-line;
  margin: 5px;
  font-size: 16px;
`;

const EditBtn = styled.button`
  position: absolute;
  bottom: -30px;
  right: 10px;
  cursor: pointer;
`;

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isAuthUser, setIsAuthUser] = useState(false);
  const loggedIn = useRecoilValue<IUserLoggedIn>(userLoggedIn);
  const { data, isLoading } = useQuery<IPost>(
    ["post", `${id}`],
    () => getPostInfo(id + ""),
    {
      onSuccess: (data) => {
        data.createdBy === loggedIn.user._id
          ? setIsAuthUser(true)
          : setIsAuthUser(false);
        console.log(data.createdBy, loggedIn.user._id);
      },
    }
  );
  const handleEditClick = () => {
    navigate(`/board/${id}/edit`);
  };
  return (
    <Wrapper>
      <Title>{data?.title}</Title>
      <Text>{data?.text}</Text>
      {isAuthUser ? <EditBtn onClick={handleEditClick}>수정</EditBtn> : null}
    </Wrapper>
  );
}

export default Post;
