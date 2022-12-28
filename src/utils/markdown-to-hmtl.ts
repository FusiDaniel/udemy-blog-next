import { unified } from 'unified';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse';

export const markdownToHtml = async (content: string): Promise<string> => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  return result.toString();
};
