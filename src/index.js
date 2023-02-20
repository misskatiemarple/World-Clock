function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("H:mm:ss");

    let losAngelesOfficeHours = losAngelesTime.format("H");
    if (losAngelesOfficeHours < 8) {
      losAngelesElement.style.backgroundColor = `black`;
      losAngelesElement.style.color = `white`;
    }

    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("dddd, Do MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format("H:mm:ss");

    let parisOfficeHours = parisTime.format("H");
    if (parisOfficeHours < 8) {
      parisElement.style.backgroundColor = `black`;
      parisElement.style.color = `white`;
    }

    let tokyoElement = document.querySelector("#tokyo");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, Do MMMM YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("H:mm:ss");

    let tokyoOfficeHours = tokyoTime.format("H");
    if (tokyoOfficeHours < 8) {
      tokyoElement.style.backgroundColor = `black`;
      tokyoElement.style.color = `white`;
    }
  }
}
function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("H:mm")}
          </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
