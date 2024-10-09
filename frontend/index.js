import { backend } from 'declarations/backend';

async function loadBlogPosts() {
    const posts = await backend.getBlogPosts();
    const blogPostsSection = document.getElementById('blog-posts');

    posts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <img src="${post.imageUrl}" alt="${post.title}">
            <p>${post.content}</p>
        `;
        blogPostsSection.appendChild(article);
    });
}

async function loadWeapons() {
    const weapons = await backend.getWeapons();
    const weaponsList = document.getElementById('weapons-list');

    weapons.forEach(weapon => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${weapon.name}:</strong> ${weapon.description}`;
        weaponsList.appendChild(li);
    });
}

window.addEventListener('load', () => {
    loadBlogPosts();
    loadWeapons();
});
