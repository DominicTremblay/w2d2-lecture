const request = require('request');

const getPost = (id, callback) => {
  const task = {
    task_id: 5,
  };

  request(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    function (error, response, body) {
      // data => result of the request that we put in object form
      const data = JSON.parse(body);

      // add data to our task object

      task.todo = data;
      callback(task);
    }
    );
   

   
};

getPost(1, taskObj => console.log(taskObj));
