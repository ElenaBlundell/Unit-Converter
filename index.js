
const inputValue = document.getElementById("input-value")
const givenNumber = document.getElementsByClassName("given-number")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    for (let i = 0; i < givenNumber.length; i++) {
          givenNumber[i].textContent = inputValue.value;
         }
         conversion(inputValue.value)
} )

function conversion(givenValue){
    let metersToFeet = document.getElementById("meters-to-feet");
    metersToFeet.textContent = (givenValue * 3.28084).toFixed(3);

    let feetToMeters = document.getElementById("feet-to-meters");
    feetToMeters.textContent = (givenValue / 3.28084).toFixed(3);

    let litersToGallons = document.getElementById("liters-to-gallons");
    litersToGallons.textContent = (givenValue * 0.264172).toFixed(3);

    let gallonsToLiters = document.getElementById("gallons-to-liters");
    gallonsToLiters.textContent = (givenValue / 0.264172).toFixed(3);

    let kilosToPounds = document.getElementById("kilos-to-pounds");
    kilosToPounds.textContent = (givenValue * 2.205).toFixed(3);

    let poundsToKilos = document.getElementById("pounds-to-kilos");
    poundsToKilos.textContent = (givenValue / 2.205).toFixed(3);
}
