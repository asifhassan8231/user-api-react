import React from 'react';
import './Friends.css'

const Friends = () => {
    const emailList = localStorage.getItem("email_List");
    const emailParsed = JSON.parse(emailList);
    const myObj = Object.keys(emailParsed);
    return (
        <div className="friends">
            <h2>Friends email <span>({myObj.length})</span></h2>
            {
                myObj.map(obj => <li>{obj}</li>)
            }
        </div>
    );
};

export default Friends;