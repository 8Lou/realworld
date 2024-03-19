// Импортируем функцию defineStore из библиотеки pinia для создания хранилища
import { defineStore } from 'pinia'
// Импортируем тип User из файла с типами '@/types'
import { User } from '@/types'

// Определяем тип состояния для хранилища auth
type authState = {
  currentUser: User | undefined; // Текущий пользователь или undefined, если не аутентифицирован
};

// Начальное состояние хранилища
const defaultState: authState = {
  currentUser: undefined, // По умолчанию текущий пользователь не задан
};

// Экспортируем хранилище authStore
export const authStore = defineStore({
  id: 'auth', // Идентификатор хранилища
  state: () => defaultState, // Начальное состояние хранилища
  getters: {
    // Геттер для проверки, аутентифицирован ли пользователь
    isAuthenticated: (state) => state.currentUser !== undefined,
    // Геттер для получения токена пользователя
    jwtToken: (state) => state.currentUser?.token, // Используем опциональную цепочку
  },
  actions: {
    // Действие для входа пользователя
    signIn(user: User) {
      this.currentUser = user; // Устанавливаем текущего пользователя
    },
    // Действие для выхода пользователя
    signOut() {
      this.currentUser = undefined; // Сбрасываем текущего пользователя
    },
  },
  persist: true, // Флаг для сохранения состояния хранилища между перезагрузками страницы
});
