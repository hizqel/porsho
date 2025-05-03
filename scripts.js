function SetDate() {
    document.querySelector('.wrapper').classList.add('active');
}
const wrap = document.querySelector('.wrapper');
wrap.addEventListener('click', () => {
  wrap.classList.add('active');
  document.getElementById("porsho").play();
})