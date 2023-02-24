let header = document.getElementById('header');

window.onscroll = (()=>{
        if (document.documentElement.scrollTop >=900){
            console.log(header);
        header.classList.add("header-shade");
        console.log('function triggered');
    }
    else{
        console.log('Function is not triggered')
        header.classList.remove("header-shade");
    }
})

