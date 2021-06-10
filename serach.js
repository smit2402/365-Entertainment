let searchMovie=document.getElementById('searchMovie');
searchMovie.addEventListener("input", function (e) {

    let search=searchMovie.value;
    let post=document.getElementsByClassName('post');
    
    Array.from(post).forEach(function(element) {
        let pera=element.getElementsByTagName("h5")[0].innerText;
        if(pera.includes(search))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    });

    
});

let searchgenre=document.getElementById('searchgenre');
searchgenre.addEventListener("input", function (e) {

    let search=searchgenre.value;
    let post=document.getElementsByClassName('post');
    
    Array.from(post).forEach(function(element) {
        let pera=element.getElementsByTagName("h6")[0].innerText;
        if(pera.includes(search))
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    });

    
});