let nations = document.querySelector('.nations');
let input = document.querySelector('input');
let select = document.querySelector('select');
let countryEl = document.querySelectorAll('.country')

nations.innerHTML = `
                        <div class="animation">
                            <div class="border"><span></span></div>
                            <h3>Please wait... Fetching Data</h3>
                        </div>`
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(result => {
    // console.log(result)
    function displayingNations(){
        let nationsvalue = '';
        result.map(objects => {
            // console.log(objects)
            let eachnation = `
                <div class="country">
                    <img src=${objects.flags.png} alt="" class="countryimg">
                    <h2 class="countryname">${objects.name.common}</h2>
                    <h3 class="population">Population: ${objects.population}</h3>
                    <h3 class="region">Region: ${objects.region}</h3>
                    <h3 class="capital">Capital: ${objects.capital}</h3>


                </div>`;
            nationsvalue += eachnation;   

        })
        nations.innerHTML = nationsvalue;
    }
    function searchingNations(e){
        let nationsvalue = '';
        console.log(e.target.value)
        const filtered = result.filter((objects)=> objects.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(filtered)
        filtered.map(objectsr => {
            // console.log(objectsr)
            let eachnation = `
                <div class="country">
                    <img src=${objectsr.flags.png} alt="" class="countryimg">
                    <h2 class="countryname">${objectsr.name.common}</h2>
                    <h3 class="population">Population: ${objectsr.population}</h3>
                    <h3 class="region">Region: ${objectsr.region}</h3>
                    <h3 class="capital">Capital: ${objectsr.capital}</h3>


                </div>`;
            nationsvalue += eachnation;   
                

        })
        nations.innerHTML = nationsvalue;
        
    }
    function filterNations(e){
        let nationsvalue = '';
        console.log(e.target.value)
        const filtered = result.filter((objects)=> objects.continents[0].toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(filtered)
        filtered.map(objectsr => {
            // console.log(objectsr)
            let eachnation = `
                <div class="country">
                    <img src=${objectsr.flags.png} alt="" class="countryimg">
                    <h2 class="countryname"><span>${objectsr.name.common}</span></h2>
                    <h3 class="population">Population: <span>${objectsr.population}</span></h3>
                    <h3 class="region">Region: <span>${objectsr.region}</span></h3>
                    <h3 class="capital">Capital: <span>${objectsr.capital}</span></h3>


                </div>`;
            nationsvalue += eachnation;   
                

        })
        nations.innerHTML = nationsvalue;
        
    }

    displayingNations()
    input.addEventListener('input', searchingNations);
    select.addEventListener('change', filterNations);

});

let theme = document.querySelector('.themeChanger');
theme.addEventListener('click', (e)=> {
    document.body.classList.toggle('theme');
    document.querySelector('#idd').classList.toggle('none');
    document.querySelector('#id').classList.toggle('none');
    // document.querySelector('*').classList.toggle('bacc');
    // document.querySelector('*').classList.toggle('opp');
    // document.querySelector('*').classList.toggle('theme');
});

// function getCountry(country) {
//     console.log(country)
// }

// .catch(console.error();)
// setTimeout(() => {
//     let eachnation = document.querySelectorAll('.country');
//     function eachNationData(e) {
//         console.log(e)
//     }
//     for (let i = 0; i < eachnation.length; i++) {
//         eachnation[i].addEventListener('click', eachNationData);
//     }
    
// }, 10000);
