
window.onload = pageload;
function pageload() {

    var insatgram = document.getElementById("instagram");
    insatgram.onclick = insatgramlink;

    var facebook = document.getElementById("facebook");
    facebook.onclick = facebooklink;

    var github = document.getElementById("github");
    github.onclick = githublink;

}
function insatgramlink()
{
    location.href = 'https://www.instagram.com/thiskkay/';
}
function facebooklink()
{
    location.href = 'https://www.facebook.com/khunanon.ngaobenjakul/';
}
function githublink()
{
    location.href = 'https://github.com/Thiskk040'
}
