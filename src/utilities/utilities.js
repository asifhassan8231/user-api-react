const addFriend = id => {
    const exists = localStorage.getItem("email_List");
    let email_List = {};
    if (!exists) {
        email_List[id] = 1;
    }
    else {
        const emailParsed = JSON.parse(exists);
        if (emailParsed[id]) {
            const newCount = emailParsed[id] + 1;
            emailParsed[id] = newCount;
            email_List = emailParsed;
        }
        else {
            emailParsed[id] = 1;
            email_List = emailParsed
        }
    }
    localStorage.setItem("email_List", JSON.stringify(email_List));
}

const removeFriend = id => {
    const exists = localStorage.getItem("email_List");
    const emailParsed = JSON.parse(exists);
    if (emailParsed[id]) {
        delete emailParsed[id];
    }
    localStorage.setItem("email_List", JSON.stringify(emailParsed));
}
export { addFriend, removeFriend }