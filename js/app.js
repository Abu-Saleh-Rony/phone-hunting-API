const loadphone = (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayphones(data.data));
}

const displayphones = phones => {
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText = '';
    // Display only 30 phones
    phones = phones.slice(0, 30);

    // Display No Phone Found
    const noPhone = document.getElementById('no-found-message');
    if (phones.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }


    // Display All Phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-5">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">A mobile phone is one kind of portable telephone. A great discovery of science. We get and send news, play game, time, calculator, etc. everything from the phone. Now the world is getting like a village which can be called a global village.</p>
                        </div>
        </div>
        `;
        phonesContainer.appendChild(phoneDiv);

    })


}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadphone(searchText);
})

loadphone('a');