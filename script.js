const doll1 = document.querySelector('.doll1');
const doll2 = document.querySelector('.doll2');
const doll3 = document.querySelector('.doll3');
const da = document.querySelector('.da');
const right = document.querySelector('.righttext');
const instructions = document.querySelector('.mainSection');


doll1.addEventListener('click', () => {
    doll1.classList.add('hidden')
    doll2.classList.remove('hidden')
    right.textContent = "A bit more";
});

doll2.addEventListener('click', () => {
    doll2.classList.add('hidden')
    doll3.classList.remove('hidden')
    right.textContent = "Almost there";
});

doll3.addEventListener('click', () => {
    doll3.classList.add('hidden')
    instructions.classList.add("hidden");
    da.classList.remove('hidden')
});