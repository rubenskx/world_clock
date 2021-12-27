
document.getElementById('New York').addEventListener('click', function(){
document.getElementById('location').innerText = "New York";

} );

document.getElementById('Muscat').addEventListener('click', function(){
document.getElementById('location').innerText = "Muscat";

} );

document.getElementById('Delhi').addEventListener('click', function(){
document.getElementById('location').innerText = "Delhi";

} );


function SetTime(){
    const location  = document.getElementById("location").innerText;
    if(location == "Muscat")
    MSetTime();
    if(location == "Delhi")
    DSetTime();
    if(location == "New York")
    NSetTime();

if(document.getElementById("session").innerText == "AM")
    document.body.style.backgroundImage = "url('1319725.jpg')";
else
    document.body.style.backgroundImage = "url('pexels-hristo-fidanov-1252869.jpg')";    

   setTimeout(SetTime, 1000);
}
SetTime();

function MSetTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let box1 = 0;
    document.getElementById('session').innerHTML = "AM";
    if(h>12)
    {
        h = h-12;
        document.getElementById('session').innerHTML = "PM";
    }
    if(h>=10)
    {
     box1 = 1;
     box2 = h%10;
    }
    else{
        box2 = h;
    }

    let box4 = Math.floor(m/10);
    let box5 = m%10;


    let box8 = s%10;
    let box7 = Math.floor(s/10);
    document.getElementById('box1').innerHTML = box1;
    document.getElementById('box2').innerHTML = box2;
    document.getElementById('box4').innerHTML = box4;
    document.getElementById('box5').innerHTML = box5;
    document.getElementById('box7').innerHTML = box7;
    document.getElementById('box8').innerHTML = box8;

     
}


function DSetTime(){
    const hour = 1;
    const mins = 30;
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    h = h+hour;
    m = mins+m;
    if(m >= 60)
    {
        m = m-60;
        h=h+1;
    }
    document.getElementById('session').innerHTML = "AM";
    let box1 = 0;
    if(h>12)
    {
        h = h-12;
        document.getElementById('session').innerHTML = "PM";
    }
    if(h>=10)
    {
     box1 = 1;
     box2 = h%10;
    }
    else{
        box2 = h;
    }

    let box4 = Math.floor(m/10);
    let box5 = m%10;


    let box8 = s%10;
    let box7 = Math.floor(s/10);
    document.getElementById('box1').innerHTML = box1;
    document.getElementById('box2').innerHTML = box2;
    document.getElementById('box4').innerHTML = box4;
    document.getElementById('box5').innerHTML = box5;
    document.getElementById('box7').innerHTML = box7;
    document.getElementById('box8').innerHTML = box8;

     
}


function NSetTime(){
    const hour = 15;
    const mins = 0;
    document.getElementById('session').innerHTML = "AM";
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    h = h+hour;
    m = mins+m;
    if(h>=24)
    {
        h = h-24;
    }
    if(m >= 60)
    {
        m = m-60;
        h=h+1;
    }
    let box1 = 0;
    if(h>12)
    {
        h = h-12;
        document.getElementById('session').innerHTML = "PM";
    }
    if(h==0)
    {
        h=12;
        document.getElementById('session').innerHTML = "AM";
    }
    if(h>=10)
    {
     box1 = 1;
     box2 = h%10;
    }
    else{
        box2 = h;
    }

    let box4 = Math.floor(m/10);
    let box5 = m%10;


    let box8 = s%10;
    let box7 = Math.floor(s/10);
    document.getElementById('box1').innerHTML = box1;
    document.getElementById('box2').innerHTML = box2;
    document.getElementById('box4').innerHTML = box4;
    document.getElementById('box5').innerHTML = box5;
    document.getElementById('box7').innerHTML = box7;
    document.getElementById('box8').innerHTML = box8;

     
}


