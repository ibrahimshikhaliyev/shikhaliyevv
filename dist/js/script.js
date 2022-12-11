//arrow top
const  scroll_top_btn = document.querySelector(".arrow-scroll-top");
document.addEventListener('scroll' ,e=>{
    if(window.pageYOffset>700){
        show_flex(scroll_top_btn);
    }else{
        hide(scroll_top_btn);
    }
})

scroll_top_btn.addEventListener('click',e=>{
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
})


// $$$ opening the side menu


const hamburger= document.querySelector(".hamburger");
const menu_overlay=document.querySelector(".menu_overlay");
const menu_block = document.querySelector(".menu_block");
const menu_close=document.querySelector(".close");

hamburger.addEventListener('click' ,e=>{
    menu_block.classList.add('menu_block_active');
    menu_overlay.classList.add('menu_overlay_active');
})


menu_close.addEventListener('click' ,e=>{
    menu_block.classList.remove('menu_block_active');
    menu_overlay.classList.remove('menu_overlay_active');
})


// menu navigation by clicking the nav items


document.querySelector('#about-me-btn').addEventListener('click',e=>{
    e.preventDefault();
    menu_block.classList.remove('menu_block_active');
    menu_overlay.classList.remove('menu_overlay_active');
    document.querySelector('#about-me').scrollIntoView({behavior: "smooth"});
})

document.querySelector('#education-btn').addEventListener('click',e=>{
    e.preventDefault();
    menu_block.classList.remove('menu_block_active');
    menu_overlay.classList.remove('menu_overlay_active');
    document.querySelector('#education').scrollIntoView({behavior: "smooth"});
})
document.querySelector('#skills-btn').addEventListener('click',e=>{
    e.preventDefault();
    menu_block.classList.remove('menu_block_active');
    menu_overlay.classList.remove('menu_overlay_active');
    document.querySelector('#skills').scrollIntoView({behavior: "smooth"});
})
document.querySelector('#projects-btn').addEventListener('click',e=>{
    e.preventDefault();
    menu_block.classList.remove('menu_block_active');
    menu_overlay.classList.remove('menu_overlay_active');
    document.querySelector('#portfolio').scrollIntoView({behavior: "smooth"});
})
document.querySelector('#contacts-btn').addEventListener('click',e=>{
    e.preventDefault();
    menu_block.classList.remove('menu_block_active');
    menu_overlay.classList.remove('menu_overlay_active');
    document.querySelector('#contacts').scrollIntoView({behavior: "smooth"});
})
document.querySelector('#portfolio-link').addEventListener('click',e=>{
    e.preventDefault();
    menu_block.classList.remove('menu_block_active');
    menu_overlay.classList.remove('menu_overlay_active');
    document.querySelector('#portfolio').scrollIntoView({behavior: "smooth"});
})
document.querySelector('#about-me-link').addEventListener('click',e=>{
    e.preventDefault();
    menu_block.classList.remove('menu_block_active');
    menu_overlay.classList.remove('menu_overlay_active');
    document.querySelector('#about-me').scrollIntoView({behavior: "smooth"});
})
// change progress bar by getting the percent


const percent = document.querySelectorAll('.percent');
const progress_bar=document.querySelectorAll('.progress-bar_main');


percent.forEach((item,i)=>{
    progress_bar[i].style.width=item.innerHTML;
})



// const price_descr=document.querySelector('.prices_content').querySelectorAll('.descr');

// price_descr.forEach(item=>{
//     item.innerHTML=item.innerHTML.slice(0,50)+'...';
// })




// sending the email to me by user


const sumbitForm=document.querySelector('#submit-form');
const spinner= document.querySelector('.lds-dual-ring');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('#text');
const checkbox= document.querySelector('#checkbox');
let spinner_condition = false;

const error_txt=document.querySelectorAll('.error_txt');
const error_icon=document.querySelectorAll('.error_icon');

sumbitForm.addEventListener('click' ,e=>{
    e.preventDefault();   

    
    

    if(!msg.value){
        msg.focus();
        show_flex(error_txt[3]);
        
    }else{
        hide(error_txt[3]);
    }


    if(!emailInput.value){
        emailInput.focus();
        show_flex(error_txt[1]);
        hide(error_txt[2]);
        
    }else if(!emailInput.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        emailInput.focus();
        hide(error_txt[1]);
        show_flex(error_txt[2]);
    }else{
        hide(error_txt[1]);
        hide(error_txt[2]);
        
    }

    if(!nameInput.value){
        nameInput.focus();
        show_flex(error_txt[0]);
    }else{
        hide(error_txt[0]);
    }

    if(!checkbox.checked){
        show_flex(error_txt[4]);
    }else{
        hide(error_txt[4]);
    }


    if(nameInput.value && emailInput.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && msg.value && checkbox.checked){
        hide(document.querySelector('.submit_btn_txt'));
        document.querySelector('.lds-dual-ring').style.display='inline-block';
        sendMail();

    }
    
})

function sendMail(params){
    
    const tempParams={
        from_name: nameInput.value,
        from_email: emailInput.value,
        message: msg.value
    }

    emailjs.send('service_c2kiy8h' ,'template_fh4e31f' , tempParams)
    .then(res=>{
        show_block(document.querySelector('.thanks'));
        hide(document.querySelector('.lds-dual-ring'));

        setTimeout(e=>{
            hide(document.querySelector('.thanks'));
            show_block(document.querySelector('.submit_btn_txt'));
        }, 2000);
        
        document.querySelector('form').reset();
        nameInput.focus();
    })
}


function hide(item){
    item.style.display='none';
}


function show_flex(item){
    item.style.display='flex';
}
function show_block(item){
    item.style.display='block';
}