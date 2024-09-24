//getID func

function getInputId(id) {
  return document.getElementById(id);
}

let donateConBtn = getInputId("donate");

// donate con & history
let donateCon = getInputId("donate_content");
let historyCon = getInputId("donate_history");

//model
let model = getInputId("modalOpen");
let closeModel = getInputId("close");

//modal func
function modelOpen() {
  return model.classList.remove("hidden");
}

function modalClose() {
  return model.classList.add("hidden");
}

closeModel.addEventListener("click", modalClose);

//globla Bank Amount
let totalBankBalance = getInputId("bankAmount");
let bankBalance = 0;
bankBalance = parseFloat(totalBankBalance.textContent);

//donate functionlity
let donateBtn = document.querySelectorAll(".donateBtn");

donateBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let inputs = item.previousElementSibling;
    let inputFile = item.previousElementSibling.value;
    let inputValueConvert = parseFloat(inputFile);
    let parentFile = item.parentElement;
    let parent = parentFile.parentElement;
    let mainParent = parent.firstChild;

    let banalce = mainParent.nextSibling;
    let div = banalce.children;
    let p = div[1];
    let span = p.children[0];
    let spanInput = span.textContent;
    let amountBalanceCon = parseFloat(spanInput);

    //validation
    if (isNaN(inputFile) || inputFile <= 0 || bankBalance <= inputFile) {
      alert("Please input the Valid Amount And Reduace Your Total Balance");
    } else {
      let amountPlus = inputValueConvert + amountBalanceCon;
      span.innerText = amountPlus;
      bankBalance = bankBalance - inputValueConvert;
      totalBankBalance.textContent = bankBalance;
      //history value
      let para = parentFile.firstElementChild.innerText;
      let historyContainer = document.getElementById("history_amount");
      let item = document.createElement("div");
      item.className = "border border-slate-300 p-4 rounded-md mb-4";
      item.innerHTML = `
              <p class="text-lg font-medium"><span>${inputValueConvert}</span> taka is <span>${para}</span></p>
              <p>Date ${new Date()} </p>
      `;
      historyContainer.insertBefore(item, historyContainer.firstChild);

      //alert
      modelOpen();
    }
    inputs.value = "";
  });
});

//history btn 
let historyConBtn = getInputId("history");

historyConBtn.addEventListener("click", () => {
  historyCon.classList.remove("hidden");
  donateCon.classList.add("hidden");
  historyConBtn.classList.add(`bg-[#B4F461]`);
  donateConBtn.classList.remove("bg-[#B4F461]");
  donateConBtn.classList.add("border", "border-slate-400", "bg-white");
});

donateConBtn.addEventListener("click", () => {
  donateCon.classList.remove("hidden");
  historyCon.classList.add("hidden");
  historyConBtn.classList.remove(`bg-[#B4F461]`);
  historyConBtn.classList.add("border", "border-slate-400", "bg-white");
  donateConBtn.classList.add("bg-[#B4F461]");
  donateConBtn.classList.remove("border", "border-slate-400", "bg-white");
});
