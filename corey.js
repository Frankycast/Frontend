// let likeButton = document.createElement("button")
// let disLike = document.createElement("button")

let postForm = document.querySelector("#new-post");
let body = document.querySelector("body");
let posts = [];

fetch("http://localhost:3000/Posts")
  .then((res) => res.json())
  .then((postsArr) => {
    postsArr.forEach(function (postObj) {
      posts = postsArr;
      postToDom(postObj);
    });
  });

function postToDom(postObj) {
  let postContainer = document.createElement("div");
  postContainer.className = "postCont";
  body.append(postContainer);
  //FC
//   postContainer.dataset.id = postObj.id

  let postTitle = document.createElement("h2");
  postTitle.innerText = postObj.name;
  postContainer.append(postTitle);

  let postImg = document.createElement("img");
  postImg.src = postObj.image;
  postContainer.append(postImg);
  postImg.className = "postImg";

  let post = document.createElement("h3");
  post.innerText = postObj.Post;
  postContainer.append(post);

  postObj.Comments.forEach((comments) => {
    // console.log(comments);
    let commentList = document.createElement("ul");
    commentList.className = "postUl"
    postContainer.append(commentList);
  
    let commentLi = document.createElement("li");
    commentLi.innerText = comments;
    commentList.append(commentLi);
  
<<<<<<< HEAD
  //FC added liked and dislike button
  let likeButton = document.createElement('button')
  likeButton.innerText = "👍"
  likeButton.className = 'likeButton'

  let dislikeButton = document.createElement('button')
  dislikeButton.innerText = "👎"
  dislikeButton.className = "dislikeButton"
  
  let likeNumber = document.createElement('span')
    likeNumber.innerText = postObj.likes
    likeNumber.className = "ammountLikes"

    let dislikeNumber = document.createElement('span')
    dislikeNumber.innerText = postObj.Dislikes
    dislikeNumber.className = "ammountOfDislike"

  likeButton.append(likeNumber)
  dislikeButton.append(dislikeNumber)

  postContainer.append(likeButton, dislikeButton)
// franky add comment button
  let commentButton = document.createElement('button')
  commentButton.innerText = "Comment"
  commentButton.className = 'commentB'

  postContainer.append(commentButton)
  //FC added delete button
  let deletePost = document.createElement(`button`)
  deletePost.innerText = "Delete Post"
  deletePost.className = "delete"

  postContainer.append(deletePost)
//  });
// }
//FC add eventLisener for every delete button
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
=======
  


  })

  
  let commentForm = document.createElement("form")
  commentForm.id = "commentForm"
  commentForm.type = "text"
  postContainer.append(commentForm)
  
  let commentInput = document.createElement("input")
  commentInput.id = "commentInput"
  commentInput.type = "text"
  commentInput.placeholder = "Leave a comment"
  commentForm.appendChild(commentInput),
  
  commentSubmit = document.createElement("button")
  commentSubmit.id = "commentSubmit"
  commentSubmit.type = "submit"
  commentSubmit.innerText = "Submit"
  commentForm.appendChild(commentSubmit)



  commmentForm.addEventListener("submit", (event) => {
        event.preventDefault()
        newCommentText = event.target.commentInput.value
        commentSubmit = event.target.CommentSubmit.value
        let commentLi = document.createElement("li")        
          commentLi.innerText = newCommentText
        commentList.append(commentLi)

        // newIngredientName = newIngredientForm.name.value
        // let ingredientLi = document.createElement("li")
        //       ingredientLi.innerText = newIngredientName
        //   ingredientsUl.append(ingredientLi)
      })
    }
//   
// clickfunction.addeventListener("click", (event)=>{
//   if screen value === size value
//     return zoom 
//   else {
//      create/appened post form at x/y location
//     }
//    else if x/y === post location
//    bring post to front 
      // }

// 
//  
//      post form appends to clickfunction location
// 
// 
//      find x/y coordinates
// 
// 
// 

        // fetch("http://localhost:3000/Posts/", {
        //   method: "POST",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     Comments: [
        //       textComment
        //     ]
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((newComment) => {
        //     console.log(newComment)
        //     postToDom(newComment);
        //     event.target.reset();
          // })
      


// })



>>>>>>> 06b1e1fee278df3cf5939d7bd90e56004f45ce01


//FC add eventListener for every like 
likeButton.addEventListener(`click`, (e) =>{
// console.log(likeButton)
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
//FC Dislike button numbers goes up
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
});
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

<<<<<<< HEAD

// commentForm = document.createElement("form")
// commentForm.id = "comment-form"
// commentForm.type = "text"
// body.append(commentForm)

// commentInput = document.createElement("input")
// commentInput.type = "text"
// commentInput.placeholder



// commmentForm.addEventListener("submit", (event) => {
//         event.preventDefault(
//         console.log(event.target.originalPost.value)

//         let whatUserComments = event.target..value
//         let comment = document.createElement("li")
//         comment.append(whatUserComments)
//         commentList.append(comment)
//         postContainer.append(comment)

//         let commentBtn = document.createElement("INPUT");
//         commentBtn.setAttribute("type", "button");
//         commentBtn.append(postContainer)

// <<<<<<< HEAD
//         // let commentBtn = document.createElement("INPUT");
//         // commentBtn.setAttribute("type", "button");
//         // commentBtn.append(postContainer)

//     })
   
// =======
// })
// })
// >>>>>>> 5080104225596bc441fc687994ccddfbb84fb548
=======
>>>>>>> 06b1e1fee278df3cf5939d7bd90e56004f45ce01
