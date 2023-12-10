function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username !== '' && password !== '') {
        alert("Пользователь не найден");
        return true;
    }
}
  