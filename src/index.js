function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML =
      losAngelesTime.format("dddd, Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss[<small>] A[</small>]"
    );

    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("dddd, Do MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss[<small>] A[</small>]"
    );

    let tokyoElement = document.querySelector("#tokyo");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, Do MMMM YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss[<small>] A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, Do MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
          <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
