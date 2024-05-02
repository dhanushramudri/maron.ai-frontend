import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

const HomePage = () => {
  const { user } = useUser();
  console.log(user);

  const sendDataToBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/user", {
        // Adjusted endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        console.log("Data sent to server successfully");
      } else {
        console.log("Error in sending data to server");
      }
    } catch (error) {
      console.error("Error sending user data to the backend:", error);
    }
  };

  useEffect(() => {
    if (user) {
      sendDataToBackend();
    }
  }, [user]);

  if (!user) {
    return <div>Loading user data</div>;
  }

  return (
    <div>
      <div>This is Home page</div>
      <div>{user.id}</div>
      <div>Username: {user.username}</div>
      <div>First Name: {user.firstName}</div>
      <div>Full Name: {user.fullName}</div>
      <img
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        src={user.imageUrl}
        alt=""
      />
    </div>
  );
};

export default HomePage;
