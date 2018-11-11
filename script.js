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
// initialize array of employees
const employees = [{
  employeeFirstName: 'Bruno',
  employeeLastName: 'Mars',
  employeeId: 4521,
  employeeTitle: 'Technical Project Manager',
  employeeSalary: 75000
}, {
  employeeFirstName: 'Mary',
  employeeLastName: 'Jane',
  employeeId: 8724,
  employeeTitle: 'Web Developer',
  employeeSalary: 59000
}, {
  employeeFirstName: 'Jingbo',
  employeeLastName: 'Lin',
  employeeId: 9623,
  employeeTitle: 'Graphic Designer',
  employeeSalary: 55000
}];

let totalMonthly = 0;

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

// jQuery will run this function start on load
function start() {
  // renderEmployeeData()
  for (let employee of employees) {
    addRow(employee.employeeFirstName, employee.employeeLastName, employee.employeeId, employee.employeeTitle, employee.employeeSalary);
  };
  handleEvents();
  renderTotalMonthly();
}

function handleSubmit() {
  let $newRow = $('<tr></tr>');
  let fName = $('#employeeFirstName').val();
  let lName = $('#employeeLastName').val();
  let id = $('#employeeId').val();
  let title = $('#employeeTitle').val();
  let salary = parseInt(`${$(('#employeeSalary').toLocaleString('en')).val()}`);

  // initialize new employee object from input fields and push it into array
  let newEmployee = new Employee(fName, lName, id, title, salary);

  if (fName == '' || lName == '' || id == '' || title == '' || salary == '') {
    return alert('Please complete all fields.');
  } else {

    employees.push(newEmployee);

    // render new employee rows
    addRow(newEmployee.employeeFirstName, newEmployee.employeeLastName, newEmployee.employeeId, newEmployee.employeeTitle, newEmployee.employeeSalary);
  }

  // reset inputs
  $('#employeeFirstName').val('');
  $('#employeeLastName').val('');
  $('#employeeId').val('');
  $('#employeeTitle').val('');
  $('#employeeSalary').val('');
}

// function add rows of new employees
function addRow(fName, lName, id, title, salary) {
  let $newRow = $('<tr></tr>');
  // add new table row and display input fields as values
  $newRow.append(`<td>${fName}</td>`);
  $newRow.append(`<td>${lName}</td>`);
  $newRow.append(`<td>${id}</td>`);
  $newRow.append(`<td>${title}</td>`);
  $newRow.append(`<td>${(currencyFormatter.format(salary))}</td>`);
  $newRow.append(`<td>${(currencyFormatter.format(salary / 12))}</td>`)
  $newRow.append(`<td><button class='deleteBtn' data-id=${id}>Delete</button></td>`);
  $('#employeeTable').append($newRow);
}

function renderTotalMonthly() {
  for (let i = 0; i < employees.length; i++) {
    totalMonthly += ((employees[i].employeeSalary) / 12);
  }

  // end of looping through employees object
  $('#totalMonthly').text(`$${totalMonthly.toFixed(2)}`)
}

function handleEvents() {
  $('#submit').on('click', handleSubmit);
  $('#submit').on('click', updateTotalMonthly);
  $('#employeeTable').on('click', '.deleteBtn', handleDeleteButton);
}

function updateTotalMonthly() {
  for (let i = 0; i < employees.length; i++) {
    totalMonthly += ((employees[i].employeeSalary) / 12);
  }

  // Changes total monthly to red if amount is over $20,000
  totalMonthly >= 20000 ? $('#totalMonthly').toggleClass('fontRed') : $('#totalMonthly').removeClass('fontRed');

  // end of looping through employees object
  $('#totalMonthly').text(`$${totalMonthly.toFixed(2)}`)
}

function handleDeleteButton() {
  // remove closes table row to delete button
  $(this).closest('tr').remove();

  //loop through employees array
  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];
    if (employee.employeeId == $(this).data().id) {
      console.log(employees, 'before');
      employees.splice(i, 1);
      console.log(employees, 'after');
      console.log(totalMonthly, 'totalMonthly')
      totalMonthly = 0;
      updateTotalMonthly()
    }
  }
}