import { PostJson } from '@domain/posts/post';
import { POSTS_URL } from 'src/config/app-config';
import { fetchJson } from 'src/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<number> => {
  const url = `${POSTS_URL}?pagination[limit]=1${query}`;
  const jsonPosts = await fetchJson<PostJson>(url);
  return jsonPosts.meta.pagination.total;
};
