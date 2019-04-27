
var dice,currentScore;
var score=[0,0];
var player;
var previousRoll=0;



init();


var rollBtn = document.getElementById('roll');
rollBtn.addEventListener('click',function()
        {
            document.querySelector('.image').style.display='none';
            dice= Math.floor(Math.random()*6) +1;
           
            // console.log(dice);  //dice click working and generating random no
            
           document.querySelector('.image').style.display='block';
            //1.change the die
            document.querySelector('.image').children[0].src='image/dice-'+dice+'.gif';
            if(dice>1){
                // if the dice value is 2 to 6 then only change score
                 if(previousRoll===6 && dice===6){
                    score[player]=0;
                    document.getElementById('score-'+player).textContent=' 0';
                    console.log('OOPS!! Back to Back 6s...');
                    changePlayer();

                }
                //2.update the current scores
                currentScore+=dice;
                document.getElementById('current-score-'+player).innerText=currentScore;
                previousRoll=dice;
            }
            else{
                console.log('Player-'+ (player+1) +' has rolled a ONE');
                changePlayer();
            }
            
             
            
        }             
     );


var holdBtn=document.getElementById('hold');
holdBtn.addEventListener('click',function()
        {   
            
            
            score[player]+=currentScore;
            document.getElementById('score-'+player).textContent=score[player];
        
             if(score[player]>=50)
                 {
                   document.getElementById('player-'+player).textContent='WINNER!';
                   document.getElementById('player-'+player).parentElement.classList.add('active');
               
                     document.querySelector('.dice').style.display='none';
                     document.getElementById('roll').style.display='none';
                     document.getElementById('hold').style.display='none';
                

                 }   
            else{
                changePlayer();
            }     
                
        }
    );     


    function changePlayer(){
        currentScore=0;
        document.getElementById('current-score-'+player).innerText=currentScore;
        document.getElementById('player-'+player).parentElement.classList.toggle('active');
        
        (player === 0) ? player=1 : player=0;

        document.getElementById('player-'+player).parentElement.classList.toggle('active');
        
       // console.log(player);
    }


 var newGame = document.getElementById('new');
 newGame.addEventListener('click', init);   



 function init(){
     score=[0,0];
     currentScore=0;
     player=0;
     previousRoll=0;
     document.getElementById('score-0').innerText='0';
     document.getElementById('score-1').innerText='0';

     document.getElementById('current-score-0').innerText='0';
     document.getElementById('current-score-1').innerText='0';
     
     document.getElementById('player-0').textContent='PLAYER-1';
     document.getElementById('player-1').textContent='PLAYER-2';


     document.querySelector('.dice').style.display='block';
     document.getElementById('roll').style.display='block';
     document.getElementById('hold').style.display='block';

     document.getElementById('player-0').parentElement.classList.add('active');
     document.getElementById('player-1').parentElement.classList.remove('active');
     
 }