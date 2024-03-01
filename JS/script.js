const grid = document.querySelector('.grid');
const startBtn = document.getElementById('start-btn');
const difficultyOptions = document.getElementById('difficulty');

startBtn.addEventListener('click', function(){
  grid.innerHTML='';
  document.querySelector('.d-none').classList.remove('d-none');
  for (let i = 0; i < 100; i++) {
    const box = genBox([i]);
    grid.append(box);
    
    box.addEventListener('click', function(){
      box.classList.toggle('clicked');
      console.log(box._boxNum);
    })
    difficultyOptions.addEventListener('change', function() {
      if(this.value === 'easy'){
        box.classList.add('easy');
        box.classList.remove('hard', 'normal', 'clicked');
        
        
      }else if(this.value === 'normal'){
        box.classList.add('normal');
        box.classList.remove('hard', 'easy', 'clicked');
        
      }else{
        box.classList.add('hard');
        box.classList.remove('normal', 'easy','clicked');
    
      };
    } );
  };
  
});





function genBox([i]) {
  const box = document.createElement("div");
  box.classList.add('box', 'hard');
  box._boxNum = i + 1;
  return box;

}