window.addeventlisterner('domcontentloaded', (event) =>{
    getvisitcount();
})

Const functionapi = '';

const getvisitcount = () => {
    let count = 30;
    fetch(functionapi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        county = response.count;
        document.getElementById("counter").innertext = count;

    }).catch(function(error){
        console.log(error);
    });
    return count;
}