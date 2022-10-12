INSERT INTO department (name)
VALUES  ('HR'),
        ('IT'),
        ('Development')
        ('Media'),
        ('Finances');

INSERT INTO role (title, salary, department_id)
VALUES  ('IT Supervisor', 120000.00, 2),
        ('Finances Specialist', 75000.00, 4),
        ('Lead Engineer', 150000.00, 3),
        ('Software Engineer', 120000.00, 3),
        ('Production Manager', 160000.00, 4);
 
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ('Manuel','Ramirez', 1, NULL),
        ('Rose','Jackson', 2, 3),
        ('Simon','Sunders', 5, NULL),
        ('Chandra','Patel', 3, NULL),
        ('Sue', 'Huang', 3, 7);