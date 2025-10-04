// getAllUsers()

//fetch using then, catch, finally
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  let data = response.json()
  return data;
})
.then((data) =>{
  data.forEach(user => {
    console.log(`username is ${user.name} and email is ${user.email}`);
  });
})
.catch((error) => console.log(error));

//my task is making a table or list and show all the users data in the table or list