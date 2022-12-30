import { DynamicObject } from "../../context/global-context";
import "./styles.css";

const User = ({ user }: UserProps) => (
  <div className="userCard">
    <img
      src={user?.picture?.thumbnail}
      className="userProfile"
      alt={"user"}
      width={48}
      height={48}
    />
    <div className="userDetails">
      <p className="fullName">
        {user?.name?.first} {user?.name?.last}
      </p>
      <p className="subText">{user?.email || ""}</p>
    </div>
  </div>
);

export default User;

export interface UserProps {
  user?: DynamicObject;
}
