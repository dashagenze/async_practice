const button = document.getElementById('btn');
const title = document.getElementById('title');


const COFFEE_DATA = document.getElementById('COFFEE');
const SIZE_DATA = document.getElementById('SIZE');
const NAME_DATA = document.getElementById('NAME');


const url = 'http://localhost:3001/coffeeOrder';


SIZE_DATA.style.display = 'none';
NAME_DATA.style.display = 'none';

fetch(url)
    .then(r => r.json())
    .then(json => console.log(json))

// GET COFFEE
COFFEE_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(COFFEE_DATA);

    const coffee = formData.get('coffee');
    postCoffee(coffee)
        .then(() => {
            SIZE_DATA.style.display = 'block';
            COFFEE_DATA.style.display = 'none';
            q()
        })
})

// GET SIZE
SIZE_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(SIZE_DATA);

    const size = formData.get('size');
    postSize(size)
        .then(() => {
            SIZE_DATA.style.display = 'none';
            NAME_DATA.style.display = 'block';
        })
})

// GET NAME
NAME_DATA.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(NAME_DATA);

    const name = formData.get('name');
    console.log(name);
    postName(name)
        .then(() => {
            NAME_DATA.style.display = 'none';
            fetch(url)
                .then(r => console.log(r.json()))
        })
})

async function q() {
    fetch(url)
        .then(r => r.json())
        .then(r => console.log(r))
}

async function postCoffee(coffee) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            coffee: coffee,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(r => r.json())
        .then(json => console.log(json))
        .catch(e => console.log(e))
}

async function postSize(size) {
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            size: size,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(r => r.json())
        .then(json => console.log(json))
        .catch(e => console.log(e))

}

async function postName(name) {
    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            name: name,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(r => r.json())
        .then(json => console.log(json))
        .catch(e => console.log(e))
}



