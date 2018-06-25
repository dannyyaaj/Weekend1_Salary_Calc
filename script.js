$(document).ready(start);

class Employee {
  constructor(fName, lName, id, title, salary) {
    this.employeeFirstName = fName;
    this.employeeLastName = lName;
    this.employeeId = id;
    this.employeeTitle = title;
    this.employeeSalary = salary;
  }
}
// initalize array of employees
const employees = [{
  employeeFirstName: 'Bruno',
  employeeLastName: 'Mars',
  employeeId: 4521,
  employeeTitle: 'Manager',
  employeeSalary: 65000
}, {
  employeeFirstName: 'Mary',
  employeeLastName: 'Jane',
  employeeId: 8724,
  employeeTitle: 'Support Team',
  employeeSalary: 53000
}, {
  employeeFirstName: 'Jingbo',
  employeeLastName: 'Lin',
  employeeId: 9623,
  employeeTitle: 'Recruiter',
  employeeSalary: 48000
}];

let totalMonthly = 0;

function start() {
  // renderEmployeeData()
  for (let employee of employees) {
    addRow(employee.employeeFirstName, employee.employeeLastName, employee.employeeId, employee.employeeTitle, employee.employeeSalary);
  }
  renderTotalMonthly()
  handleEvents()
  updateTotalMonthly()

  console.log('jQuery ready!');



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
  let salary = parseInt($('#employeeSalary').val());

  // initialize new employee object from input fields and push it into array
  let newEmployee = new Employee(fName, lName, id, title, salary);
  employees.push(newEmployee);

  // render new employee rows
  addRow(newEmployee.fName, newEmployee.lName, newEmployee.id, newEmployee.title, newEmployee.salary);

  // renders current monthly salary
  renderTotalMonthly();

  // reset inputs
  $('#employeeFirstName').val('');
  $('#employeeLastName').val('');
  $('#employeeId').val('');
  $('#employeeTitle').val('');
  $('#employeeSalary').val('');
}

// function add rows of new eployees
function addRow(fName, lName, id, title, salary) {
  let $newRow = $('<tr></tr>');
  // add new table row and display input fields as values
  $newRow.append(`<td>${fName}</td>`);
  $newRow.append(`<td>${lName}</td>`);
  $newRow.append(`<td>${id}</td>`);
  $newRow.append(`<td>${title}</td>`);
  $newRow.append(`<td>$${salary.toLocaleString('en')}</td>`);
  $('#employeeTable').append($newRow);
}

function renderTotalMonthly() {
  for (let i = 0; i < employees.length; i++) {
    totalMonthly += ((employees[i].employeeSalary) / 12);
  } // end of looping through employees object
}

// update total monthly salary
function updateTotalMonthly() {
  // Changes total monthly to red if amount is over $15,000
  totalMonthly >= 15000 ? $('#totalMonthly').toggleClass('fontRed') : null;

  // Rounds total monthly salary and adds comma to number
  let newTotalMonthly = Math.round(totalMonthly).toLocaleString('en');

  // Insert total monthly salary into span
  $('#totalMonthly').text(`$${newTotalMonthly}`);
}