import { useHistory } from "react-router-dom";

export const useLogoutButton = () => {
  const history = useHistory();

  const removeToken = () => {
    window.localStorage.removeItem("token");
    history.push("/");
  };

  return removeToken;
};
