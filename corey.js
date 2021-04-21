// let likeButton = document.createElement("button")
// let disLike = document.createElement("button")

let postForm = document.querySelector("#new-post");
let body = document.querySelector("body");
let posts = [];

fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((postsArr) => {
    postsArr.forEach(function (postObj) {
      posts = postsArr;
      postToDom(postObj);
    });
  });

// HELPER FUNCTION
function postToDom(postObj) {
  let postContainer = document.createElement("div");
      postContainer.className = "postCont";
      body.append(postContainer);
// POST TITLE
  let postTitle = document.createElement("h2");
      postTitle.innerText = postObj.name;
      postContainer.append(postTitle);
// POST IMAGE
  let postImg = document.createElement("img");
      postImg.src = postObj.image;
      postContainer.append(postImg);
      postImg.className = "postImg";
// POST TEXT
  let post = document.createElement("h3");
      post.innerText = postObj.post;
      postContainer.append(post);

//  COMMENT FORM
  let commentForm = document.createElement("form")
      commentForm.id = "commentForm"
      commentForm.type = "text"
      postContainer.append(commentForm)
      
 let commentInput = document.createElement("input")
      commentInput.name = "commentInput"
      commentInput.type = "text"
      commentInput.placeholder = "Leave a comment"
      commentForm.appendChild(commentInput)
   
 let commentSubmit = document.createElement("button")
      commentSubmit.id = "commentSubmit"
      commentSubmit.type = "submit"
      commentSubmit.innerText = "Submit"
      commentForm.appendChild(commentSubmit)

  let commentList = document.createElement("ul");
      commentList.className = "postUl"
      postContainer.append(commentList);


// TURNS ARRAY OF COMMENTS INTO OBJECTS & APPENDS TO PAGE
postObj.comments.forEach((comments) => {
      // console.log(comments);
      
      let commentLi = document.createElement("li");
      commentLi.innerText = comments;
      commentList.append(commentLi);

})

      // COMMENT FORM EVENT LISTENER   
 
commentForm.addEventListener("submit", (event) => {
      event.preventDefault()
      // console.log(commentInput.value)

  let newComment = commentInput.value
      // console.log(newComment)
      fetch(`http://localhost:3000/posts/${postObj.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        comments: [ ...postObj.comments, newComment ]
      }),
    })
      .then((res) => res.json())
      .then((newCommentList) => {
        commentList.innerText = " "  
        // update the object in memory
        // console.log(postObj)
        // render the comment to the DOM
        console.log(newCommentList)
      
        newCommentList.comments.forEach((newCommentsObj) => {
        console.log(newCommentsObj)          
      let commentLi = document.createElement("li");
          commentLi.innerText = newCommentsObj
          commentList.append(commentLi)
    
          event.target.reset()
    })
  })

}
)
}

// // COMMENT FORM EVENT LISTENER   
    // commentForm.addEventListener("submit", (event) => {
    //     event.preventDefault()
    //     console.log(commentInput.value)
    //     let newComment = commentInput.value 
    //     // let newComment = commentForm.commentInput.value
    //     let commentLi = document.createElement("li")
    //       commentLi.innerText = newComment
    //     commentList.append(commentLi)
      
    // })


 




    // commentForm.addEventListener("submit", (event) => {
    //   event.preventDefault()
    //   console.log(commentInput.value)
    // })

// POST FORM
  postForm.addEventListener("submit", function (event) {
      event.preventDefault();
      // console.log(event.target.titlePost.value);
      // console.log(event.target.postImage.value);
      // console.log(event.target.postText.value);
    
      let whatUserTitles = event.target.titlePost.value;
      let imgLink = event.target.postImage.value;
      let postText = event.target.postText.value;
    
      fetch("http://localhost:3000/posts/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: whatUserTitles,
          post: postText,
          image: imgLink,
          comments: []
        }),
      })
        .then((res) => res.json())
        .then((newlyCreatedPost) => {

          console.log(newlyCreatedPost)
          postToDom(newlyCreatedPost);
          event.target.reset();
        })
    })





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

      







