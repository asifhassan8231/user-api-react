import React from 'react';
import { addFriend, removeFriend } from '../../utilities/utilities';
import './User.css'

const User = (props) => {
    const { name, email, gender, phone, picture } = props.user;
    return (
        <div className="user">
            <img src={picture.thumbnail} alt="" />
            <h2>
                <span>{name.title}{" "}</span>
                <span>{name.first}{" "}</span>
                <span>{name.last}{" "}</span>
            </h2>
            <h4>{gender}</h4>
            <p>
                <small>Email: {email}{" "}</small>
                <small>Contacts: {phone}</small>
            </p>
            <button onClick={() => addFriend(email)}>Add</button>
            <button onClick={() => removeFriend(email)}>Remove</button>
        </div>
    );
};

export default User;