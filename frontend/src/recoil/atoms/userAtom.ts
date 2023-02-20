import { atom, selector } from "recoil";
import { IUserLoggedIn } from "../../interfaces/User";
import { isLoggedIn } from "../../api/userApi";

export const userLoggedIn = atom<IUserLoggedIn>({
  key: "userLoggedIn",
  default: {
    isLoggedIn: false,
    user: {},
  },
});

export const checkAuthSelector = selector({
  key: "userLoggedInSelector",
  get: async () => {
    const response = await isLoggedIn();
    return response.data;
  },
});
