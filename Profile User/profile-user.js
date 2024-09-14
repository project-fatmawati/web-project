document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('#sidebar .nav-link');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const sections = document.querySelectorAll('.content-section');

    // Fungsi untuk menyembunyikan section
    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
            section.classList.add('d-none');
        });
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('d-none');
            targetSection.classList.add('active');
        }
    }

    // Untuk Sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            showSection(targetId);
        });
    });

    // Dropdown untuk smaller screen (non-PC)
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            dropdownItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            showSection(targetId);
        });
    });

    // Menampilkan section yang load 
    const defaultLink = document.querySelector('#sidebar .nav-link.active') || document.querySelector('.dropdown-item.active');
    const defaultSectionId = defaultLink ? defaultLink.getAttribute('data-target') : 'personal-info';
    showSection(defaultSectionId);

    // Fungsi untuk menyimpan katalog ke localStorage
    function saveCatalogToLocalStorage() {
        const items = [];
        const catalogImages = catalogItems.querySelectorAll('img');
        catalogImages.forEach(img => {
            items.push({
                src: img.src,
                alt: img.alt
            });
        });
        localStorage.setItem('catalogItems', JSON.stringify(items));
    }

    // Fungsi untuk memuat katalog dari localStorage
    function loadCatalogFromLocalStorage() {
        const storedItems = JSON.parse(localStorage.getItem('catalogItems')) || [];
        storedItems.forEach(item => {
            const newItem = document.createElement('img');
            newItem.src = item.src;
            newItem.alt = item.alt;
            newItem.classList.add('img-catalog');
            catalogItems.appendChild(newItem);
        });
    }

    loadCatalogFromLocalStorage();

    // Form untuk menambahkan katalog baju
    const addItemForm = document.getElementById('addItemForm');
    if (addItemForm) {
        addItemForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const itemName = document.getElementById('itemName').value;
            const itemImage = document.getElementById('itemImage').files[0];
            if (!itemName || !itemImage) {
                console.error('Nama produk atau gambar belum diisi.');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(event) {
                const catalogItems = document.getElementById('catalogItems');
                const newItem = document.createElement('img');
                newItem.src = event.target.result;
                newItem.alt = itemName;
                newItem.classList.add('img-catalog');
                catalogItems.appendChild(newItem);

                saveCatalogToLocalStorage();
                
                // Menutup modal setelah item ditambahkan
                const modal = bootstrap.Modal.getInstance(document.getElementById('addItemModal'));
                modal.hide();
            };
            reader.readAsDataURL(itemImage);
        });
    }
});
