import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `ねこ${val}`,
    image: "https://source.unsplash.com/nKC772R_qog",
    email: "1111@aaa.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https:HogeHoge.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <SUserArea>
        <h2>ユーザー一覧</h2>
        <SearchInput></SearchInput>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-filter, minmax(200px, 1fr));
  grid-gap: 20px;
`;
