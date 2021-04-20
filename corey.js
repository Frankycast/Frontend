console.log("hi")

let likeButton = document.createElement("button")
let disLike = document.createElement("button")


// let foodsOl = document.querySelector("#grocery-list")


// function.postToDom(post)



fetch("http://localhost:3000/Posts")
    .then(res => res.json())
    .then((postsArr) => {
        postsArr.forEach(function(postObj){
            console.log(postObj)
            
            let postTitle = document.createElement("h2")
            let postContainer = document.createElement("div")        
            let post = document.createElement("h3")
            let postImg = document.createElement("img")
            post.innerText = postObj.Post 
            postTitle.innerText = postObj.name
            postImg.src = postObj.image
            postContainer.append(postObj)
            // turnPostObjToHTML(foodObj)
            
        })
        
    })
    console.log("HHHHHHHOOOOOOOOOPPPPPPYYYY")
    
    let postForm = document.querySelector("#new-post")
    let body = document.querySelector("body")
    
    // postForm = document.createElement("form")
    
    
    let postTitle = document.createElement("h2")
    
    postForm.addEventListener("submit", function(event){
        event.preventDefault()
        
        let postContainer = document.createElement("div")        
        let post = document.createElement("h3")
        
        console.log(event.target.originalPost.value)
        
        let whatUserPosts = event.target.originalPost.value
        // let imgLink = event.target.image.value
        post.append(whatUserPosts)
        postContainer.append(post)
        body.append(postContainer)
        // postContainer.append(commentForm)
        
        fetch("http://localhost:3000/Posts/", {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Post: whatUserPosts,
                // image: imgLink,
                // name: whatUserTitles
            })
        })
            .then(res => res.json())
            .then((newlyCreatedPost) => {
                postToDom(newlyCreatedPost)
                event.target.reset()
            
    
    })


})

let commentForm = document.querySelector("#newComment")
let commentList = document.querySelector("#commentList")

commentForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(event.target.originalPost.value)
        
        let whatUserComments = event.target.originalPost.value
        let comment = document.createElement("li")
        comment.append(whatUserComments)
        commentList.append(comment)
        postContainer.append(comment)
        

       
    



        // let commentBtn = document.createElement("INPUT");
        // commentBtn.setAttribute("type", "button");
        // commentBtn.append(postContainer)

    })
   