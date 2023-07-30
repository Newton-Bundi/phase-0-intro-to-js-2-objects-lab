// Write your solution in this file!


let employee = {
    name:"",
    streetAddress:""
}

delete employee.name;

employee;

function updateEmployeeWithKeyAndValue(employee,key,value) {
    let newEmployee1 = {...employee}
    newEmployee1[key]=value;
    return newEmployee1;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key]=value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    let newEmployee2 = {...employee}
    delete newEmployee2.key;
    console.log(newEmployee2);
    return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee.key;
    return employee;
}

deleteFromEmployeeByKey(employee,'name');
