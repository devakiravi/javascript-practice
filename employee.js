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
