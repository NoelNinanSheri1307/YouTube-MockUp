const openButton = document.getElementById('openButton');
        const sideMenu = document.getElementById('sideMenu');
        function toggleMenu() {
            sideMenu.classList.toggle('open');
            document.querySelector('.menu').classList.toggle('menu-hidden');
        }
        openButton.addEventListener('click', toggleMenu);
        document.addEventListener('click', (event) => {
            if (sideMenu.classList.contains('open') && !sideMenu.contains(event.target) && !openButton.contains(event.target)) {
                sideMenu.classList.remove('open');
            }
        });