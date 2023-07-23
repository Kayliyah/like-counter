const counter = document.querySelector("#counter");
const like = document.querySelector("#increment");
const dislike = document.querySelector("#decrement");
let value = 0;

/*like.addEventListener('click', () => {
    value++;
    counter.textContent = value;
});

dislike.addEventListener('click', () => {
    value--;
    counter.textContent = value;
});*/

[like, dislike].forEach(function() {
    like.addEventListener('click', () => {
        value++;
        counter.textContent = value;
    })

    dislike.addEventListener('click', () => {
        value--;
        counter.textContent = value;
    })
})


counter.addEventListener('dblclick', () => {
    value = 0;
    counter.textContent = value;
}) 