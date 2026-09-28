import { GoTrash } from "react-icons/go";
import { removeUser } from "../store";
import useThunk from "../hooks/use-thunk";
import Button from "./Button";

function UsersListItem({ user }) {
  const [doRemoveUser, loading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 rounded border" key={user.id}>
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row justify-between items-center">
          <Button className="mr-3" loading={loading} onClick={handleClick}>
            <GoTrash />
          </Button>
          {error && <div>Error deleting user.</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
