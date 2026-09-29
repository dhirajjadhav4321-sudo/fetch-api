async function dhiraj(){
    let data= await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
  let response= await data.json();
console.log(response)
}
dhiraj();