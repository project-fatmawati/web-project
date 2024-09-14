document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#sidebar .nav-link');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        links.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => section.classList.remove('active'));
            links.forEach(link => link.classList.remove('active'));

            targetSection.classList.add('active');
            link.classList.add('active');
        });
    });

    const defaultLink = document.querySelector('#sidebar .nav-link.active');
    const defaultSection = document.getElementById(defaultLink.getAttribute('data-target'));
    defaultSection.classList.add('active');
})

function setActiveLink(link) {
    const links = document.querySelectorAll('#sidebar .nav-link');

    links.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
}

let catalogItems =[];

let transactionHistory = [
    { date: '12 Sept 2024', item: 'Kemeja Polos', status: 'Selesai' },
    { date: '10 Sept 2024', item: 'Jaket Denim', status: 'Selesai' },
];

function removeItem(button) {
    const itemCard = button.closest('.item-card');
    itemCard.remove();
}

function loadTransactionHistory() {
    const historyList = document.getElementById('transactionHistory');
    transactionHistory.forEach(transaction => {
        const historyItem = `<li class="list-group-item">
            <strong>${transaction.date}</strong>: ${transaction.item} - ${transaction.status}
        </li>`;
        historyList.innerHTML += historyItem;
    });
}

window.onload = function() {
    loadTransactionHistory();
}