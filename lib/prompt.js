const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('../db/connection');

const beginPrompt = () => {
    return inquirer.prompt({
            type: 'list',
            name: 'start',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Roles', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update an Employee Role']
        })
        .then(({start}) => {
            if (start === 'View All Departments') {
                viewDepartments();
            }
            else if (start === 'View All Roles') {
                viewRoles();
            }
            else if (start === 'View All Employees') {
                viewEmployees();
            }
        })
};

const viewDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.table(rows);
    });
};

const viewRoles = () => {
    const sql = `SELECT roles.id, roles.title, roles.salary, departments.name as department
                FROM roles
                LEFT JOIN departments ON roles.department_id = departments.id;`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.table(rows);
    });
};

const viewEmployees = () => {
    const sql = ``;
};