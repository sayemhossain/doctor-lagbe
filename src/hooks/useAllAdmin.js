import { useEffect, useState } from "react";

const useAllAdmin = () => {
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/alladmin`)
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, []);
  return [admins];
};
export default useAllAdmin;
