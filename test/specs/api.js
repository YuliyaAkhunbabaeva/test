// import axios from 'axios';
// let host = 'https://pharma.enrichconsulting.com/facttableservice/rawfact/proj/262/5/Revenue_yrs_base';
//
// describe('', () => {
//   it('should login', async function() {
//     const response = await axios.post(`${host}`, {
//       // email: 'yuliya',
//       // password: 'Olympic_trials-2021'
//     })
//       .then((res) => {
//         console.log(res.data.access_token);
//
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   })
// })

import axios from 'axios';
var data =
  '{"user": "yuliya","password": "Olympic_trials-2021"}';


var config = {
  method: 'post',
  url: 'https://pharma.enrichconsulting.com',

  data : data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
