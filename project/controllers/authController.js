const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../data/users.json");

function loadUsers() {
  if (!fs.existsSync(usersPath)) return [];
  const data = fs.readFileSync(usersPath);
  return JSON.parse(data);
}

function saveUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}

exports.register = (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  const existing = users.find((u) => u.username === username);
  if (existing) {
    return res.send("User already exists. <a href='/register'>Try again</a>");
  }

  users.push({ username, password });
  saveUsers(users);
  res.send("Registration successful. <a href='/'>Login</a>");
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.send("Invalid credentials. <a href='/'>Try again</a>");
  }

  req.session.user = user;
  res.redirect("/dashboard");
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
