const formatText = () => {
    const inputText = document.getElementById("inputText").value;
    
    // Maximale lengte voor tweets en posts
    const maxTweetLength = 280;
    const maxPostLength = 500;
    
    // Formatteer tweet (kort en krachtig)
    const formatTweet = text => text.length > maxTweetLength 
        ? text.slice(0, maxTweetLength - 3) + "..." 
        : text;
    
    // Formatteer post (iets langer toegestaan)
    const formatPost = text => text.length > maxPostLength 
        ? text.slice(0, maxPostLength - 3) + "..." 
        : text;
    
    // Combineer beide in een bericht
    const formatCombo = (tweet, post) => `Tweet: ${tweet}\nPost: ${post}`;
    
    // Verkregen berichten
    const tweet = formatTweet(inputText);
    const post = formatPost(inputText);
    const combo = formatCombo(tweet, post);
    
    // Update de output in de HTML
    document.getElementById("tweetOutput").innerText = tweet;
    document.getElementById("postOutput").innerText = post;
    document.getElementById("comboOutput").innerText = combo;
};
