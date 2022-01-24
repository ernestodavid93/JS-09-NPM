const axios = require('axios').default;

const sendDeleteRequest = async () => {
    try {
        const resp = await axios.delete('http://localhost:3000/users/2')
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendDeleteRequest();
