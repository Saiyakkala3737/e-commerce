let inner = document.querySelector('.angel');
let li = document.querySelectorAll('.innernav');
inner.addEventListener('click',function(){
   document.querySelector('#inner_nav').style.display= 'block';
});
li.forEach(function(x){
  x.addEventListener('click',function(){
      console.log(this);
      let ajax = new XMLHttpRequest();
      ajax.open('GET',"http://localhost:3000/mommy");
      ajax.onload =function(){
          let ourData = JSON.parse(ajax.responseText);
          renderData(ourData);
      };
    ajax.send();  
    console.log(ajax);
  });
  
});
function renderData(data){
    for(let i=0; i<data.length; i++){
        let div = document.createElement('div');
        div.style.backgroundImage = `url(${data[i].img})`;
        document.getElementById('inner_cont').appendChild(div);

    }
   
}
var slider_content=document.getElementById('box');
var image=['a','b','c','d'];
var i=image.length;
function previousImage(){
    
    if(i<image.length+1 && i>1){
        i--;
        
    }else{
        i=image.length;
    }
    slider_content.innerHTML="<img src="+image[i-1]+".jpg>";
}
function nextimage(){
       
    if(i<image.length){
        
        i++;
        
        
    }else{
        i=1;
    }
    slider_content.innerHTML="<img src="+image[i-1]+".jpg>";
};
//setInterval(nextimage,600);