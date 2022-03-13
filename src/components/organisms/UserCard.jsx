import Styled from "styled-components";
import { Card } from "../atoms/card/card";
import { UserIconWithName } from "../molecules/UserIconWithName";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = Styled.div`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd{
    padding-left: 32px;
    padding-bottom: 8px;
    overforw-wrap: break-word;
  }
`;
