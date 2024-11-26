const mydept ='Engineering';

let employees=[ 
    {id:1,name:'Dev',department:'HR',salary:40000,bonuspercentage:10},
    {id:2, name:'aarthi',department:'Engineering',salary:50000,bonuspercentage:15,yearsOfexperience:3},
    {id:3, name:'sasi',department:'Sales',salary:50000,bonuspercentage:10,sales:300000},
    {id:2, name:'aarthi',department:'Engineering',salary:50000,bonuspercentage:15,yearsOfexperience:3},
    {id:4, name:'raj',department:'sales',salary:40000,bonuspercentage:5,sales:80000},
    {id:5, name:'JK',department:'Engineering',salary:60000,bonuspercentage:15,yearsOfexperience:4},
];
//function to remove duplicates using set
function removeDuplicates(){
    const uniqueSet= new Set();
    const uniqueEmp =[];
    for (const emp of employees) {
        if(!uniqueSet.has(emp.id)){
            uniqueSet.add(emp.id);
            uniqueEmp.push(emp);
        }
    }
    return uniqueEmp;
}

//to filter by the departments
function filterEmp(uniqueEmp){
    return uniqueEmp.filter(emp=>emp.department==mydept);
}

//to calculate bonus
function calculateBonus(uniqueEmp){
    let bonus  = uniqueEmp.salary*uniqueEmp.bonuspercentage/100;
    switch(uniqueEmp.department){
        case 'HR':
            if(uniqueEmp.salary<50000){
               bonus+= (uniqueEmp.salary*10/100);
            }
             break;
         case 'Enginering':
            if(uniqueEmp.yearsOfexperience>2){
                bonus+=(uniqueEmp.salary*15/100);
            }  
            break;
        case 'sales': 
             if(uniqueEmp.sales<100000){
                bouns+=uniqueEmp.salary*5/100;
             }else if(uniqueEmp.sales<=10000 && uniqueEmp.sales>=50000){
                bonus +=uniqueEmp.salary*10/100;
             }else if(uniqueEmp.sales>500000){
                bonus += uniqueEmp.salary*20/100;
             };
             break;
         default:
             break;    
             
    }
    console.log(bonus);
}
// calculating total compensation
function calculateCompensation(uniqueEmp) {
    
        uniqueEmp.bonus = calculateBonus(uniqueEmp);
        uniqueEmp.totalCompensation = uniqueEmp.salary + uniqueEmp.bonus;
   
    return employees;
}

//main function
function employeeData(){
   const uniqueEmployees=removeDuplicates();
   console.log('unique Employee list',uniqueEmployees);
   const filteredList = filterEmp(uniqueEmployees);
   console.log('fliter based on choden dept',filteredList);
   const calculatedBonus= calculateBonus(uniqueEmployees);
   console.log(calculatedBonus);
   compensation =calculateCompensation(uniqueEmp)
   console.log(compensation);
}


//function call
employeeData();
