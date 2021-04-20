// let likeButton = document.createElement("button")
// let disLike = document.createElement("button")

let postForm = document.querySelector("#new-post")
let body = document.querySelector("body")
let posts = []


fetch("http://localhost:3000/Posts")
    .then(res => res.json())
    .then((postsArr) => {
        postsArr.forEach(function(postObj){
            posts = postsArr
            postToDom(postObj)
        }) 
    })
        function postToDom(enterPost) {
            
            let postContainer = document.createElement("div")        
                body.append(postContainer)
                postContainer.className = "postCont"
            let postTitle = document.createElement("h2")
                postTitle.innerText = postObj.name    
                postContainer.append(postTitle)
            let postImg = document.createElement("img")
                postImg.src = postObj.image
                postContainer.append(postImg)
                postImg.className = "postImg"
            let post = document.createElement("h3")
                post.innerText = postObj.Post 
                postContainer.append(post)
            let commentList = document.createElement("ul")
                postContainer.append(commentList)
           
            postObj.Comments.forEach(comments =>{
                    console.log(comments)
                let commentLi = document.createElement("li")
                    commentLi.innerText = comments
                    commentList.append(commentLi)
                })
            }
            

        


        postForm.addEventListener("submit", function(event){
            event.preventDefault()
            console.log(event.target.originalPost.value)           
            
            let whatUserTitles = event.target.titlePost.value
            let imgLink = event.target.postImage.value
            let postText = event.target.postText.value

            fetch("http://localhost:3000/Posts/", {
                method: "POST", 
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: whatUserTitles,
                    Post: postText,
                    image: imgLink,
                    
                })
            })
                .then(res => res.json())
                .then((newlyCreatedPost) => {
                        postToDom(newlyCreatedPost)
                        // event.target.reset()


})
})        


    
// commentList.addEventListener("submit", (event) => {
//         event.preventDefault(
//         console.log(event.target.originalPost.value)
    
        
//         let whatUserComments = event.target.originalPost.value
//         let comment = document.createElement("li")
//         comment.append(whatUserComments)
//         commentList.append(comment)
//         postContainer.append(comment)
        

       
        // let commentBtn = document.createElement("INPUT");
        // commentBtn.setAttribute("type", "button");
        // commentBtn.append(postContainer)

    // })
    
