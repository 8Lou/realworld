// Импортируем типы компонентов из сгенерированного файла openapi.gen
import { components } from '~/openapi.gen'

// Определяем пользовательские типы на основе схем OpenAPI

// Тип пользователя (User) на основе схемы User из OpenAPI
export type User = components['schemas']['User'];
// Тип статьи (Article) на основе схемы Article из OpenAPI
export type Article = components['schemas']['Article'];
// Тип комментария к статье (ArticleComment) на основе схемы Comment из OpenAPI
export type ArticleComment = components['schemas']['Comment'];
// Тип данных для задачи
export type Todo = components['schemas']['Todo'];
// Тип данных для комментария к задаче
export type TodoComment = components['schemas']['Comment'];
