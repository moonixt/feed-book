import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Dropdown, DropdownItem } from "flowbite-react";
import Image from "next/image";

const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/profile/1");
        setUser(response.data);
        setUserId(id);
        console.log(response);
        console.log(response.data);
      } catch (error) {
        console.error("Server may not connected:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div id="Detalhes">
        {user.map((user) => (
          <div key={user.id} className="space-y-3">

            <div className="pt-20  ">
              <img
                className="pb-2  rounded-full flex justify-start"
                src={`http://127.0.0.1:8000/${user.profile_pic}`}
                alt={user.name}
                style={{ display: "block", margin: "0 auto", width: '450px', height:'450px' }}
              />
               <div>
              <h1>Username: {user.name}</h1>
            </div>
            <div>
              <h1>Bio: {user.bio}</h1>
            </div>
            
            </div>

           
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
