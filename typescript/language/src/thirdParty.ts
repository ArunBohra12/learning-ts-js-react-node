import axios from 'axios';

axios
  // we can set the type of return object
  // .get<string>('https://jsonplaceholder.typicode.com/todos/1')
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log(res.data))
  .catch(() => {
    console.log('error');
  });
