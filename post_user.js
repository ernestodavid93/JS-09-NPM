const axios = require('axios');

async function makePostRequest() {

    params = {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com'
      }

      try {
        const resp = await axios.post('http://localhost:3000/users', params);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
      
}



makePostRequest();
