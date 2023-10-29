window.onload = pageload;
function pageload() {

    var button1 = document.getElementById('Prod1');
    button1.onclick = linkpage;

    var button2 = document.getElementById('Prod2');
    button2.onclick = linkpage1;

    var button3 = document.getElementById('Prod3');
    button3.onclick = linkpage2;

   

}
function linkpage()
{
    location.href = 'https://github.com/Thiskk040/The-Vr-Game-for-Project';
}
function linkpage1()
{
    location.href = 'https://github.com/Thiskk040/Heart-Diease-Prediction-with-Python/blob/main/Untitled0.ipynb';
}
function linkpage2()
{
    location.href = 'https://github.com/Thiskk040/Anatomy-Vr-platform';
}

