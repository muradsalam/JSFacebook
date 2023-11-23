let user = prompt('Login: ');
let parol = prompt('Password: ');
let netice

if (user == 'admin' && parol == 123456) {
    netice = 'Welcome to Facebook, Admin!';
} else if ( user == 'murad' && parol == 1234) {
    netice = 'Welcome to Facebook, Murad!';
} else {
    netice = 'You are not a hacker. Because you do not know how to hack. '
}
document.getElementById('murad').innerHTML = netice;