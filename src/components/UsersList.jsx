import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

export default function UsersList() {
  const [doFetchUsers, isLoadingUsers, isLoadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateUser();
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="w-full h-10" />;
  }

  if (isLoadingUsersError) {
    return <div>Error Loading Users.</div>;
  }

  const renderedUsers = data?.map((user) => {
    return <UsersListItem key={user.id} user={user} />;
  });
  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="text-xl m-2">Users List</h1>
        <Button type="button" loading={isCreatingUser} onClick={handleAddUser}>
          + Add user
        </Button>
        {creatingUserError && "Error Creating User"}
      </div>
      {renderedUsers}
    </div>
  );
}
