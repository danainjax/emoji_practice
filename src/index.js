document.addEventListener("DOMContentLoaded", () => {

});
const commentList = document.getElementById('comments-list');

// add event listener to find the value of submit button
// this grabs the comment box and stores it's contents in the variable 'comment'
const commentForm = document.querySelector("#create-comment-form");
commentForm.addEventListener("submit", function(e) {
    e.preventDefault();
    //grabs the user input from the comment field
    const newComment = document.querySelector("#comment").value
    const heart = "🖤";
    //place it on the DOM
    // const commentItem = document.createElement('li');
    // commentItem.innerText = newComment
    // commentList.appendChild(commentItem)
    commentList.innerHTML += `
        <li>${newComment}</li> <p id="heartclick"> ${heart}</p>`
        const listenToYourHeart = document.getElementById('heartclick');
        listenToYourHeart.addEventListener("click", () => {
            console.log('I hear you');
            listenToYourHeart.innerText = "❤️";
        })
       
            
    commentForm.reset();
})



// comment = document.getElementById('comment');
// comment.value
// this returns what was typed in the comment box

// const clickBtn = document.getElementById('btn');
// clickBtn.addEventListener("click", () => {
    
//     console.log(clickBtn.value);
// })

// then take that value and store in a variable

// append the value stored in the variable to the dom in the comments div

