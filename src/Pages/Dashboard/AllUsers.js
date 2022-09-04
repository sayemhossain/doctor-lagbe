import React from "react";
import useUser from "../../hooks/useUser";
import AllUserRow from "./AllUserRow";

const AllUsers = () => {
  const [users, setUsers] = useUser([]);

  return (
    <div>
      <div class="drawer drawer-mobile pb-10">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5">
          <div>
            <div>
              <div className="mb-10">
                <h3 className="text-xl text-center uppercase">All User</h3>
                <hr className="w-28 mx-auto mt-2" />
              </div>
              <div className="md:w-[800px] md:pb-10 p-2">
                <div class="overflow-x-auto">
                  <table class="table table-compact w-full">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users?.map((user, index) => (
                        <AllUserRow
                          key={user._id}
                          user={user}
                          index={index}
                        ></AllUserRow>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
