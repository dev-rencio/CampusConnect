document.addEventListener('DOMContentLoaded', () => {

    const likeButtons = document.querySelectorAll('.post-actions button:first-child');
    const commentButtons = document.querySelectorAll('.post-actions .comment-button');
    const photoVideoButton = document.querySelector('.post-options .photo-video-button');
    const postInput = document.querySelector('.post-input-container textarea');
    const postButton = document.querySelector('.post-options .post-button');
    const feedContainer = document.querySelector('.feed');
    const postInputContainer = document.querySelector('.post-input-container');
    

    const loggedInUserName = 'Alex Johnson';
    const loggedInUserProfilePic = 'Images/studentpfp.png';

    // Like button functionality
    likeButtons.forEach(button => {
        let likeCount = 0;
        button.addEventListener('click', () => {
            if (button.textContent === 'Like') {
                button.textContent = 'Liked';
                button.style.color = '#4d95f5';
                likeCount++;
            } else {
                button.textContent = 'Like';
                button.style.color = '#65676b';
                likeCount--;
            }
            console.log('Likes:', likeCount);
        });
    });

    // Toggle comment input area
    commentButtons.forEach(button => {
        const post = button.closest('.post');
        const commentInputArea = post.querySelector('.comment-input-area');
        if (commentInputArea) {
            button.addEventListener('click', () => {
                commentInputArea.style.display = commentInputArea.style.display === 'none' ? 'flex' : 'none';
            });
        }
    });

    // Submit comment
    const submitCommentButtons = document.querySelectorAll('.submit-comment-button');
    submitCommentButtons.forEach(button => {
        const post = button.closest('.post');
        const commentInput = post.querySelector('.comment-input-area input[type="text"]');
        const commentSection = post.querySelector('.comment-section');

        button.addEventListener('click', () => {
            const commentText = commentInput.value.trim();
            if (commentText !== '') {
                const newComment = document.createElement('div');
                newComment.classList.add('comment');
                newComment.innerHTML = `
                    <img src="${loggedInUserProfilePic}" alt="${loggedInUserName}" class="comment-user-pic">
                    <p><strong>${loggedInUserName}:</strong> ${commentText}</p>
                `;
                commentSection.appendChild(newComment);
                commentInput.value = '';
            }
        });
    });

    // Photo/Video upload (simulated)
    if (photoVideoButton) {
        photoVideoButton.addEventListener('click', () => {
            alert('Photo/Video upload feature coming soon!');
        });
    }

    // Create new post
    if (postButton && postInput && feedContainer && postInputContainer) {
        postButton.addEventListener('click', () => {
            const postText = postInput.value.trim();
            if (postText !== '') {
                const newPost = document.createElement('div');
                newPost.classList.add('post');
                newPost.innerHTML = `
                    <div class="post-header">
                        <img src="${loggedInUserProfilePic}" alt="${loggedInUserName}" class="post-user-pic">
                        <div class="post-info">
                            <h3>${loggedInUserName}</h3>
                            <p>Posted just now</p>
                        </div>
                    </div>
                    <p class="post-text">${postText}</p>
                    <div class="post-actions">
                        <button>Like</button>
                        <button class="comment-button">Comment</button>
                        <button>Share</button>
                    </div>
                    <div class="comment-section"></div>
                    <div class="comment-input-area" style="display: none;">
                        <input type="text" placeholder="Write a comment...">
                        <button class="submit-comment-button">Post</button>
                    </div>
                `;
                postInputContainer.insertAdjacentElement('afterend', newPost);
                postInput.value = '';

                // Attach functionality to new post
                const newLikeButton = newPost.querySelector('.post-actions button:first-child');
                let newLikeCount = 0;
                newLikeButton.addEventListener('click', () => {
                    if (newLikeButton.textContent === 'Like') {
                        newLikeButton.textContent = 'Liked';
                        newLikeButton.style.color = '#4d95f5';
                        newLikeCount++;
                    } else {
                        newLikeButton.textContent = 'Like';
                        newLikeButton.style.color = '#65676b';
                        newLikeCount--;
                    }
                });

                const newCommentButton = newPost.querySelector('.post-actions .comment-button');
                const newCommentInputArea = newPost.querySelector('.comment-input-area');
                if (newCommentButton && newCommentInputArea) {
                    newCommentButton.addEventListener('click', () => {
                        newCommentInputArea.style.display = newCommentInputArea.style.display === 'none' ? 'flex' : 'none';
                    });
                }

                const newSubmitCommentButton = newPost.querySelector('.submit-comment-button');
                const newCommentInput = newPost.querySelector('.comment-input-area input[type="text"]');
                const newCommentSection = newPost.querySelector('.comment-section');
                if (newSubmitCommentButton && newCommentInput && newCommentSection) {
                    newSubmitCommentButton.addEventListener('click', () => {
                        const commentText = newCommentInput.value.trim();
                        if (commentText !== '') {
                            const commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');
                            commentDiv.innerHTML = `
                                <img src="${loggedInUserProfilePic}" alt="${loggedInUserName}" class="comment-user-pic">
                                <p><strong>${loggedInUserName}:</strong> ${commentText}</p>
                            `;
                            newCommentSection.appendChild(commentDiv);
                            newCommentInput.value = '';
                        }
                    });
                }
            }
        });
    }

    // ========== SHORTCUT FUNCTIONS ==========
    window.goToJoinedGroups = function () {
        window.location.href = "groups.html#joined";
    }

    window.goToSavedResources = function () {
        window.location.href = "resources.html#saved";
    }

    window.goToMyEvents = function () {
        window.location.href = "events.html#mine";
    }
});