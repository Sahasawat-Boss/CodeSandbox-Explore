//1.1 Fetch with no Loading and table
import React, { useEffect, useState } from "react";
//import CSS
//https://jsonplaceholder.typicode.com/users


interface User {
    name: string;
    email: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    //const [loading, setLoading] = useState<boolean>(true); << Add Later

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                //setLoading(false); << Add Later

                //clg
                console.log(data);

            });
    }, []);


    return (
        <div>
            <div className="user-list">
                {users.map((user, index) => (
                    <div key={index} className="user-card">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
