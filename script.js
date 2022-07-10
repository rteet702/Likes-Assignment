function updateLikes(element) {
    var currLikes = element.parentElement.querySelector('.likes');
    var likeNum = parseInt(currLikes.textContent) + 1;
    currLikes.innerText = likeNum + " like(s)";
}