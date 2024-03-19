// Импорт константы API_BASE_URL из файла constants
import { API_BASE_URL } from '~/constants'
// Импорт путей API из файла openapi.gen
import { paths } from '~/openapi.gen'

 
// Типы ответов на запросы к API для получения статей и комментариев
export type GetArticlesResponse =
  paths['/articles']['get']['responses']['200']['content']['application/json'];
export type GetArticleResponse =
  paths['/articles/{slug}']['get']['responses']['200']['content']['application/json'];
export type GetArticleCommentsResponse =
  paths['/articles/{slug}/comments']['get']['responses']['200']['content']['application/json'];

// Типы запросов для создания статьи и комментария к статье
type CreateArticlesRequest =
  paths['/articles']['post']['requestBody']['content']['application/json'];
export type CreateArticlesResponse =
  paths['/articles']['post']['responses']['201']['content']['application/json'];
export type CreateArticleCommentRequest =
  paths['/articles/{slug}/comments']['post']['requestBody']['content']['application/json'];
export type CreateArticleCommentResponse =
  paths['/articles/{slug}/comments']['post']['responses']['200']['content']['application/json'];

// Функция для создания новой статьи
export const createArticle = (
  token: string,
  dto: CreateArticlesRequest['article']
) => {
  return $fetch<CreateArticlesResponse>(`${API_BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${encodeURIComponent(token)}`,
    },
    body: { article: dto },
  });
};

// Функция для создания комментария к статье
export const createArticleComment = (
  token: string,
  articleSlug: string,
  comment: string
) => {
  return $fetch<CreateArticleCommentResponse>(
    `${API_BASE_URL}/articles/${articleSlug}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
      body: { comment: { body: comment } },
    }
  );
};

// Функции для добавления статьи в избранного
export type AddArticleToFavoritesRequest =
  paths['/articles/{slug}/favorite']['post']['responses']['200']['content']['application/json'];
export const addArticleToFavorites = (token: string, articleSlug: string) => {
  return $fetch<AddArticleToFavoritesRequest>(
    `${API_BASE_URL}/articles/${articleSlug}/favorite`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
    }
  );
};

// Функции для удаления статьи из избранного
export type RemoveArticleFromFavoritesRequest =
  paths['/articles/{slug}/favorite']['delete']['responses']['200']['content']['application/json'];
export const removeArticleFromFavorites = (
  token: string,
  articleSlug: string
) => {
  return $fetch<RemoveArticleFromFavoritesRequest>(
    `${API_BASE_URL}/articles/${articleSlug}/favorite`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${encodeURIComponent(token)}`,
      },
    }
  );
};
