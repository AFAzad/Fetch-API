fetch("/readme.txt")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });

// We can also use write our codes in short forms and we use here JSON file.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Can't fetch data"));

//Fetch : how to insert data on server

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
