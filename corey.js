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





postForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(event.target.titlePost.value);
  // console.log(event.target.postImage.value);
  // console.log(event.target.postText.value);

  let whatUserTitles = event.target.titlePost.value;
  let imgLink = event.target.postImage.value;
  let postText = event.target.postText.value;

  fetch("http://localhost:3000/Posts/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: whatUserTitles,
      Post: postText,
      image: imgLink,
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

