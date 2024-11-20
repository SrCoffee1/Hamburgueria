const menuBtn = document.getElementById("menuBtn");
        const navbar = document.getElementById("navbar");
        const subNavbar = document.getElementById("subNavbar");
        const navbarLinks = document.querySelectorAll(".navbar a");
        const subNavbarLinks = document.querySelectorAll(".sub-navbar a");

        function openNavbar() {
            navbar.style.width = "250px";
            menuBtn.classList.add("hidden");
        }

        function closeNavbar() {
            navbar.style.width = "0";
            menuBtn.classList.remove("hidden");
            closeSubNavbar();
        }

        function openSubNavbar() {
            subNavbar.style.width = "250px";
        }

        function closeSubNavbar() {
            subNavbar.style.width = "0";
        }

        function setActiveLink() {
            const currentHash = window.location.hash;

            navbarLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === currentHash) {
                    link.classList.add("active");
                }
            });

            subNavbarLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === currentHash) {
                    link.classList.add("active");
                }
            });
        }

        window.addEventListener("hashchange", setActiveLink);

        setActiveLink();
        