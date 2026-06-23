
        document.addEventListener("DOMContentLoaded", () => {
            const filterButtons = document.querySelectorAll(".filter-btn");
            const portfolioItems = document.querySelectorAll(".portfolio-item");

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                 
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");

                    const filterValue = button.getAttribute("data-filter");

                    portfolioItems.forEach(item => {
                        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                            item.classList.remove("d-none");
                            // Mic efect vizual de apariție
                            item.style.opacity = "0";
                            setTimeout(() => item.style.opacity = "1", 50);
                        } else {
                            item.classList.add("d-none");
                        }
                    });
                });
            });
        });
