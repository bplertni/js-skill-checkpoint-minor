// Question #2: Fetching User List from Server
// เริ่มเขียนโค้ดตรงนี้

let newUsers = [];
let longName = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convert the response to JSON
  })
  .then((data) => {
    data.forEach((entry) => {
      newUsers.push(entry.name);
    });
    newUsers.forEach((user) => {
      if (user.length > 17) {
        longName.push(user);
      }
    });
    console.log(newUsers);
    console.log(longName);
  })

  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });
