document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#sidebar .nav-link');
    const sections = document.querySelectorAll('.content-section');

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
            section.classList.add('d-none');
        });

        const targetSection = document.getElementById(targetId);
        targetSection.classList.remove('d-none');
        targetSection.classList.add('active');
    }

    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            showSection(targetId);
        });
    });

    const defaultLink = document.querySelector('#sidebar .nav-link.active');
    const defaultSectionId = defaultLink.getAttribute('data-target');
    showSection(defaultSectionId);
});
