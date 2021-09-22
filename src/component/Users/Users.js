import React, { useEffect } from 'react';
import { useState } from 'react';
import User from '../User/User';
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('./user.json')
            .then(res => res.json())
            .then(data => setUsers(data.results));
    }, [])
    return (
        <div className="users">
            {
                users.map(user => <User key={user.login.uuid} user={user} />)
            }
        </div>
    );
};

export default Users;