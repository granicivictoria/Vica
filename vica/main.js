

document.addEventListener("DOMContentLoaded", () => {
    
    // =========================================================================
    // 1. LOGICĂ NAVBAR: Evidențierea automată a paginii curente (Starea Activă)
    // =========================================================================
    const CurrentLocation = location.href;
    const menuItems = document.querySelectorAll(".navbar-nav .nav-link");
    
    menuItems.forEach(item => {
        // Dacă link-ul coincide cu URL-ul curent, adaugă clasa 'active'
        if (item.href === CurrentLocation) {
            // Elimină clasa 'active' de pe restul link-urilor și o pune pe cel curent
            menuItems.forEach(link => link.classList.remove("active"));
            item.classList.add("active");
        }
    });

    // Închide automat meniul de pe mobil (collapse) după ce se dă click pe un link (util pentru ancoră)
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((l) => {
            l.addEventListener('click', () => {
                // Verifică dacă meniul este deschis în modul mobil înainte de a-l închide
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }

    // =========================================================================
    // 2. BUTONUL "BACK TO TOP" (Înapoi Sus)
    // =========================================================================
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        // Ascunde sau afișează butonul în funcție de cât de mult face scroll utilizatorul
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove("d-none");
                backToTopBtn.style.opacity = "1";
            } else {
                backToTopBtn.classList.add("d-none");
                backToTopBtn.style.opacity = "0";
            }
        });

        // Efectul de scroll lin (smooth) când se dă click pe buton
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // =========================================================================
    // 3. SECȚIUNEA COUNTER (OPTIONAL - Animație incrementală suplimentară)
    // =========================================================================
    // Deoarece cifrele sunt scrise direct în HTML (ex: 150+, 100+), vizitatorii le văd instant.
    // Acest script adaugă un mic efect vizual de feedback la trecerea mouse-ului peste ele.
    const counterItems = document.querySelectorAll(".counter-section h2");
    counterItems.forEach(item => {
        item.style.transition = "transform 0.3s ease, color 0.3s ease";
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.15)";
            item.style.color = "#FF4081"; // Culoarea de accent (Roz Neon)
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
            item.style.color = "#ffffff";
        });
    });

});

// =========================================================================
// 4. SLIDER TESTIMONIALE (Sistem de glisare manual cu indicatori puncte)
// =========================================================================
let slideIndex = 0;

/**
 * Schimbă slide-ul activ în funcție de indexul trimis din HTML
 * @param {number} n - Indexul testimonialului selectat (0, 1, 2...)
 */
window.currentSlide = (n) => {
    const slides = document.getElementsByClassName("testimonial");
    const dots = document.getElementsByClassName("dot");
    
    // Siguranță: dacă elementele nu există în pagină, oprește funcția
    if (slides.length === 0 || dots.length === 0) return;

    // Actualizează indexul curent global
    slideIndex = n;

    // Resetează limitele indexului dacă este cazul
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Ascunde toate testimonialele prin Bootstrap utility class 'd-none'
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("d-none");
        slides[i].classList.remove("active");
    }

    // Resetează starea vizuală a tuturor punctelor (dots)
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    // Afișează doar testimonialul selectat și marchează punctul corespunzător ca activ
    slides[slideIndex].classList.remove("d-none");
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active-dot");
};

// Schimbarea automată la fiecare 5 secunde (O opțiune excelentă pentru dinamică)
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