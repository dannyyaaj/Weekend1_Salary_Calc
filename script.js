$(document).ready(start);

// initalize array of employees
const employees = [{
  employeeFirstName: 'Bruno',
  employeeLastName: 'Mars',
  employeeTitle: 'Manager',
  employeeSalary: 73000
}, {
  employeeFirstName: 'Mary',
  employeeLastName: 'Jane',
  employeeTitle: 'Support Team',
  employeeSalary: 64000
}, {
  employeeFirstName: 'Jingbo',
  employeeLastName: 'Lin',
  employeeTitle: 'Recruiter',
  employeeSalary: 55000
}];

function start() {
  console.log('jQuery ready!');
  // renderEmployeeData()

  for (let employee of employees) {
    let $newRow = $('<tr></tr>');
    $newRow.append(`<td>${employee.employeeFirstName}</td>`);
    $newRow.append(`<td>${employee.employeeLastName}</td>`);
    $newRow.append(`<td>${employee.employeeFirstId}</td>`);
    $newRow.append(`<td>${employee.employeeTitle}</td>`);
    $newRow.append(`<td>$${employee.employeeSalary}</td>`);
    $('#employeeTable').append($newRow);
  }
}