const axios = require('axios');

axios.get('/user?ID=myid')
  .then(function (response_if_success) {
    console.log(response_if_success);
  })
  .catch(function (response_if_error) {
    console.log(response_if_error);
  })
  .finally(function () {
    console.log("Almays Executed");
  });