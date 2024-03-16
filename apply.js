var numOfMajors = 0;
var choices = [];

  const Numerate = new Map([
    ["1", "1st"],
    ["2", "2nd"],
    ["3", "3rd"]
  ])
  class rankings {
    constructor(college, major, rank) {
      this.college = college;
      this.major = major;
      this.rank = rank;
    }
  }
  
  function form(click) {
    let panels = ["engineering", "science", "int"];
    let tabs = ["h1", "h2", "h3"];
  
    for (let i = 0; i < 3; i++) {
      let panel = document.getElementById(panels[i]);
      let tab = document.getElementById(tabs[i]);
  
      if (i === click - 1) {
        changeStyle(panel, tab);
      } else {
        reset(panel, tab);
      }
    }
  }
  
  function changeStyle(panel, tab) {
    panel.style.visibility = "visible";
    panel.style.display = "grid";
    tab.style.backgroundColor = "white";
    panel.style.gridColumn = "1/4";
    panel.style.gridRow = "2";
    panel.style.rowGap = "10px";
    panel.style.columnGap = "10px";
  }
  
  function reset(panel, tab) {
    panel.style.visibility = "collapse";
    panel.style.display = "none";
    tab.style.backgroundColor = "gray";
  }
  
  function rank() {
    let buttons = document.querySelectorAll('.rank');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        let textbox = button.previousElementSibling;
        let parentEl = button.parentElement.parentElement.parentElement;
        let college;
        if (parentEl.id == "engineering") college = h1.innerText;
        else if (parentEl.id == "science") college = h2.innerText;
        else if (parentEl.id == "int") college = h3.innerText;
  
        if (addtotable(college, textbox.name, textbox.value)) {
          alert(`You have chosen ${textbox.name} as your ${Numerate.get(textbox.value) || textbox.value + "th"} chosen major in ${college} successfully`);
          return false;
        }
      });
    });
  }
  
  function addtotable(college, major, rank) {
    if (dataTest(major, rank)) {
      choices[rank - 1] = new rankings(college, major, rank);
      var table = document.getElementById("resultTable");
      var row = table.rows[parseInt(rank, 10)];
      var collegeCell = row.cells[0];
      var majorCell = row.cells[1];
      var rankCell = row.cells[2];
      rankCell.innerHTML = rank;
      collegeCell.innerHTML = college;
      majorCell.innerHTML = major;
      numOfMajors++
      document.getElementById("numOfMajors").innerHTML = 'Total number of completed choices:' + numOfMajors;
      return true;
    }
    else return false;
  }
  
  function isIntegerInput(rank) {
    return /^\d+$/.test(rank);
  }
  
  function dataTest(major, rank) {
    if (!isIntegerInput(rank)) {
      alert("Please enter the rank of chosen major");
      return false;
    }
    else if (rank > 10 || rank < 1) {
      alert("Please enter the rank of chosen between 1 and 10");
      return false;
    }
    for (i = 0; i < choices.length; i++) {
      if (typeof (choices[i]) !== 'undefined') {

        if (choices[i].major == major) {
          alert("You have already chosen this major");
          return false;
        }
        
        if (choices[i].rank == rank) {
          alert("You have already chosen this rank")
          return false;
        }
      }
    }
    return true;
  }
  
  var submitting = document.getElementById('link1')
  var clearing = document.getElementById('link2')
  submitting.onclick = submit;
  clearing.onclick = clearBtn;

  function submit() {
    let message = document.getElementById("gap");
    message.style.color = "red";
    var gaps = [];
    if (choices.length == 0) {
      message.innerHTML = "You have not chosen any major";
    }
    else {
      for (i = 0; i < choices.length; i++) {
        if (typeof choices[i] === "undefined") {
          gaps.push(i + 1);
        }
      }
      if (gaps.length > 0) {
        let gapMessage = "You have not chosen your ";
  
        for (let i = 0; i < gaps.length; i++) {
          gapMessage += i == gaps.length - 1 && i != 0
            ? " and "
            : i > 0
              ? ", "
              : ""
          gapMessage += `${Numerate.get(`${gaps[i]}`) || gaps[i] + "th"} chosen major`;
        }
        message.innerHTML = gapMessage + ", you can not leave any gap between your chosen majors";
      }
      else {
        const successMessage = `You have successfully submitted your application at time: ${new Date().toLocaleTimeString()}`;
        message.innerHTML = successMessage;
        document.getElementById("time").innerHTML = `Last change time: ${new Date().toLocaleTimeString()}`
      }
    }
  }


  function clearBtn(){
    choices = [];
    numOfMajors = 0;
    document.getElementById("time").innerHTML = `Last change time: ${new Date().toLocaleTimeString()}`;
    document.getElementById("numOfMajors").innerHTML = 'Total number of completed choices:'+numOfMajors;
    document.getElementById("gap").innerHTML = "";
    table = document.getElementById("resultTable");
    for (let i=1; i<11; i++){
      table.rows[i].cells[0].innerText ="";
      table.rows[i].cells[1].innerText ="";
    }
  }
  