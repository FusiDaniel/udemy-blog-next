import { PostData, PostJson } from '@domain/posts/post';
import { POSTS_URL } from 'src/config/app-config';
import { fetchJson } from 'src/utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?populate=%2A&${query}`;
  const jsonPosts = await fetchJson<PostJson>(url);
  return jsonPosts.data;
};
