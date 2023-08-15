const taskBtn = document.getElementById('task-btn');
const tableInfo = document.getElementById('content-container');
const inputField = document.getElementById('input-id');
const resetBtn = document.getElementById('clear-btn')
const dataArray = [
    { number: 1, description: 'Item 1 Description', action: 'Edit' },
    { number: 2, description: 'Item 2 Description', action: 'Edit' },
    { number: 3, description: 'Item 3 Description', action: 'Edit' },
    // Add more objects as needed
];
let count = 0;
let action = 'Done'
taskBtn.addEventListener('click', function () {
    const inputValue = inputField.value;
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${count += 1}</td>
    <td>${inputValue}</td>
    <td>
       <button class='btn done btn-success'>${action}</button>
       <button id='del' class='btn btn-info ml-2'>Delete</button>
    </td>
    `
    tableInfo.appendChild(tr)
    inputField.value = ''

    const btnDel = document.querySelectorAll('#del')
    for (const delBtn of btnDel) {
        delBtn.addEventListener('click',
            function (e) {
                // console.log(e.target.parentElement.parentElement);
                e.target.parentElement.parentElement.style.display = 'none'
            })

    }

    const btnDne = document.querySelectorAll('.done')

    for (const dneBtn of btnDne) {
        dneBtn.addEventListener('click', function (e) {
            e.target.parentElement.parentElement.style.textDecoration = ' line-through'
        })
    }

    resetBtn.addEventListener('click', function () {
        tableInfo.removeChild(tr);
    })


})
// const targetDateInput = document.getElementById('targetDate');
// const startButton = document.getElementById('startButton');
// const countdownDisplay = document.getElementById('countdownDisplay');

// startButton.addEventListener('click', startCountdown);

// let countdownInterval;

// function startCountdown() {
//     const targetDate = new Date(targetDateInput.value).getTime();

//     if (isNaN(targetDate)) {
//         alert('Please enter a valid date and time.');
//         return;
//     }

//     countdownInterval = setInterval(updateCountdown, 1000, targetDate);
// }

// function updateCountdown(targetDate) {
//     const now = new Date().getTime();
//     const timeRemaining = targetDate - now;

//     if (timeRemaining <= 0) {
//         clearInterval(countdownInterval);
//         countdownDisplay.textContent = 'Countdown expired';
//     } else {
//         const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//         countdownDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
//     }
// }
