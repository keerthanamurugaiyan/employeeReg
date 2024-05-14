// import React from 'react'

// function MockApi() {

//     // api.js

// let employees = [
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com', department: 'Human Resources', position: 'HR Manager' },
//     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', department: 'Finance', position: 'Financial Analyst' },
//     { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', department: 'Marketing', position: 'Marketing Manager' }
//   ];
  
//   export const getEmployees = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(employees);
//       }, 1000);
//     });
//   };
  
//   export const addEmployee = (employee) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         employees = [...employees, employee];
//         resolve(employee);
//       }, 500);
//     });
//   };
  
//   export const updateEmployee = (id, updatedEmployee) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         employees = employees.map((employee) =>
//           employee.id === id ? { ...employee, ...updatedEmployee } : employee
//         );
//         resolve(updatedEmployee);
//       }, 500);
//     });
//   };
  
//   export const deleteEmployee = (id) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         employees = employees.filter((employee) => employee.id !== id);
//         resolve();
//       }, 500);
//     });
//   };
  
//     return (
//         <></>
//     )
// }

// export default MockApi
