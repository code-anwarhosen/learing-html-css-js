let leads = []

let leadsContainer = document.getElementById('leads')
let inputElm = document.getElementById('input-elm')

let saveBtn = document.getElementById('save-btn');
let saveTabBtn = document.getElementById('save-tab-btn');
let deleteAllBtn = document.getElementById('delete-all-btn');

function addLeadElement(leadUrl) {
    let leadElm = document.createElement('a');

    leadElm.href = leadUrl;
    leadElm.target = '_blank';
    leadElm.innerText = leadUrl;

    leadsContainer.insertAdjacentElement('afterbegin', leadElm);
}

function saveData(url) {
    leads.push(url);
    localStorage.setItem('leads', JSON.stringify(leads));
}

function getData() {
    let links = JSON.parse(localStorage.getItem('leads'));
    return links || []
}

saveBtn.addEventListener('click', () => {
    let url = inputElm.value;

    if (url.length < 5) {
        alert("Invalid url!");
    }
    else {
        addLeadElement(url);
        saveData(url);
        inputElm.value = '';
    }
});

saveTabBtn.addEventListener('click', () => {
    let url = window.location.href
    addLeadElement(url);

    saveData(url);
});

deleteAllBtn.addEventListener('dblclick', () => {
    localStorage.clear();
    leadsContainer.innerHTML = ''
});


window.addEventListener('load', () => {
    leads = getData();
    leads.forEach((lead) => {
        addLeadElement(lead);
    });
});
