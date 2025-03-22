//02 add effect no table
import React, { useEffect, useState } from "react";
import "../CSS/UserList.css";

interface User {
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        
        console.log(data); 
      });
  }, []);

  return (
    <div className="main">
      <h2>User List Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="user-list">
          {users.map((user, index) => (
            <div key={index} className="user-card">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
