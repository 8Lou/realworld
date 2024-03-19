// Импорт константы API_BASE_URL из файла constants
import { API_BASE_URL } from '~/constants'
// Импорт путей API из файла openapi.gen
import { paths } from '~/openapi.gen'

// Типы запросов и ответов для обновления и создания пользователя
type UserSetting =
  paths['/user']['put']['requestBody']['content']['application/json'];
type UpdateUserResponse =
  paths['/user']['put']['responses']['200']['content']['application/json'];
type CreateUserResponse =
  paths['/users']['post']['responses']['201']['content']['application/json'];

// Функция для обновления данных пользователя
export const updateUser = (token: string, userSetting: UserSetting) => {
  return $fetch<UpdateUserResponse>(`${API_BASE_URL}/user`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
    body: userSetting,
  });
};

// Функция для создания нового пользователя
export const createUser = (
  username: string,
  email: string,
  password: string
) => {
  return $fetch<CreateUserResponse>(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      user: {
        username,
        email,
        password,
      },
    },
  });
};

// Тип и функция для получения данных пользователя
export type GetUserResponse =
  paths['/profiles/{username}']['get']['responses']['200']['content']['application/json'];

export const getUser = (username: string) => {
  return $fetch<GetUserResponse>(
    `${API_BASE_URL}/profiles/${encodeURIComponent(username)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

// Типы и функции для подписки к пользователя
export type FollowUserResponse =
  paths['/profiles/{username}/follow']['post']['responses']['200']['content']['application/json'];

export const followUser = (token: string, username: string) => {
  return $fetch<FollowUserResponse>(
    `${API_BASE_URL}/profiles/${encodeURIComponent(username)}/follow`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
    }
  );
};
// Типы и функции для отписки от пользователя
export type UnfollowUserResponse =
  paths['/profiles/{username}/follow']['delete']['responses']['200']['content']['application/json'];

export const unfollowUser = (token: string, username: string) => {
  return $fetch<FollowUserResponse>(
    `${API_BASE_URL}/profiles/${encodeURIComponent(username)}/follow`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
    }
  );
};
