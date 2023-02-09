import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { editVideoTitle, getVideoInfo, IPost } from "../api";
import { useMutation } from "react-query";
import { useState } from "react";

function EditPost() {
  const { data } = useQuery<IPost>("video", () => getVideoInfo(id));
  const params = useParams();
  const id = params.id + "";
  const [title, setTitle] = useState("");
  const { mutate } = useMutation(() => editVideoTitle(id, title));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  return (
    <>
      <h1>{data?.title} 수정하는 중...</h1>
      <form onSubmit={() => mutate()}>
        <label htmlFor="changeTitle">바꿀 이름</label>
        <input onChange={handleChange} name="changeTitle" type="text" />
        <button>저장하기</button>
      </form>
    </>
  );
}
export default EditPost;
