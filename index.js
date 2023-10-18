function dataprint(){
    var name = document.getElementById("name").value;
    

    var email = document.getElementById("email").vale;
    

    var phone = document.getElementById("phone").value;

    var date = document.getElementById("date").value;

    var time = document.getElementById("time").value;



    document.write("Name : " + name+ "<br>") ;
    document.write("Email : " + email +"<br>");
    document.write("Phone : " + phone+"<br>");
    document.write("Date : " + date+"<br>");
    document.write("Time : " + time+"<br>");
}


var btn = document.querySelector('.btn');
btn.style.color = 'red';

btn.addEventListener('mouseover', (e)=>{
    document.querySelector("#myform").style.background = 'red';
})

btn.addEventListener('mouseout', (e)=>{
    document.querySelector("#myform").style.background = 'none';
})

btn.addEventListener('click', (e)=>{
    document.querySelector("#myform").style.background = 'blue';
})
