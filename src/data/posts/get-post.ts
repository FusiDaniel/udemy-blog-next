import { PostData, PostJson } from '@domain/posts/post';
import { POSTS_URL } from 'src/config/app-config';
import { fetchJson } from 'src/utils/fetch-json';
import { markdownToHtml } from 'src/utils/markdown-to-hmtl';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?populate=%2A&filters[slug][$eq]=${slugString}`;
  const jsonPosts = await fetchJson<PostJson>(url);
  const content = await markdownToHtml(jsonPosts.data[0].attributes.content);
  const finalContent = {
    ...jsonPosts.data[0],
    attributes: { ...jsonPosts.data[0].attributes, content },
  };
  return [finalContent];
};
