var $textCell = document.querySelector('h1');
var textArr = ' Hello,World!'.split('');//'Hello,World!'切割成数组
var inter = null;
var interval = 500;

function typingText(){
  $textCell.innerText = $textCell.innerText + textArr.shift();
  if(textArr.length>0){
    $textCell.classList.add('typing');
    inter = setTimeout(typingText,interval);
  }else{
    $textCell.classList.remove('typing');
    clearTimeout(inter);
  }
}

typingText();