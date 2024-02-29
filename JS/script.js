const grid = document.querySelector('.grid')
const startBtn = document.getElementById('start-btn')
let box;

startBtn.addEventListener('click', function(){
  grid.innerHTML='';
  for (let i = 0; i < 100; i++) {
    const box = genBox();
    grid.append(box);

    box.addEventListener('click', function(){
      box.classList.toggle('clicked');
    })
  }
})

function genBox () {
  const box = document.createElement("div");
  box.classList.add('box');
  return box;

}