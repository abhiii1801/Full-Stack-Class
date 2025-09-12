// employeeManager.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// In-memory employee list
let employees = [];

// Menu
function showMenu() {
  console.log("\n==== Employee Manager ====");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee by ID");
  console.log("4. Exit");
  rl.question("Choose an option: ", handleMenu);
}

// Handle user choice
function handleMenu(choice) {
  switch (choice.trim()) {
    case "1":
      addEmployee();
      break;
    case "2":
      listEmployees();
      break;
    case "3":
      removeEmployee();
      break;
    case "4":
      console.log("👋 Exiting... Goodbye!");
      rl.close();
      break;
    default:
      console.log("❌ Invalid option. Try again.");
      showMenu();
  }
}

// Add employee
function addEmployee() {
  rl.question("Enter employee name: ", (name) => {
    rl.question("Enter employee ID: ", (id) => {
      employees.push({ name, id });
      console.log(`✅ Employee added: ${name} (ID: ${id})`);
      showMenu();
    });
  });
}

// List employees
function listEmployees() {
  if (employees.length === 0) {
    console.log("📭 No employees found.");
  } else {
    console.log("\n📋 Employee List:");
    employees.forEach((emp, i) => {
      console.log(`${i + 1}. ${emp.name} (ID: ${emp.id})`);
    });
  }
  showMenu();
}

// Remove employee
function removeEmployee() {
  rl.question("Enter employee ID to remove: ", (id) => {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      const removed = employees.splice(index, 1);
      console.log(`🗑️ Removed employee: ${removed[0].name} (ID: ${removed[0].id})`);
    } else {
      console.log("❌ Employee not found with that ID.");
    }
    showMenu();
  });
}

// Start app
showMenu();
