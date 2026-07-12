alert("JavaScript is working");
displayData(tigerReserves);

function displayData(data){
    let result = document.getElementById("result");

    result.innerHTML = "";

    data.forEach(function(tiger) {
        
        result.innerHTML += `
        <div Class="card">
         <img src="images/amrabad.jpg" alt="indian Tiger">

            <h2>${tiger.name}</h2>
            <p><b>State:</b> ${tiger.State}</p>
            <p><b>Area:</b> ${tiger.Area}</p>
            <p><b>founded:</b> ${tiger.founded}</p>
        </div>
        `;
    });
}   
    
function searchtiger() {

    let text = document.getElementById("searchbox").value.toLowerCase();

    let filtered = tigerReserves.filter(function(tiger) {
        return tiger.name.toLowerCase().includes(text);
    });

    if (filtered.length == 0) {
        document.getElementById("result").innerHTML = "<h2>No Tiger Reserve Found</h2>";
    } else {
        displayData(filtered);
    }
}