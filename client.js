
$(document).ready(function() {
  $('#submitNewEmployee').on('click', function(){

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
// .append() needs a string value
// + joins merges content to a string
    $('#employeeTableBody').append(
// <tr> is now in a string form that includes all <td>
// Adds new employee to the DOM
    '<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + annualSalary + '</td>' +
      '<td><button class="deleteEmployeeButton">Delete ' + firstName + '</button></td>' +
    '</tr>'
    );
// Add monthly salary to the DOM
  var newEmployeeMonthlyExpenses = annualSalary / 12;
//$('#monthlyExpenses').text(); pulls value from line and converts it to a string
  var perviousSalaryTotal = $('#monthlyExpenses').text();
  var totalMonthlyExpenses = parseFloat(perviousSalaryTotal) + newEmployeeMonthlyExpenses;
  $('#monthlyExpenses').text(totalMonthlyExpenses);
});

  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){
    $(this).parent().parent().remove();
});

});
