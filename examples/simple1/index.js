window.count = 0

document.getElementById('simple1').addEventListener('click',()=>{
    window.count++
    document.getElementById('h2').innerHTML = window.count
},false)