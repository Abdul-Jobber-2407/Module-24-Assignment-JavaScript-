function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    else{
        const [username, domain] = email.split('@');
        return `${username} sent you an email from ${domain}`;
    }
}

console.log(sendNotification("zihad.ph@gmail.com"));