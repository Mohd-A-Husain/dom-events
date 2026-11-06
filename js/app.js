 // VARIABLES --------------------------
let likesCount = 0
let dislikesCount = 0

// CACHED ELEMENTS ---------------------
const likeButtonElement = document.querySelector('#like-button')
const h3El = document.querySelector('h3')
const commentButtonElement = document.querySelector('#comment-button')
const commentListElement = document.querySelector('ul')
const inputElement = document.querySelector('input')
const DisslikeButtonElement = document.querySelector('#dislike-button')

// FUNCTIONS ---------------------------
const handleAddComment = () => {
    if (inputElement.value) {
        const commentElement = document.createElement('li')
        commentElement.textContent = inputElement.value
        commentListElement.appendChild(commentElement)
        inputElement.value = ''
    }
}

// include the event parameter and console.dir it
// add a new dislikesCount variable next to the existing likesCount
 

// then use it in the event handler
const handleReaction = (event) => {
  if (event.target.id === 'like-button') {
    likesCount = likesCount + 1;
    likeButtonElement.textContent = `${likesCount} like(s). Like this post!`;
  } else {
    dislikesCount = dislikesCount + 1;
    DisslikeButtonElement.textContent = `${dislikesCount} dislike(s). Dislike this post!`;
  }
};



// EVENT LISTENERS ---------------------
likeButtonElement.addEventListener('click', handleReaction)
commentButtonElement.addEventListener('click', handleAddComment)

DisslikeButtonElement.addEventListener('click',handleReaction)
commentButtonElement.addEventListener('click', handleAddComment)