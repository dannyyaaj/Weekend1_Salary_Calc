$(document).ready(start);

// initalize array of employees
const employees = [{
  employeeFirstName: 'Bruno',
  employeeLastName: 'Mars',
  employeeId: 4521,
  employeeTitle: 'Manager',
  employeeSalary: 73000
}, {
  employeeFirstName: 'Mary',
  employeeLastName: 'Jane',
  employeeId: 8724,
  employeeTitle: 'Support Team',
  employeeSalary: 64000
}, {
  employeeFirstName: 'Jingbo',
  employeeLastName: 'Lin',
  employeeId: 9623,
  employeeTitle: 'Recruiter',
  employeeSalary: 55000
}];



function start() {
  renderTotalMonthly()
  handleEvents()

  console.log('jQuery ready!');
  // renderEmployeeData()

  for (let employee of employees) {
    let $newRow = $('<tr></tr>');
    $newRow.append(`<td>${employee.employeeFirstName}</td>`);
    $newRow.append(`<td>${employee.employeeLastName}</td>`);
    $newRow.append(`<td>${employee.employeeId}</td>`);
    $newRow.append(`<td>${employee.employeeTitle}</td>`);
    $newRow.append(`<td>$${employee.employeeSalary.toLocaleString('en')}</td>`);
    $('#employeeTable').append($newRow);
  }
}

function renderTotalMonthly() {
  let totalMonthly = 0;
  for (let i = 0; i < employees.length; i++) {
    totalMonthly += (employees[i].employeeSalary) / 12
  }
  $('#totalMonthly').text(`$${totalMonthly.toLocaleString('en')}`);
}

function handleEvents() {
  $('#submit').on('click', handleSubmit)
}

function handleSubmit() {
  let $newRow = $('<tr></tr>');
  let fName = $('#employeeFirstName').val();
  let lName = $('#employeeLastName').val();
  let id = $('#employeeId').val();
  let title = $('#employeeTitle').val();
  let salary = $('#employeeSalary').val();

  $newRow.append(`<td>${fName}</td>`);
  $newRow.append(`<td>${lName}</td>`);
  $newRow.append(`<td>${id}</td>`);
  $newRow.append(`<td>${title}</td>`);
  $newRow.append(`<td>$${salary}</td>`);
  $('#employeeTable').append($newRow);
}