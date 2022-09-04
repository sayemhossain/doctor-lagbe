import React, { useEffect, useState } from "react";
import ManageContactMessageContainer from "./ManageContactMessageContainer";

const ManageContactMessage = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch(`https://desolate-anchorage-09734.herokuapp.com/contact`)
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);
  return (
    <div className="">
      <div>
        <h3
          className="text-xl md:px-20 mt-5 text-center "
          style={{ fontFamily: "Teko" }}
        >
          All Contact Message
        </h3>
      </div>
      <hr className="mb-5" />
      <div className="bg-base-100 p-2 rounded-lg">
        <div class="overflow-x-auto">
          <table class="table table-zebra w-full ">
            <thead>
              <tr className="bg-primary">
                <th>No.</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <ManageContactMessageContainer
                  key={contact._id}
                  contact={contact}
                  index={index}
                ></ManageContactMessageContainer>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageContactMessage;
