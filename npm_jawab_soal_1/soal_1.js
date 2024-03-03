const axios = require('axios');

// GET Request
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

// POST Request
axios.post('/user', {
  firstName: 'Nadhif',
  lastName: 'Al Rozin'
})
.then(function (respon) {
  console.log(respon);
})
.catch(function (error) {
  console.log(error);
});