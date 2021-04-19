console.log("hi")

let likeButton = document.createElement("button")
let disLike = document.createElement("button")


// let foodsOl = document.querySelector("#grocery-list")
let postForm = document.querySelector("#new-post")

let postContainer = document.createElement("div")
let postTitle = document.createElement("h2")
let post = document.createElement("h3")
// postForm = document.createElement("form")
let comment = document.createElement("li")



fetch("http://localhost:3000/Posts")
    .then(res => res.json())
    .then((postsArr) => {
        postsArr.forEach(function(postObj){
            console.log(postObj)
            
            // turnPostObjToHTML(foodObj)
        })

    })

postForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    console.log(evt.target.originalPost.value)
    let whatUserPosts = evt.target.originalPost.value



    // fetch("http://localhost:3000/Posts/1", {
    //     method: "POST", 
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         Post: whatUserPosts,
    //         // name: whatUserTitles
    //     })
    // })
    //     .then(res => res.json())
    //     .then((newlyCreatedPost) => {
    //         turnPostObjToHTML(newlyCreatedPost)
        })

// })


// // {} -> < HTML Listener/>
// function turnPostObjToHTML(foodPOJO){
//     console.log(foodPOJO)
//     // CREATE ELEMENTS/MANIPULATE THE DOM
//     let outerLi = document.createElement("li")
//         outerLi.className = "item"

//     let foodNameP = document.createElement("p")
//         foodNameP.className = "js-food middle aligned content"

//     let countSpan = document.createElement("span")
//         countSpan.innerText = foodPOJO.count

//     let incrementButton = document.createElement("button")
//         incrementButton.innerText = "Increment"

//     let deleteButton = document.createElement("button")
//         deleteButton.className = "delete-button"
//         deleteButton.innerText = "X"

//     foodNameP.append(`${foodPOJO.name} - `, countSpan)
//     outerLi.append(foodNameP, incrementButton, deleteButton)
    
//     // outerLi.id = `food-${foodPOJO.id}`
//     outerLi.dataset.id = foodPOJO.id


//     foodsOl.append(outerLi)

//     // Increasing Button Event Listener
//     incrementButton.addEventListener("click", (evt) => {
//         console.log("Hello")
//         // console.log(outerLi.dataset.id)
        
//         // BACKEND 
//         fetch(`http://localhost:3000/foods/${foodPOJO.id}`, {
//             method: "PATCH",
//             headers: {
//                 'Content-Type': 'application/json',
//               },
//             body: JSON.stringify({
//                 count: foodPOJO.count + 1
//             })
//         })
//             .then(res => res.json())
//             .then((updatedFoodObj) => {
//                 // THE DOM
//                 countSpan.innerText = updatedFoodObj.count

//                 // OBJECT IN MEMORY
//                 foodPOJO.count = updatedFoodObj.count

//             })


//     })


//     // Delete Button event listener
//     deleteButton.addEventListener("click", (evt) => {
//         fetch(`http://localhost:3000/foods/${foodPOJO.id}`, {
//             method: "DELETE"
//         })
//             .then(res => res.json())
//             .then((emptyObj) => {
//                 // Me being pessimistic
//                 // UPDATE THE DOM
//                 outerLi.remove()
//             })

//     })

