const likeEmpty = `♡`
const likeFull = `♥`
let likeButton = document.querySelector(".likeButton")
let postOl =document.querySelector(`#commentList`)

fetch("http://localhost:3000/Posts/")
.then(res => res.json())
.then((postsArray) =>{
  console.log(postsArray)
  postsArray.forEach( postObj => {
    let userName = document.createElement("li")
    userName.className = "user"
    userName.innerText = postObj.name

    let img = document.createElement('img')
    img.src = ""

    let post = document.createElement("p")
    post.className = "userPost"
    post.innerText = postObj.Post

    let likeButton = document.createElement('button')
    likeButton.innerText = "👍"
    likeButton.className = 'likeButton'

    let dislikeButton = document.createElement('button')
    dislikeButton.innerText = "👎"
    dislikeButton.className = "dislikeButton"

    let likeNumber = document.createElement('span')
    likeNumber.innertext = postObj.likes
    likeNumber.className = "ammountLikes"

    let dislikeNumber = document.createElement('span')
    dislikeNumber.innerText = postObj.Dislikes
    dislikeNumber.className = "ammountOfDislike"

  //  debugger
  likeButton.append(likeNumber)
  dislikeButton.append(dislikeNumber)
  userName.append(img, post, likeButton, dislikeButton)
  // debugger

  postOl.append(userName)
})
})


// fetch("http://localhost:3000/Posts")
// .then(res =>res.json())
// .then((postsArr) =>{
//   postsArr.forEach(postObj =>{
// // console.log(postsArr)
// likesIncress(postObj)
// })
// })


// function likesIncress(postObj){
//   console.log(postObj)
  
//    likeNumber.innerText = postObj.likes


//   likeButton.addEventListener("click", (e)=> {
//    e.preventDefault()
//    console.log(postObj)
//    debugger;
//     fetch(`http://localhost:3000/Posts/1`, {
//       method: "PATCH",
//       headers: {"Content-Type": "apllication/json"},
//       body: JSON.stringify({
//         likes: postObj.likes + 1
//       })
//     })
//     .then(res => res.json())
//     .then((updatedLikes) => {
//       console.log(updatedLikes)
//       likeNumber.innerText = updateLikes.likes
//       debugger;
//     updateHeart(e);
//     })
  
// })
// }
// updateHeart = (e) => {
//     if (e.target.textContent === likeEmpty) {
//       e.target.textContent = likeFull
//       e.target.classList.add('activated-like')
//     } else {
//       e.target.textContent = likeEmpty
//       e.target.classList.remove('activated-like')
//     }
//   }

