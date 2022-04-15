let nations = document.querySelector('.nations');
let input = document.querySelector('input');
let select = document.querySelector('select');
let countryEl = document.querySelector('.country')

nations.innerHTML = `
                        <div class="animation">
                            <div class="border"><span></span></div>
                            <h3>Please wait... Fetching Data</h3>
                        </div>`
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(result => {
    result.sort((a, b) => (a.name.common > b.name.common) ? 1 : -1)
    // console.log(result)
    function displayingNations(){
        let nationsvalue = '';
        result.map(objects => {
            // console.log(objects)
            let eachnation = `
                <div class="country">
                    <img src=${objects.flags.png} alt="" class="countryimg">
                    <h2 class="countryname">${objects.name.common}</h2>
                    <h3 class="population">Population: <span>${objects.population}</span></h3>
                    <h3 class="region">Region: <span>${objects.region}</span></h3>
                    <h3 class="capital">Capital: <span>${objects.capital}</span></h3>


                </div>`;
            nationsvalue += eachnation; 
            

        })
        nations.innerHTML = nationsvalue;
    };
    function searchingNations(e){
        let nationsvalue = '';
        // console.log(e.target.value)
        const filtered = result.filter((objects)=> objects.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
        // console.log(filtered)
        filtered.map(objectsr => {
            console.log(objectsr)
            let eachnation = `
                <div class="country">
                    <img src=${objectsr.flags.png} alt="" class="countryimg">
                    <h2 class="countryname">${objectsr.name.common}</h2>
                    <h3 class="population">Population: <span>${objectsr.population}</span></h3>
                    <h3 class="region">Region: <span>${objectsr.region}</span></h3>
                    <h3 class="capital">Capital: <span>${objectsr.capital}</span></h3>
                    


                </div>`;
            nationsvalue += eachnation;   
                

        })
        nations.innerHTML = nationsvalue;
        
    }
    function ev(e) {
        document.querySelector('.goback').style.display = 'flex'
        document.querySelector('.goback').addEventListener('click', ()=> document.querySelector('.goback').style.display = 'none')
        document.querySelector('select').classList.add('none')
        document.querySelector('.goback').addEventListener('click', ()=> document.querySelector('select').classList.remove('none'))
        document.querySelector('.search').classList.add('none')
        document.querySelector('.goback').addEventListener('click', ()=> document.querySelector('.search').classList.remove('none'))
        let nationsvalue = '';
        const filtered = result.filter((objects)=> objects.name.common.toLowerCase().includes(e.currentTarget.childNodes[3].innerHTML.toLowerCase()))
        // console.log(filtered)
        // console.log(e.currentTarget.childNodes)
        filtered.map(objectsr => {
            let eachnation = `
                <div class="countrydetails">
                    <img src=${objectsr.flags.png} alt="" class="countryimg">
                    <div class = 'datadetais' >
                        <h3 class="countryname">Common Name : ${objectsr.name.common}</h3>
                        <h3 class="countryname">Official Name : ${objectsr.name.official}</h3>
                        <h3 class="population">Population : <span>${objectsr.population}</span></h3>
                        <h3 class="region">Region : <span>${objectsr.region}</span></h3>
                        <h3 class="capital">Capital : <span>${objectsr.capital}</span></h3>
                        <h3 class="currency">Subregion : <span>${objectsr.subregion} </span></h3>

                    </div>
                </div>`;    
            nationsvalue += eachnation;   
                

        })
        nations.innerHTML = nationsvalue;
    }
    setInterval(() => {
        let allcont = document.querySelectorAll('.country');
        for (const each of allcont) {
            if (each) {
                each.addEventListener('click', ev);
                
            } else {
                console.log('first')
            }
        }
        
        
    }, 1000);
    function filterNations(e){
        let nationsvalue = '';
        console.log(e.target.value)
        const filtered = result.filter((objects)=> objects.continents[0].toLowerCase().includes(e.target.value.toLowerCase()))
        // console.log(filtered)
        filtered.map(objectsr => {
            // console.log(objectsr)
            let eachnation = `
                <div class="country">
                    <img src=${objectsr.flags.png} alt="" class="countryimg">
                    <h2 class="countryname">${objectsr.name.common}</h2>
                    <h3 class="population">Population: <span>${objectsr.population}</span></h3>
                    <h3 class="region">Region: <span>${objectsr.region}</span></h3>
                    <h3 class="capital">Capital: <span>${objectsr.capital}</span></h3>


                </div>`;
            nationsvalue += eachnation;   
                

        })
        nations.innerHTML = nationsvalue;
        
    }
           
    displayingNations()
    document.querySelector('.goback').addEventListener('click', displayingNations)
    input.addEventListener('input', searchingNations);
    select.addEventListener('change', filterNations);
    

})
.catch(err => {
    if (err == 'TypeError: Failed to fetch') {
        nations.innerHTML = `<h3>No internet ! Please Check your connection and try again.</h3>`
    }
    
});
let theme = document.querySelector('.themeChanger');
theme.addEventListener('click', (e)=> {
    document.body.classList.toggle('theme');
    document.querySelector('#idd').classList.toggle('none');
    document.querySelector('#id').classList.toggle('none');
    document.querySelector('#dark').classList.toggle('none');
    document.querySelector('#sun').classList.toggle('none');
 
})


