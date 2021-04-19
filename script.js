
postContainer = document.createElement("div")
postTitle = document.createElement("h2")
postForm = document.createElement("form")
comment = document.createElement("li")

likeButton = document.createElement("button")
disLike = document.createElement("button")

//     "id": 1,
//     "Title": "header",
//     "Post" : "p",
//     "image": "<a> http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
//     "likes": 8,  <btn>
//     "Dislikes": 9,  <btn.
//     "Catagory" : "cats", <id>
//     "Comments": [        //forEach   <li>
//       "bullshit"
//     ]

createPost.addEventListener("click", (event) => {


    var mainForm = document.getElementById("mainForm"),
        textBox = document.createElement("input");

    textBox.id="tmpTextBox";
    textBox.type="text";

    document.getElementById("clickme").onclick = function () {
         mainForm.appendChild(textBox);
    }

    document.getElementById("submitme").onclick = function () {
        mainForm.removeChild(textBox);
    }

   mainForm.append
})




    

// let postForm = document.createElement("form");
// postForm.setAttribute('method',"post");
// postForm.setAttribute('action',"submit.php");

// var i = document.createElement("input"); //input element, text
// i.setAttribute('type',"text");
// i.setAttribute('name',"username");

// var s = document.createElement("input"); //input element, Submit button
// s.setAttribute('type',"submit");
// s.setAttribute('value',"Submit");

// postForm.appendChild(i);
// postForm.appendChild(s);

//and some more input elements here
//and dont forget to add a submit button

// document.getElementsByTagName('body')[0].appendChild(postForm);


// MOUSE LOCATION 

function printMousePos() {
    var cursorX;
    var cursorY;
    document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
document.getElementById('test').innerHTML = "x: " + cursorX + ", y: " + cursorY;
}
}
