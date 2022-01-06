p1_n = localStorage.getItem("player1_name")
p2_n = localStorage.getItem("player2_name")
document.getElementById("player1_name").innerHTML=p1_n;
document.getElementById("player2_name").innerHTML=p2_n;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>"+ number1 + " X " + number2 +"</h4>";
    input_box = "<br>Answer: <input type = 'text' id = 'input_check_box'";
    check_button= "<br><br><button class = 'btn btn-info ' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").innerHTML="";
    document.getElementById("number2").innerHTML="";
}