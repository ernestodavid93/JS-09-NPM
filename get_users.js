const axios = require('axios');

const sendGetRequest = async () => {
    try {
        const resp = await axios.get('http://localhost:3000/users');
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest();