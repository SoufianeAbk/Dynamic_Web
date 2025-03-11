document.getElementById("loadButton").addEventListener("click", loadImagesSequentially);

const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1722111091429-dd3dc55979d3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://plus.unsplash.com/premium_photo-1739413060969-c830c2d1955b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    "https://images.unsplash.com/photo-1741091756497-10c964acc4f6?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Fout bij laden van ${url}`));
    });
}

function updateProgress(step, total) {
    const progressBar = document.querySelector(".progress-bar");
    const percentage = Math.round((step / total) * 100);
    progressBar.style.width = percentage + "%";
    progressBar.textContent = percentage + "%";
}

async function loadImagesSequentially() {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Reset de galerij
    updateProgress(0, imageUrls.length);
    
    for (let i = 0; i < imageUrls.length; i++) {
        try {
            const img = await loadImage(imageUrls[i]);
            gallery.appendChild(img);
            updateProgress(i + 1, imageUrls.length);
        } catch (error) {
            console.error(error);
        }
    }
}
