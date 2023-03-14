const axios = require('axios')

    //Solution # 1
async function fetchAlbums() {
    return fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response=>response.json())
    .then(albums => albums.filter(albums => albums.title))
    .then(filteredAlbums => filteredAlbums.map(album =>album));

    }
// fetchAlbums()
// .then(albums => console.log(albums))
// .catch(error => console.error(error));

    //Solution # 2
async function fetchPosts() {
    const {data} =  await axios.get('https://jsonplaceholder.typicode.com/posts')
    const sortedData = data.filter(post => post.title)
    .sort((a,b)=>a.id - b.id).map(data=>data)// if descending then b.id - a.id
    console.log(sortedData)
}
// fetchPosts()

    //Solution # 3
async function fetchUsers() {    
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => users.filter(filteredUser => filteredUser.email))
        .then(filteredData => {
            const count = filteredData.reduce((acc, user) => {
                if(user.phone)
                    return acc + 1
                return acc
            },0);
            return {
                count,
                users: filteredData
            }
        });
}
// fetchUsers()
//   .then(result => console.log(result))
//   .catch(error => console.error(error))

    //Solution # 4
//this is for html code, to run the html code, please comment the above axios require and below fetchComments function.
const fetchComments = async () => {
    let placeholder = document.querySelector('#output');
    console.log(placeholder);
    let output = '';
    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) =>
        data?.filter((album) => {
          return album?.hasOwnProperty('name');
        })
      );
    console.log(comments);
    for (let comment of comments) {
      output += `<tr>
        <td>${comment.name}</td>
        <td>${comment.body}</td>
        <td>${comment.email}</td>
        <td>${comment.id}</td>
        <td>${comment.postId}</td>
        </tr>`;
    }
  
    placeholder.innerHTML = output;
  };
  //fetchComments()

    //Solution # 5
const fetchTodos = async () => {
    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
    );
    
    const completed = data
        ?.filter(({ completed }) => completed)
        ?.map((todo) => todo);
    console.log(completed);
    };
    
    fetchTodos();