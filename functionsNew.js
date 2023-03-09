document.getElementById("ctnFormacion").style.display = "none"
document.getElementById("ctnExperiencia").style.display = "none"
document.getElementById("ctnOtros").style.display = "none"

document.getElementById("tglExperiencia").addEventListener("change",function(){
    var y = document.getElementById("ctnExperiencia");
    console.log(y)    
    if (y.style.display === "none") {
    y.style.display = "inline";
    } 
    else {
    y.style.display = "none";
    }
})

document.getElementById("tlgFormacion").addEventListener("change",function(){
      
    var x = document.getElementById("ctnFormacion");
       
    if (x.style.display === "none") {
    x.style.display = "inline";
    } 
    else {
    x.style.display = "none";
    }
})



document.getElementById("tglOtros").addEventListener("change",function(){
    var x = document.getElementById("ctnOtros");
    console.log(x)      
    if (x.style.display === "none") {
    x.style.display = "inline";
    } 
    else {
    x.style.display = "none";
    }
})
