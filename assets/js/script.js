//alert('ciao');


const modal = document.getElementById('id01');

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

//verifica login

// salvo e gestisco i dati della login
const user = {
    username: 'batman',
    password: 'guardia'
};



// nascondo il messaggio di errore di default
function reset() {
    document.getElementById('id01').style.display='block';
    $('#login_error').hide();
} 

// controllo che corrispondano le credenziali 
const login =  (e) => {
    e.preventDefault();
    const name = document.getElementById("username");

    const pass = document.getElementById('password');
    
    if (name.value === user.username && pass.value === user.password ) {
       window.location.href = "index.html";
        
    }else {
        alert('password o username errati');
    }
    
}


document.addEventListener("submit",login);


//lista detenuti

const url = 'https://denebvoice.com/api_gotham/gothamCity.json';
const template = document.getElementById('template');
const listaCriminali = document.querySelector('.listaCriminali');

async function getCriminali () {
    const response = await fetch(url);
    const nameCriminali = await response.json();
    return nameCriminali;
}
getCriminali().then(
    response => {
        console.log(response);
    }
)









