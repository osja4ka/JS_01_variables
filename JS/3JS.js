const userPassword = '';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
if(ADMIN_PASSWORD === 'jqueryismyjam'){
  message = ACCESS_IS_ALLOWED
}
if(userPassword = null){
message = CANCELED_BY_USER}

if(userPassword === 'jqueryismyjam'){
  message = ACCESS_IS_ALLOWED
}

else{
  message = ACCESS_DENIED
}

console.log(message);