const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": null,
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=22"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postsList = document.querySelector('.posts-list')
posts.forEach((e, i) => {
postsList.innerHTML += `<div class="post">
                                <div class="post__header">
                                <div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${e.author.image}" alt="${e.author.name}">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${e.author.name}</div>
                                    <div class="post-meta__time">${e.created}</div>
                                </div>                    
                            </div>
                            </div>
                            <div class="post__text">${e.content}</div>
                            <div class="post__image">
                                <img src="${e.media}" alt="">
                            </div>
                                <div class="post__footer">
                                <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#" data-postid="${i}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-1" class="js-likes-counter">${e.likes}</b> persone
                                </div>
                            </div>
                            </div>
                            </div>
    `
})

const likeBtn = document.querySelectorAll('.like-button')
const likeCount = document.querySelectorAll('.js-likes-counter')
likeBtn.forEach((e, i) => {
let likeClick = false

    e.addEventListener('click', (event) => {
        event.preventDefault()
        let numLike = likeCount[i].innerHTML
        if (likeClick == false){
            numLike++
            likeClick = true
        }
        likeCount[i].innerHTML = numLike
        e.classList.add('like-button--liked')
    })
})