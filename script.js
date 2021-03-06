let today = moment().format('MMMM Do YYYY');
let dayOfWeek = moment().format('dddd');
let thisHour = moment().hour();

window.onload = function() {

  loadPlans();
  moment().format();
  document.getElementById("current-day").textContent = (dayOfWeek + ' ' + today);

    setInterval(function() {
    changeBoxColors();
  }, 1000);
}

function savePlans(saveID) {
  localStorage.setItem("Time" + saveID + "Event", document.getElementById(saveID).value)
}


function loadPlans() {
  for (i = 9; i < 18; i++) {
    document.getElementById(i.toString()).value = localStorage.getItem("Time" + i + "Event");
  }
}

function clearStorage()
{
  localStorage.clear();
  for(i = 9; i < 18; i++)
    {
      document.getElementById(i).value = "";
    }
}

function changeBoxColors()
{
  thisHour = moment().hour();
  moment().format();
  
  for(i = 9; i < 18; i++)
    {
      if(i == thisHour)
        {
          document.getElementById("fillBox" + (i - 8)).style.backgroundColor = "#ffffff";
        } else if(i > thisHour){
          document.getElementById("fillBox" + (i - 8)).style.backgroundColor = "#ccfcdc";
        } else if(i < thisHour){
          document.getElementById("fillBox" + (i - 8)).style.backgroundColor = "#fccccc";
        }
    }
}