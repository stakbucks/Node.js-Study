import { useRecoilState } from "recoil";
import { isLoggedIn } from "../api/userApi";
import { IUserLoggedIn } from "../interfaces/User";
import { userLoggedIn } from "../recoil/atoms/userAtom";

async function useCheckAuth(data: IUserLoggedIn) {
  const [loggedIn, setLoggedIn] = useRecoilState<IUserLoggedIn>(userLoggedIn);
  setLoggedIn(data);
  return data;
}
export default useCheckAuth;
