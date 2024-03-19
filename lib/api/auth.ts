// Импорт константы API_BASE_URL из файла constants
import { API_BASE_URL } from '~/constants'
// Импорт путей API из файла openapi.gen
import { paths } from '~/openapi.gen'

// Типы запроса и ответа для аутентификации пользователя
type LoginUserRequest =
  paths['/users/login']['post']['requestBody']['content']['application/json'];
type LoginUserResponse =
  paths['/users/login']['post']['responses']['200']['content']['application/json'];

// Функция для отправки запроса на аутентификацию пользователя
export const login = (user: LoginUserRequest) => {
  return $fetch<LoginUserResponse>(`${API_BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: user, // Передаем данные пользователя в теле запроса
  });
};
