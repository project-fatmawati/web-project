// Hapus bagian ini
let likeData = JSON.parse(localStorage.getItem('likeData')) || {};

function updateLikeCount(itemId) {
    const likeCountElement = document.getElementById(`like-count-${itemId}`);
    const likes = likeData[itemId] || 0;
    likeCountElement.textContent = likes;
}

document.querySelectorAll('.like-btn').forEach(button => {
    const itemId = button.getAttribute('data-item-id');
    
    updateLikeCount(itemId);
    
    button.addEventListener('click', () => {
        if (!likeData[itemId]) {
            likeData[itemId] = 0;
        }
        likeData[itemId] += 1;

        localStorage.setItem('likeData', JSON.stringify(likeData));

        updateLikeCount(itemId);
    });
});
