document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const postCards = document.querySelectorAll('.post-card');

    // Function to filter posts
    const filterPosts = () => {
        const query = searchBar.value.toLowerCase();

        postCards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const tags = card.getAttribute('data-tags').toLowerCase();

            if (title.includes(query) || tags.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    };

    // Event listener for the search bar
    searchBar.addEventListener('input', filterPosts);
});