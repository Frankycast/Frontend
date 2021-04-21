
let postForm = document.querySelector("#new-post");
let body = document.querySelector("body");
let posts = [];


// Get information
fetch("http://localhost:3000/Posts")
  .then((res) => res.json())
  .then((postsArr) => {
    postsArr.forEach(function (postObj) {
      posts = postsArr;
      postToDom(postObj);
    });
  });

function postToDom(postObj) {
  //creating elements in Dom

  // added a div
  let postContainer = document.createElement("div");
  postContainer.className = "postCont";
  body.append(postContainer);
 
  // added a "h2" for Title
  let postTitle = document.createElement("h2");
  postTitle.innerText = postObj.name;
  postContainer.append(postTitle);

  // added a Img
  let postImg = document.createElement("img");
  postImg.src = postObj.image;
  postContainer.append(postImg);
  postImg.className = "postImg";

  // added a "h3" for post
  let post = document.createElement("h3");
  post.innerText = postObj.Post;
  postContainer.append(post);

  // added a "ul" for comments
  let commentList = document.createElement("ul");
  postContainer.append(commentList);

  // added a 'button' for the like button
    let likeButton = document.createElement('button')
  likeButton.innerText = "👍"
  likeButton.className = 'likeButton'

  // added a 'button' for the dislike button
  let dislikeButton = document.createElement('button')
  dislikeButton.innerText = "👎"
  dislikeButton.className = "dislikeButton"
  
  // added a 'span' for the ammount of likes
    let likeNumber = document.createElement('span')
    likeNumber.innerText = postObj.likes
    likeNumber.className = "ammountLikes"

    // added a 'span' for the ammount of dislikes
    let dislikeNumber = document.createElement('span')
    dislikeNumber.innerText = postObj.Dislikes
    dislikeNumber.className = "ammountOfDislike"

  likeButton.append(likeNumber)
  dislikeButton.append(dislikeNumber)

  postContainer.append(likeButton, dislikeButton)
  //added delete button
  let deletePost = document.createElement(`button`)
  deletePost.innerText = "Delete Post"
  deletePost.className = "delete"
  
  postContainer.append(deletePost)

  

//add eventLisener for every delete button
deletePost.addEventListener('click', (f) =>{
    // console.log(`http://localhost:3000/Posts/${postObj.id}`)
    fetch(`http://localhost:3000/Posts/${postObj.id}`,{
        method:"DELETE"  
    })
    .then(res => res.json)
    .then((deleted) => {
    postContainer.remove()
    })
})


//added eventListener for every like 
likeButton.addEventListener(`click`, (e) =>{
// console.log(`http://localhost:3000/Posts/${postObj.id}`)
fetch(`http://localhost:3000/Posts/${postObj.id}`,{
method:"PATCH",
headers:{"Content-Type":"application/json"},
body: JSON.stringify({
  likes: postObj.likes + 1
   })
 })
.then(res => res.json())
.then((upDatedLikes) => {
    likeNumber.innerText = `${upDatedLikes.likes}`
})
})
//added an eventListener for every Dislike button 
dislikeButton.addEventListener(`click`, (b) => {
console.log(`http://localhost:3000/Posts/${postObj.id}`)
fetch(`http://localhost:3000/Posts/${postObj.id}`, {
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        Dislikes: postObj.Dislikes - 1
    })    
})
.then(res => res.json())
.then((upDatedDislikes) => {
    dislikeNumber.innerText = `${upDatedDislikes.Dislikes}`
})
})
// });
}
postForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(event.target.titlePost.value);
  // console.log(event.target.postImage.value);
  // console.log(event.target.postText.value);

  let disLikeCount = document.querySelector('span.ammountOfDislike')
  let likeCount = document.querySelector('span.ammountLikes')
  let whatUserTitles = event.target.titlePost.value;
  let imgLink = event.target.postImage.value;
  let postText = event.target.postText.value;
  likeVar = likeCount
 dislikeVar = disLikeCount
//  debugger;
  fetch("http://localhost:3000/Posts/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: whatUserTitles,
      Post: postText,
      image: imgLink,
      likes: 0,
      Dislikes: 0,
      Comments: []
    }),
  })
    .then((res) => res.json())
    .then((newlyCreatedPost) => {
      console.log(newlyCreatedPost)
      postToDom(newlyCreatedPost);
      event.target.reset();
    })
})

listDeleteButton.addEventListener("click", function(evt){
//   handleDeleteFetch(list, user)
// })

// function handleDeleteFetch(list, user){

  // DELETE THE LIST IN THE BACKEND
 fetch(`http://localhost:3000/lists/${list.id}`, {
     method: "DELETE"
 })
  .then(res => res.json())
  .then(emptyObj => {
      // UPDATE THE USER OBJECT IN MEMORY
          // REACT THING
          let copyOfLists = user.lists.filter(listObj => {
              return list.id !== listObj.id
          })
          user.lists = copyOfLists

      // UPDATE THE DOM
          setLists(user)
  })



}

// Add an item to an array attribute

// fetch("/lists/:id", {
//     method: "PATCH",
//     headers: {

//     },
//     body: JSON.stringify({
      // CREATE
//         items: [...list.items, "new item"],
      // DELETE
//         items: list.items.filter(itemStr => itemToDelete !== itemStr)
//     })
// })




  



