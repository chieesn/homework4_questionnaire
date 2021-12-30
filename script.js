start.onclick = function(){
    main.style.display = "none";
    question1.style.display = "block";
}

function magicMachine(quest){
    var radio = document.getElementsByName(quest);
    var ques;

    for(var i = 0; i < radio.length; i++){
        if(radio[i].type === 'radio' && radio[i].checked){
            ques = radio[i].value
            radio[i].checked = false;
        }
    }
    document.getElementById(ques).style.display = "block";
}

function click1(){
    magicMachine("q1");
    question1.style.display = "none";
}

//------------Route 1------------------
function click2(){
    magicMachine("q2")
    question2.style.display = "none";
}

function click5(){
    magicMachine("q5")
    question5.style.display = "none";
    document.getElementById("reset").style.display = "block";
}

function click6(){
    magicMachine("q6")
    question6.style.display = "none";
}

function click7(){
    magicMachine("q7")
    question7.style.display = "none";
}

reset.onclick = function(){
    reset.style.display = "none";
    document.getElementById("main").style.display = "block";

    var ansBlock = document.querySelectorAll('.ans');
    for(let n = 0; n < ansBlock.length; n++){
        ansBlock[n].style.display = "none";
    }
}
//------------Route 1------------------