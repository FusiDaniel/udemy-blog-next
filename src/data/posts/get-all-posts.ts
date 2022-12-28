import { PostData, PostJson } from '@domain/posts/post';
import { POSTS_URL } from 'src/config/app-config';
import { fetchJson } from 'src/utils/fetch-json';

const getPosts = async (): Promise<PostData[]> => {
  const jsonPosts = await fetchJson<PostJson>(POSTS_URL);
  return jsonPosts.data;
};

export default getPosts;
