

var div2 = document.createElement('div');
div2.className = 'top-num';
var span2 = document.createElement('span');
var span3 = document.createElement('span');
var span1 = document.createElement('span');
var span4 = document.createElement('span');
span3.textContent = '+';
span4.textContent = '=';
var span5 = document.createElement('img');
span5.className='image'
var random;
var random2;
var stop;
function startbtn(){
     random = Math.floor(Math.random() * 8) + 2;
     random2 = Math.floor(Math.random() * 9) + 3;
    // random = 7;
    // random2 =4;
    span2.innerHTML = random2;
    span1.innerHTML = random;
    div2.append(span1, span3, span2, span4,span5);

      stop = setInterval(java,1000)
}
document.body.append(div2);


var c;
var time=10;
function only() {
   
    a = random + random2;
    console.log(a);

    var b = this.value;
    console.log(b);
     c = this;
    console.log(c);
    if (a == b) {
        c.style.backgroundColor = 'blue';
            span5.src = '9.gif';
    }
    else{
        span5.src = '10.gif';
    }
    
    startbtn()
    time =10
}

var p = document.createElement('h1')    


   function java(){
    if(time == 0){
        myStop();   
        // c.style.backgroundColor ='red'
    }
    if(time <= 0){
       
       time=10   
    }
    else{
       time--;
        console.log(time);
        p.innerHTML=time;
        p.className='time'
    }
}
document.body.append(p)

function myStop(){
    clearInterval(stop);
    console.log('hii');
}



var array = [10, 11, 8, 11, 11, 8, 10, 15, 5, 9, 12, 3, 17, 13, 11, 5, 8, 8, 8, 14, 9, 6, 5, 10, 10];

var div = document.createElement('div');
div.className = 'parent'

for (let i = 0; i < array.length; i++) {

    var btn = document.createElement('button');
    btn.textContent = array[i];
    btn.value = array[i];
    btn.addEventListener('click', only)
    btn.className = 'Button-box'
    div.append(btn);
    document.body.append(div);
   

}



var start = document.createElement('button');
start.className='start'
start.addEventListener('click',startbtn);
start.textContent='Start Game'
var end = document.createElement('button');
end.className='end'
end.addEventListener('click',endbtn);
end.textContent='End Game'
document.body.append(start,end)


function endbtn(){

}