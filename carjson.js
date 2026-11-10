const minuJson = [
    {
        Car: {
            Colour: "Roosi roosa",
            "Tinted Windows": false,
            Seats: 5,
            Wheels: 4,
            Space: "Very big",
            "Bonus features": [
                {
                    Seat: "Seat warmer",
                    Holders: "Cup holders"
                }],
            Mark: "Wolkswagen",
            "Car Number": "368 EKV"

        }
    }
]
document.getElementById("app").innerHTML = `
<div id="json">
<h1> Auto omadused NYOMMM </h1>
<p>Värv: ${minuJson[0].Car.Colour}</p>
<p>Tumendatud aknad: ${minuJson[0].Car["Tinted Windows"]}</p>
<p>Seats: ${minuJson[0].Car.Seats}</p>
<p>Wheels: ${minuJson[0].Car.Wheels}</p>
<p>Space: ${minuJson[0].Car.Space}</p>
<p>Bonus features:
<ul>
<li>Iste: ${minuJson[0].Car["Bonus features"][0].Seat}</li>
<li>Hoidija: ${minuJson[0].Car["Bonus features"][0].Holders}</li>
</ul>
</p>
<p>Mark: ${minuJson[0].Car.Mark}</p>
<p>Car Number: ${minuJson[0].Car["Car Number"]}</p>
</div>
`

function loadDoc() {
    const http = new XMLHttpRequest();
    XMLHttpRequest.onload = function () {
        DocumentFragment,getElementbyId("bacon").innerHTML = this.responseText;
    }
    xhttp.open("GET","https://baconipsum.com/api/?type=all-meat")
    xhttp.send()
}