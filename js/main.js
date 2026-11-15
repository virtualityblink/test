const buttonItemEdit = document.getElementsByClassName("buttonItemEdit")[0];
const buttonItemDelete = document.getElementsByClassName("buttonItemDelete")[0];
const boxForEditing = document.getElementById("boxForEditing");
const buttonCancelEdit = document.getElementById("buttonCancelEdit");
const currentYearValue = document.getElementById("currentYearValue");
const currentMonthValue = document.getElementById("currentMonthValue");
const listYear = document.getElementById("listYear");
const listMonths = document.getElementById("listMonths");
const listDays = document.getElementById("listDays");
const workingDaysValue = document.getElementById("workingDaysValue");
const workingHoursValue = document.getElementById("workingHoursValue");
const monthMoneyValue = document.getElementById("monthMoneyValue");

const date = new Date();

const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

console.log("День - " + day + " Місяць - " + month + " Рік - " + year);

let mainMonths = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень"
];

let mainYear = year;
let mainMonth = mainMonths[month];
let mainMonthNum = month + 1;
let mainDays = 0;
let mainHours = 0;
let mainFunds = 0;
let mainRate = 25;

let data = [
    {"year": 2026, "month": 11, "day": 1, "hours": 8},
    {"year": 2026, "month": 11, "day": 2, "hours": 8},
    {"year": 2026, "month": 11, "day": 3, "hours": 8},
    {"year": 2026, "month": 11, "day": 4, "hours": 8}
];

// buttonItemDelete.addEventListener("click", function() {
//     this.closest(".itemDay").remove();
// });

// buttonItemEdit.addEventListener("click", () => {
//     boxForEditing.style.display = "flex";
// });

buttonCancelEdit.addEventListener("click", () => {
    boxForEditing.style.display = "none";
});

function mainReset() {
    for (let el of data) {
        const divItemDay = document.createElement("div");
        const divItemDayDate = document.createElement("div");
        const divItemDayHours = document.createElement("div");
        const divItemDayFunds = document.createElement("div");
        const divButtonItemEdit = document.createElement("div");
        const divButtonItemDelete = document.createElement("div");

        divItemDay.className = "itemDay";
        divItemDayDate.className = "itemDayDate";
        divItemDayHours.className = "itemDayHours";
        divItemDayFunds.className = "itemDayFunds";
        divButtonItemEdit.className = "buttonItemEdit";
        divButtonItemDelete.className = "buttonItemDelete";

        divItemDayDate.textContent = el.day + "." + mainMonthNum + "." + mainYear;
        divItemDayHours.textContent = el.hours;
        divItemDayFunds.textContent = el.hours * mainRate;
        divButtonItemEdit.textContent = "Редагувати";
        divButtonItemDelete.textContent = "Видалити";

        listDays.appendChild(divItemDay);
        divItemDay.appendChild(divItemDayDate);
        divItemDay.appendChild(divItemDayHours);
        divItemDay.appendChild(divItemDayFunds);
        divItemDay.appendChild(divButtonItemEdit);
        divItemDay.appendChild(divButtonItemDelete);

        divButtonItemEdit.addEventListener("click", function() {
            boxForEditing.style.display = "flex";
        });
        divButtonItemDelete.addEventListener("click", function() {
            const item = this.closest(".itemDay");
            const date = item.querySelector(".itemDayDate").textContent;
            const day = date.split(".")[0];
            for (let el of data) {
                if (el.day == day) {
                    el.filter(item => item.day !== 20);;
                    console.log(data)
                }
            }
            this.closest(".itemDay").remove();
        });

        mainDays++;
        mainHours += el.hours;
        mainFunds += el.hours * mainRate;
        workingDaysValue.textContent = mainDays;
        workingHoursValue.textContent = mainHours;
        monthMoneyValue.textContent = mainFunds;
    };
};

function main() {
    currentYearValue.textContent = mainYear;
    currentMonthValue.textContent = mainMonth;
    workingDaysValue.textContent = mainDays;
    workingHoursValue.textContent = mainHours;
    monthMoneyValue.textContent = mainFunds;

    for (let elYear of data) {
        const div = document.createElement("div");
        div.className = "itemYear";
        div.textContent = elYear.year;
        listYear.appendChild(div);
    };

    for (let elMonth of mainMonths) {
        const div = document.createElement("div");
        div.className = "itemMonth";
        div.textContent = elMonth;
        listMonths.appendChild(div);
    };

    mainReset();

};
main();