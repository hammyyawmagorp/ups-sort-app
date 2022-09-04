const hubInfoForm = document.querySelector('#hubInfoNasny');

hubInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getPD(hubInfoForm.elements.nasnyZip.value);
    
});

// console.log(hubInfoForm.elements.nasnyZip);



const localUrl = "http://localhost:5432"

function getPD (zipcode){
    axios.get (`${localUrl}/pd?zipcode=${zipcode}`)//?????????
    .then((res) => {
        document.querySelector('.pdDisplay').innerText = `The closest airport to your accomadations is: ${res.data[0].pd}`;
        
    }).catch(err => document.querySelector('.pdDisplay').innerText = "Offline"

)}

console.log()
