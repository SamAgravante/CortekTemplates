/**
* Template Name: Flexor - Modified for Apex Strategy Partners
* Custom modifications for header scroll effect and navigation
*/

(function () {
    "use strict";

    /**
     * Apply .scrolled class to the header as the page is scrolled down
     */
    function toggleScrolled() {
        const selectHeader = document.querySelector('.site-header-wrapper');
        if (!selectHeader) return;
        window.scrollY > 50 ? selectHeader.classList.add('scrolled') : selectHeader.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
        const navMenu = document.querySelector('#navmenu');
        if (navMenu) {
            navMenu.classList.toggle('mobile-nav-active');
        }
        if (mobileNavToggleBtn) {
            mobileNavToggleBtn.classList.toggle('bi-list');
            mobileNavToggleBtn.classList.toggle('bi-x');
        }
    }

    if (mobileNavToggleBtn) {
        mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
            const navMenuElement = document.querySelector('#navmenu');
            if (navMenuElement && navMenuElement.classList.contains('mobile-nav-active')) {
                mobileNavToogle();
            }
        });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function (e) {
            if (window.innerWidth < 1200) {
                e.preventDefault();
                this.parentNode.classList.toggle('active');
                this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
                e.stopImmediatePropagation();
            }
        });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }

    if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 600,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        }
    }
    window.addEventListener('load', aosInit);

    /**
     * Initiate glightbox
     */
    if (typeof GLightbox !== 'undefined') {
        const glightbox = GLightbox({
            selector: '.glightbox'
        });
    }

    /**
     * Init swiper sliders
     */
    function initSwiper() {
        document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
            let configElement = swiperElement.querySelector(".swiper-config");
            if (configElement) {
                let config = JSON.parse(configElement.innerHTML.trim());
                if (typeof Swiper !== 'undefined') {
                    new Swiper(swiperElement, config);
                }
            }
        });
    }

    window.addEventListener("load", initSwiper);

    /**
     * Init isotope layout and filters
     */
    if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
        document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
            let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
            let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
            let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

            let initIsotope;
            imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
                initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
                    itemSelector: '.isotope-item',
                    layoutMode: layout,
                    filter: filter,
                    sortBy: sort
                });
            });

            isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
                filters.addEventListener('click', function () {
                    isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
                    this.classList.add('filter-active');
                    initIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                    if (typeof aosInit === 'function') {
                        aosInit();
                    }
                }, false);
            });
        });
    }

    /**
     * Frequently Asked Questions Toggle
     */
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
            faqItem.parentNode.classList.toggle('faq-active');
        });
    });

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function (e) {
        if (window.location.hash) {
            if (document.querySelector(window.location.hash)) {
                setTimeout(() => {
                    let section = document.querySelector(window.location.hash);
                    let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                    window.scrollTo({
                        top: section.offsetTop - parseInt(scrollMarginTop),
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    });

    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');

    function navmenuScrollspy() {
        navmenulinks.forEach(navmenulink => {
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                navmenulink.classList.add('active');
            } else {
                navmenulink.classList.remove('active');
            }
        })
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

})();