import { Link } from "react-router-dom";

function SignupSuccess() {
  return (
    <>
      <h1>회원가입 성공</h1>
      <span>
        <Link to="/">홈으로 가기</Link>
      </span>
    </>
  );
}
export default SignupSuccess;
