// Импорт путей API из файла openapi.gen
import { paths } from '~/openapi.gen'

// Тип ответа на запрос получения тегов
export type GetTagsResponse =
  paths['/tags']['get']['responses']['200']['content']['application/json'];
