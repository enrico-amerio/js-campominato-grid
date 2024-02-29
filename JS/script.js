const grid = document.querySelector('.grid');
const startBtn = document.getElementById('start-btn');
let box;
const difficultyOptions = document.getElementById('difficulty');

startBtn.addEventListener('click', function(){
  grid.innerHTML='';
  document.querySelector('.d-none').classList.remove('d-none');
  for (let i = 0; i < 100; i++) {
    const box = genBox();
    grid.append(box);

    box.addEventListener('click', function(){
      box.classList.toggle('clicked');
    })
    difficultyOptions.addEventListener('change', function() {
      if(this.value === 'easy'){
        box.classList.add('easy')
        box.classList.remove('hard', 'normal')
        
      }else if(this.value === 'normal'){
        box.classList.add('normal')
        box.classList.remove('hard', 'easy')
        
      }else{
        box.classList.add('hard')
        box.classList.remove('normal', 'easy')
    
      };
    } );
  }
  
})





function genBox () {
  const box = document.createElement("div");
  box.classList.add('box', 'hard');
  return box;

}