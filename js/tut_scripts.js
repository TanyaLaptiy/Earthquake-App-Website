
var btn = document.getElementById('loadScreen');
btn.onclick = function(){
    displayDetail('assets/tut_img/loadingScreen.png','Экран загрузки');
};

function displayDetail(pic, discr){
    var html = document.querySelector('html');
    
    var panel = document.createElement('div');
    panel.setAttribute('id', 'okno');
    html.appendChild(panel);
    var msg = document.createElement('p');
    msg.textContent = discr;
    panel.appendChild(msg);
    var img=document.createElement('img');
    img.setAttribute('class','img-fluid');
    img.setAttribute('src',pic);
    panel.appendChild(img);

    var close = document.createElement('a'); 
    close.setAttribute('href','#description')
    close.textContent = 'x';
    panel.appendChild(close);
    
    close.onclick = function () {
        panel.parentNode.removeChild(panel);
    }

    
  
}






