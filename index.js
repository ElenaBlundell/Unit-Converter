
const inputValue = document.getElementById("input-value")
const givenNumber = document.getElementsByClassName("given-number")
const convertBtn = document.getElementById("convert-btn")

const meterFeet =  3.28084
const literGallon =  0.264172
const kiloPound =  2.20462

const metersToFeet = document.getElementById("meters-to-feet");
const feetToMeters = document.getElementById("feet-to-meters");
const litersToGallons = document.getElementById("liters-to-gallons");
const gallonsToLiters = document.getElementById("gallons-to-liters");
const kilosToPounds = document.getElementById("kilos-to-pounds");
const poundsToKilos = document.getElementById("pounds-to-kilos");

convertBtn.addEventListener("click", function(){
    for (let i = 0; i < givenNumber.length; i++) {
          givenNumber[i].textContent = inputValue.value;
         }
         conversion(inputValue.value)
} )

function conversion(givenValue){
    metersToFeet.textContent = (givenValue * meterFeet).toFixed(3);
    feetToMeters.textContent = (givenValue / meterFeet).toFixed(3);

    litersToGallons.textContent = (givenValue * literGallon).toFixed(3);
    gallonsToLiters.textContent = (givenValue / literGallon).toFixed(3);
    
    kilosToPounds.textContent = (givenValue * kiloPound).toFixed(3);
    poundsToKilos.textContent = (givenValue / kiloPound).toFixed(3);
}

