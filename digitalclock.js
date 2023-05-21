const time = document.getElementById('time');
const date = document.getElementById('date');


const monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", 
"Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

const interval = setInterval(() => {

    const local = new Date();

    let day = local.getDate();
        month = local.getMonth();
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;
    // date.innerHTML = local.toLocaleDateString();
}, 1000);