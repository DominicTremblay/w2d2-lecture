const displayLater = (callback) => {

  // const callback = function () {
  //   console.log("Executing the console.log after 3000ms")
  // };

  setTimeout(()=>{

    callback();

  }, 3000);

}

displayLater(() => console.log("Executing the console.log after 3000ms"));