INSERT INTO departments (name)
VALUES
    ('Engineering'), ('Sales'), ('Accountant'), ('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Chief Technology Officer', 175000, 1),
    ('Lead Salesman', 110000, 2),
    ('Lead Marketer', 120000, 4),
    ('Senior Engineer', 130000, 1),
    ('Junior Engineer', 110000, 1),
    ('Salesperson', 85000, 2),
    ('Accountant', 90000, 3),
    ('Marketing Rep', 95000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Spencer', 'Moyer', 1, NULL),
    ('John', 'Doe', 2, NULL),
    ('Emily', 'Byer', 3, NULL),
    ('Random', 'Name', 8, 3),
    ('Hello', 'There', 4, 1),
    ('Another', 'Random', 7, NULL),
    ('Cant', 'Think', 6, 2),
    ('Frank', 'Smith', 5, 1);