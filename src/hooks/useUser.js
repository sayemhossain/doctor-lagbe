import { useEffect, useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://desolate-anchorage-09734.herokuapp.com/user`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return [users];
};
export default useUser;
