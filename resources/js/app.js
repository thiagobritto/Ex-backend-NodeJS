require('./bootstrap');

axios.get('/sanctum/csrf-cookie').then(response => {
    console.log('csrf-cookie: ', response);
});

axios.get('/users').then(response => {
    console.log(response);
});