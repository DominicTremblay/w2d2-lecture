const updateUsername = (callback) => {
  const user = { username: 'Bob' };


  setTimeout(() => {
    callback(user)
    console.log(user); // username is now 'Sponge Bob'
  }, 2000)

  return user; // username is still 'Bob'
  
};


const user = updateUsername(userObj => {
  userObj = { username: 'Sponge Bob'};

});

console.log('user', user); // this will return {username: 'Bob'} 