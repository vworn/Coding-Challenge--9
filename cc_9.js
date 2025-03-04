// Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }

    // Method to return employee details as a formatted string
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    // Method to calculate annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Example usage for Task 1
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Expected output
console.log(emp1.calculateAnnualSalary()); // Expected output

// Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // Call the Employee constructor
        this.teamSize = teamSize;
    }

    // Override getDetails() to include team size
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    // Method to calculate manager bonus (10% of annual salary)
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

// Example usage for Task 2
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); // Expected output
console.log(mgr1.calculateBonus()); // Expected output

// Task 3: Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = []; // Array to store employees
    }

    // Method to add an employee to the company
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // Method to list all employee details
    listEmployees() {
        this.employees.forEach(emp => console.log(emp.getDetails()));
    }
}

// Example usage for Task 3
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees(); // Expected output

// Task 4: Implementing a Payroll System
class CompanyWithPayroll extends Company {
    // Method to calculate total payroll, including bonuses for managers
    calculateTotalPayroll() {
        return this.employees.reduce((total, emp) => {
            return emp instanceof Manager 
                ? total + emp.calculateAnnualSalary() + emp.calculateBonus()
                : total + emp.calculateAnnualSalary();
        }, 0);
    }
}

// Example usage for Task 4
const payrollCompany = new CompanyWithPayroll("TechCorp");
payrollCompany.addEmployee(emp1);
payrollCompany.addEmployee(mgr1);
console.log(payrollCompany.calculateTotalPayroll()); // Expected output

// Task 5: Implementing Promotions
class CompanyWithPromotions extends CompanyWithPayroll {
    // Method to promote an employee to manager
    promoteToManager(employee, teamSize) {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            // Replace employee with a new Manager instance, retaining original details
            this.employees[index] = new Manager(
                employee.name,
                employee.id,
                employee.department,
                employee.salary,
                teamSize
            );
        }
    }
}

// Example usage for Task 5
const promotionCompany = new CompanyWithPromotions("TechCorp");
promotionCompany.addEmployee(emp1);
promotionCompany.promoteToManager(emp1, 3);
promotionCompany.listEmployees(); // Expected output
