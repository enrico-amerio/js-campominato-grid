const grid = document.querySelector('.grid');
const startBtn = document.getElementById('start-btn');
const difficultyOptions = document.getElementById('difficulty');
const levels = [100, 81, 49]

startBtn.addEventListener('click', function(){
  grid.innerHTML='';
  const cellNumbers = levels[difficultyOptions.value];
  const difficulty = difficultyOptions.value;
  console.log(difficulty);
  for (let i = 0; i < cellNumbers; i++) {
    const box = genBox([i]);
      if(difficulty == 0){
        box.classList.add('easy');
      }else if(difficulty == '1'){
        box.classList.add('normal');
      }else{
        box.classList.add('hard');
      };
    grid.append(box);
    box.addEventListener('click', function(){
      box.classList.add('clicked');
      console.log(box._boxNum);
    })
  };
});





function genBox([i]) {
  const box = document.createElement("div");
  box.classList.add('box');
  box._boxNum = i + 1;
  return box;

}