const hubInfoForm = document.querySelector('#hubInfoNasny');

hubInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getPD(hubInfoForm.elements.nasnyZip.value);
    
});

const localUrl = "http://localhost:4400" 

function getPD (zipcode){
    axios.get (`${localUrl}/getPD?zipcode=${zipcode}`)
    .then((res) => {
        document.querySelector('.pdDisplay').innerText = `Package to: ${res.data[0].color}`;
        
    }).catch(err => document.querySelector('.pdDisplay').innerText = "Offline"

)}

