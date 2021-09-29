const API_URL = "https://jsonplaceholder.typicode.com/posts";
const fetchPosts = async (url) => await (await fetch(url)).json();

export { API_URL, fetchPosts };
