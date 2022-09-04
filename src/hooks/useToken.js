import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://desolate-anchorage-09734.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "contant-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          setToken(data);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
