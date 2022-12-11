$(document).ready(function(){
    $('.carousel_inner').slick({
      speed:1200,
      infinite:true,
      adaptiveHeight: true,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg"></button>',
      responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 786,
            settings: {
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }
      ]
    });

    $('form').submit(function(e){
        e.preventDefault();


        $.ajax({
            type: 'POST',
            url : 'mailer/smart.php',
            data :$(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#consultation,#order').fadeOut();
            $('.overlay,#thanks').fadeIn('slow');

            $('form').trigger('reset');
        })
    })

});

// catalog item additional information script

const more_link= document.querySelectorAll('.catalog-item_link');
const back_link= document.querySelectorAll('.catalog-item_back-link');
const catalog_item_main= document.querySelectorAll('.catalog-item_main-content');
const catalog_item_secondary= document.querySelectorAll('.catalog-item_secondary-content');

more_link.forEach((item,i)=>{
    item.addEventListener('click',e=>{
        catalog_item_main[i].classList.remove('catalog-item_main-content_active');
        catalog_item_secondary[i].classList.add('catalog-item_secondary-content_active');
    })
})

back_link.forEach((item,i)=>{
    item.addEventListener('click',e=>{
        catalog_item_main[i].classList.add('catalog-item_main-content_active');
        catalog_item_secondary[i].classList.remove('catalog-item_secondary-content_active')
    })
})



// modal windows script


const consultation_btns=document.querySelectorAll('[data-modal="consultation"]');
const overlay=document.querySelector('.overlay');
const consultation_modal= document.querySelector('#consultation');
const order_modal= document.querySelector('#order');
const order_modal_subtitle=order_modal.querySelector('.modal_subtitle');
const thanks_modal=document.querySelector('#thanks');
const modal_close=document.querySelectorAll('.modal_close');
const order_btns=document.querySelectorAll('[data-modal="order"]');
const catalog_item_title=document.querySelectorAll('.catalog-item_title');
const scroll_top_btn=document.querySelector('.arrow-scroll-top')

window.addEventListener('click',e=>{
    if(e.target.classList.contains('overlay')){
        hide(overlay);
        hide(order_modal);
        hide(consultation_modal);
    }
})


consultation_btns.forEach(item=>{
    item.addEventListener('click' ,e=>{
        show(overlay);
        show(consultation_modal);
        // document.querySelector('#phone').focus()
    })
})

modal_close.forEach(item=>{
    item.addEventListener('click',e=>{
        hide(overlay);
        hide(order_modal);
        hide(consultation_modal)
    })
})


order_btns.forEach(item=>{
    item.addEventListener('click' ,e=>{
        show(overlay);
        show(order_modal);
    })
})

order_btns.forEach((item,i)=>{
    item.addEventListener('click' ,e=>{
        order_modal_subtitle.innerHTML= catalog_item_title[i].innerHTML;
        show(overlay);
        show(order_modal);
    })
})


function show(item) {
    item.style.display="block";
}

function hide(item) {
    item.style.display="none";
}




// ######### input mask in forms 



var selector = document.querySelectorAll('input[name=phone]');

var im = new Inputmask("+994 (88) 888-88-88");
im.mask(selector);



// ### scroll to the top via clicking on the button


document.addEventListener('scroll' ,e=>{
    if(window.pageYOffset>700){
        scroll_top_btn.style.display="flex";    
    }else{
        hide(scroll_top_btn);
    }
})

scroll_top_btn.addEventListener('click',e=>{
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
})