let open = document.querySelector("button#open");
let close = document.querySelector("button#close");
let nav = document.querySelector("nav")

open.addEventListener('click', ()=> {
    console.log("opened");
    document.body.classList.add("active")
});

close.addEventListener('click', ()=> {
    document.body.classList.remove("active")
});