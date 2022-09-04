import React from "react";
import useAllAdmin from "../../hooks/useAllAdmin";
import AllAdminRow from "./AllAdminRow";

const AllAdmin = () => {
  const [admins] = useAllAdmin([]);

  return (
    <div>
      <div class="drawer drawer-mobile pb-10">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center mt-5">
          <div>
            <div>
              <div className="mb-10">
                <h3 className="text-xl text-center uppercase">All Admin</h3>
                <hr className="w-28 mx-auto mt-2" />
              </div>
              <div className="md:w-[800px] md:pb-10 p-2">
                <div class="overflow-x-auto">
                  <table class="table table-compact w-full">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {admins?.map((admin, index) => (
                        <AllAdminRow
                          key={admin._id}
                          admin={admin}
                          index={index}
                        ></AllAdminRow>
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

export default AllAdmin;
