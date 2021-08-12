import { useQuery } from "react-query";
import * as api from "../lib/api";

const Query = () => {
  const { isError, error, data, isFetching } = useQuery("users", api.getUsers);
  if (isFetching) {
    return <div>loading...</div>;
  }
  if (isError) {
    <div>Error : {error.message}</div>;
  }

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Query;
