window.addEventListener('DOMContentLoaded', () => {

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          closeTrigger = document.querySelector('[data-close]'),
          overlay = document.querySelector('.overlay'),
          body = document.querySelector('body');
    
    function closeModal(section) {
        setTimeout(() => {
            section.classList.add('hide');
        }, 300);
        section.classList.add('op');
        body.classList.toggle('overflow');
    };
    function openModal(section) {
        section.classList.remove('hide');
        section.classList.remove('op');
        body.classList.toggle('overflow');
    };

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            openModal(overlay)
        });
    });
    closeTrigger.addEventListener('click', () => {
        closeModal(overlay);
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && !overlay.classList.contains('hide')) {
            closeModal(overlay);
        }
    });
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeModal(overlay);
        }
    });

    // Validation

    $('#consultation').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Please specify your name",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            phone: "We need your phone number",
            email: {
              required: "We need your email address to contact you",
              email: "Your email address must be in the format of name@domain.com"
            }
        }
    });

    $('input[name=phone]').mask("(999) 999-9999");

    // Hamburger script

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.header__menu'),
          menuItem = document.querySelectorAll('.header__menu-item');
    
    hamburger.addEventListener('click', () => {
        body.classList.toggle('overflow');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })

    // Mobile script

    const footerTrigger = document.querySelectorAll('[data-openMobile]'),
          footerItem = document.querySelectorAll('.footer__item-ul'),
          footerItemTitle = document.querySelectorAll('.footer__item-name');

    footerTrigger.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            footerItem[i].classList.toggle('footer__item-ul_active');
            footerItemTitle[i].classList.toggle('footer__item-name_active');
        });
    });

    
    // Wow plugin
    
    let wow = new WOW({
        mobile: false,
        resetAnimation: false
    });
    wow.init();

});


