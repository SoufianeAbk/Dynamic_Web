document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const postsContainer = document.getElementById("posts-container");
    const zoekInput = document.getElementById("zoekterm");
    const sorteerSelect = document.getElementById("sorteer");
    const limietSelect = document.getElementById("limiet");
    const toepassenBtn = document.getElementById("toepassen");
    
    let posts = [];
    
    async function fetchPosts() {
        try {
            const response = await fetch(API_URL);
            posts = await response.json();
            renderPosts();
        } catch (error) {
            postsContainer.innerHTML = "<p class='geen-resultaten'>Fout bij het laden van posts.</p>";
        }
    }
    
    function filterAndSortPosts() {
        let filteredPosts = posts.filter(post => 
            post.title.toLowerCase().includes(zoekInput.value.toLowerCase())
        );
        
        switch (sorteerSelect.value) {
            case "titel-oplopend":
                filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "titel-aflopend":
                filteredPosts.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "id-oplopend":
                filteredPosts.sort((a, b) => a.id - b.id);
                break;
            case "id-aflopend":
                filteredPosts.sort((a, b) => b.id - a.id);
                break;
        }
        
        return filteredPosts.slice(0, parseInt(limietSelect.value));
    }
    
    function renderPosts() {
        const filteredPosts = filterAndSortPosts();
        postsContainer.innerHTML = "";
        
        if (filteredPosts.length === 0) {
            postsContainer.innerHTML = "<p class='geen-resultaten'>Geen posts gevonden</p>";
            return;
        }
        
        filteredPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <div class="post-titel">${post.title.toUpperCase()}</div>
                <div class="post-body">${post.body.length > 100 ? post.body.substring(0, 100) + "..." : post.body}</div>
                <div class="post-info">
                    <span>Post ID: ${post.id}</span>
                    <span>Gebruiker ID: ${post.userId}</span>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });
    }
    
    toepassenBtn.addEventListener("click", renderPosts);
    
    fetchPosts();
});
