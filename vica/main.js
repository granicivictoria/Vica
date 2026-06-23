

document.addEventListener("DOMContentLoaded", () => {
    
   
    const CurrentLocation = location.href;
    const menuItems = document.querySelectorAll(".navbar-nav .nav-link");
    
    menuItems.forEach(item => {
      
        if (item.href === CurrentLocation) {
           
            menuItems.forEach(link => link.classList.remove("active"));
            item.classList.add("active");
        }
    });

 
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((l) => {
            l.addEventListener('click', () => {
                
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }

    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
      
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove("d-none");
                backToTopBtn.style.opacity = "1";
            } else {
                backToTopBtn.classList.add("d-none");
                backToTopBtn.style.opacity = "0";
            }
        });

       
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

  
    const counterItems = document.querySelectorAll(".counter-section h2");
    counterItems.forEach(item => {
        item.style.transition = "transform 0.3s ease, color 0.3s ease";
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.15)";
            item.style.color = "#FF4081"; 
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
            item.style.color = "#ffffff";
        });
    });

});

let slideIndex = 0;

/**
 * Schimbă slide-ul activ în funcție de indexul trimis din HTML
 * @param {number} n - Indexul testimonialului selectat (0, 1, 2...)
 */
window.currentSlide = (n) => {
    const slides = document.getElementsByClassName("testimonial");
    const dots = document.getElementsByClassName("dot");
    
   
    if (slides.length === 0 || dots.length === 0) return;

    
    slideIndex = n;

    
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("d-none");
        slides[i].classList.remove("active");
    }

   
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    
    slides[slideIndex].classList.remove("d-none");
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active-dot");
};


setInterval(() => {
    const slides = document.getElementsByClassName("testimonial");
    if (slides.length > 0) {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        currentSlide(slideIndex);
    }
}, 5000);
