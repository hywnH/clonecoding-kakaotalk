function react(text){
  var today = new Date();
  var hour = today.getHours();
  if (hour < 10){
    hour = '0'+hour;
  }
  var minute = today.getMinutes();
  if (minute < 10){
    minute = '0'+minute;
  }
  var time = hour + ":" + minute;
  var otherchat = document.createElement('div')
  otherchat.className = "friend";
  otherchat.innerHTML ='<div class="profilepic"><img src="profilepic.svg" width="40px">\
    </div><div class="message">'+text+'</div><div class="lasttalk">'+time+'</div>';
  document.getElementById('UserChat').appendChild(otherchat);
}
function addmessage(text){
  var chatBlock = document.createElement('div')
  chatBlock.className = "userchat";
  chatBlock.innerHTML = '<div></div>' + '<div class="text">'+ text + '</div>' + '<div></div>';
  document.getElementById('UserChat').appendChild(chatBlock);
}
function send(){
  if (document.getElementById('tosend').value !== ''){
    toSend = document.getElementById('tosend').value;
    addmessage(toSend);
    document.getElementById('tosend').value = '';}
  if (toSend.includes('안녕')){
    setTimeout(function(){react('반가워요!')}, 1000);
  }else if (toSend.includes('ㅠㅠ')){
    setTimeout(function(){react('ㅠㅠ...')}, 1000);
  }else if (toSend.includes('이름')){
    setTimeout(function(){react('제 이름은 Friend예요!')}, 1000);
  }
}
