function randomNumber(){
    let value1=Math.floor(Math.random()*6)+1;
    let value2=Math.floor(Math.random()*6)+1;
    let diceValue=value1+value2
    document.getElementById("die1").setAttribute("src",`/images/dice-six-faces-${value1}.svg`)
    document.getElementById("die2").setAttribute("src",`/images/dice-six-faces-${value2}.svg`)
    document.getElementById("diceValue").innerHTML="Dice Value is " +diceValue
    // if(diceValue==12 ||diceValue==10||diceValue==4||diceValue==6){
    //     document.getElementById("diceValue").innerHTML=<strong>Congratulations</strong>
    // }
}