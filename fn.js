document.addEventListener('DOMContentLoaded',()=>{


    // const bdy = document.querySelector('body');
    const logo= document.querySelector('.logo');
    const contain = document.querySelector('body');
    const box = document.querySelector('body');
    
    logo.addEventListener('click',function (){
        alert("click Noted!");
    });


    let srch = document.getElementById('query');
    let name = document.querySelectorAll('.hero');
    let roll = document.querySelectorAll('.para');
    let cont = document.querySelectorAll('.box');
    
    // console.log(name[2].innerHTML)
srch.addEventListener('focus',()=>{
    for(let i=0; i< name.length; i++){
        cont[i].classList.add('fadeIn');
        setTimeout(() => {
            cont[i].classList.add('gayab');
        }, 500);
    }
})
srch.addEventListener('blur',()=>{
    for(let i=0; i< name.length; i++){
        cont[i].classList.remove('fadeIn');
        cont[i].classList.remove('gayab');
        cont[i].classList.add('fadeOut');
        setTimeout(() => {
            cont[i].style.opacity="100%";
        }, 500);
    }
})

    srch.onkeyup = () =>{
        for(let i=0; i< name.length; i++){
            cont[i].classList.add('fadeIn');
                cont[i].classList.add('gayab');
        }

    for(let i=0; i< name.length; i++){
        // console.log(name[i].innerText);
        let data = name[i].innerText.toUpperCase();
        if(data.indexOf(srch.value.toUpperCase())>-1){
            cont[i].classList.remove('fadeIn');
            cont[i].classList.remove('gayab');
            cont[i].classList.add('fadeOut');
            setTimeout(() => {
                cont[i].style.opacity="100%";
            }, 100);
            console.log(name[i].innerText);
        }
    }
}

})
