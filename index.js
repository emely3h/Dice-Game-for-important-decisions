

var randomPlayer1 = Math.floor(Math.random()*6)+1;
var randomPlayer2 = Math.floor(Math.random()*6)+1;

var img1;

if(randomPlayer1==1){
    img1="images/dice1.png";
}else if (randomPlayer1==2) {
  img1="images/dice2.png";
}else if (randomPlayer1==3) {
    img1="images/dice3.png";
}else if (randomPlayer1==4) {
    img1="images/dice4.png";
}else if (randomPlayer1==5) {
    img1="images/dice5.png";
}else   {
    img1="images/dice6.png";
}

var img2;
if(randomPlayer2==1){
    img2="images/dice1.png";
}else if (randomPlayer2==2) {
  img2="images/dice2.png";
}else if (randomPlayer2==3) {
    img2="images/dice3.png";
}else if (randomPlayer2==4) {
    img2="images/dice4.png";
}else if (randomPlayer2==5) {
    img2="images/dice5.png";
}else   {
    img2="images/dice6.png";
}

var imageSet1 = document.querySelectorAll("img")[0];
var imageSet2=document.querySelectorAll("img")[1];
imageSet1.setAttribute("src", img1);
imageSet2.setAttribute("src", img2);

if(randomPlayer1>randomPlayer2){
document.querySelector("h1").innerHTML="Player 1 wins!";
}else if(randomPlayer1<randomPlayer2){
document.querySelector("h1").innerHTML="Player 2 wins!";
}else{
document.querySelector("h1").innerHTML="No winner!";
}
