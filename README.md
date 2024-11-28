Requirement:
1. Initialize Data:
● Employee List:
Create a list of employees with duplicates. Each employee object should
include:
○ id: A unique identier for the employee.
○ name: Name of the employee.
○ department: Department to which the employee belongs.
○ salary: Base salary of the employee (in rupees).
○ bonusPercentage: The percentage of salary to be given as a
bonus.
● Department Bonus Criteria:
Dene bonus rules for each department:
○ HR: 10% additional bonus if salary is below ₹50,000.
○ Engineering: 15% bonus for employees with more than 2 years in
the company (optional: yearsOfExperience).
○ Sales: Bonus based on sales targets:
■ Sales below ₹1,00,000: 5%.
■ Sales between ₹1,00,000 and ₹5,00,000: 10%.
■ Sales above ₹5,00,000: 20%.
2. Functionality:
● Remove Duplicates:
Use a Set to eliminate duplicate entries from the employee list based on
the id.
● Filter Employees by Department:
Take a department name as input and return a ltered list of employees
belonging to that department.
● Calculate Total Compensation:
For each employee, calculate:
○ Base salary.
○ Bonus based on the department rules.
○ Total compensation (salary + bonus).
● Generate Report:
For the ltered employees:
○ Include the name, department, salary, bonus, and total
compensation.
○ Group the employees by department in the output.
● Update Employee Details:
Update each employee object with their computed bonus and total
compensation.
3. Technical Requirements:
● Use map and lter for processing arrays.
● Use a Set to remove duplicates.
● Use switch or if...else for conditional bonus calculation.
● Utilise for...of or for...in loops for iterating through employee lists or
departments.
● Apply appropriate operators (+=, *=, etc.) for bonus and total
compensation calculations.
4. Output:
The function should return:
A summary report grouped by department:
{
HR: [
{ name: 'Alice', salary: 40000, bonus: 4000, totalCompensation: 44000 },
...
],
Engineering: [
{ name: 'Bob', salary: 60000, bonus: 9000, totalCompensation: 69000 },
...
],
Sales: [
{ name: 'Charlie', salary: 50000, bonus: 5000, totalCompensation: 55000 },
...
]
}
The updated employee list, including the computed bonus and total
compensation for each employee.
5. Sample Execution:
// Input:
const department = "Engineering";
// Output:
{
report: {
Engineering: [
{ name: 'Bob', salary: 60000, bonus: 9000, totalCompensation: 69000 },
{ name: 'Eve', salary: 70000, bonus: 10500, totalCompensation: 80500 },
]
},
updatedEmployees: [
{ id: 1, name: 'Bob', department: 'Engineering', salary: 60000,
bonusPercentage: 15, bonus: 9000, totalCompensation: 69000 },
...
]
}

Code:
const mydept = 'Engineering';

let employees = [
    { id: 1, name: 'Dev', department: 'HR', salary: 40000, bonuspercentage: 10 },
    { id: 2, name: 'Aarthi', department: 'Engineering', salary: 50000, bonuspercentage: 15, yearsOfexperience: 3 },
    { id: 3, name: 'Sasi', department: 'Sales', salary: 50000, bonuspercentage: 10, sales: 300000 },
    { id: 2, name: 'Aarthi', department: 'Engineering', salary: 50000, bonuspercentage: 15, yearsOfexperience: 3 },
    { id: 4, name: 'Raj', department: 'Sales', salary: 40000, bonuspercentage: 5, sales: 80000 },
    { id: 5, name: 'JK', department: 'Engineering', salary: 60000, bonuspercentage: 15, yearsOfexperience: 4 },
];

// Function to remove duplicates
function removeDuplicates() {
    const uniqueSet = new Set();
    const uniqueEmp = [];
    for (const emp of employees) {
        if (!uniqueSet.has(emp.id)) {
            uniqueSet.add(emp.id);
            uniqueEmp.push(emp);
        }
    }
    return uniqueEmp;
}

// Function to filter by department
function filterEmp(uniqueEmp) {
    return uniqueEmp.filter(emp => emp.department === mydept);
}

// Function to calculate bonus
function calculateBonus(emp) {
    let bonus = emp.salary * emp.bonuspercentage / 100;
    switch (emp.department) {
        case 'HR':
            if (emp.salary < 50000) {
                bonus += (emp.salary * 10 / 100);
            }
            break;
        case 'Engineering':
            if (emp.yearsOfexperience > 2) {
                bonus += (emp.salary * 15 / 100);
            }
            break;
        case 'Sales':
            if (emp.sales < 100000) {
                bonus += emp.salary * 5 / 100;
            } else if (emp.sales >= 100000 && emp.sales <= 500000) {
                bonus += emp.salary * 10 / 100;
            } else if (emp.sales > 500000) {
                bonus += emp.salary * 20 / 100;
            }
            break;
        default:
            break;
    }
    return bonus;
}

// Function to calculate total compensation
function calculateCompensation(uniqueEmp) {
    for (const emp of uniqueEmp) {
        emp.bonus = calculateBonus(emp);
        emp.totalCompensation = emp.salary + emp.bonus;
    }
    return uniqueEmp;
}

// Main function
function employeeData() {
    const uniqueEmployees = removeDuplicates();
    console.log('Unique Employee List:', uniqueEmployees);

    const filteredList = filterEmp(uniqueEmployees);
    console.log('Filtered Employees Based on Department:', filteredList);

    const compensatedEmployees = calculateCompensation(filteredList);
    console.log('Employees with Total Compensation:', compensatedEmployees);
}

// Function call
employeeData();

removeDuplicates()
Removes duplicate employees based on their unique id.
Returns an array of unique employees.

filterEmp(uniqueEmp)
Filters the employee list by the specified department.
Takes an array of unique employees as input and returns the filtered array.

calculateBonus(emp)
Calculates the bonus for an individual employee based on their department .
Returns the calculated bonus amount.

calculateCompensation(uniqueEmp)
Updates each employee object with calculated bonus and total compensation.
Returns the updated employee list.

employeeData()
Main function :
Removes duplicates.
Filters by department.
Calculates bonuses and total compensation.


