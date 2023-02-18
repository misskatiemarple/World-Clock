function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss[<small>] A[</small>]"
  );
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("dddd, Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>] A[</small>]");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd, Do MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>] A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
