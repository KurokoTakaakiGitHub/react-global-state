import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push({ pathname: "/users" });
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users" });
  };

  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <br />
      <br />
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
