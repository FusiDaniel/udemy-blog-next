import { SITE_URL } from '@config/app-config';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  const disqusShortname = 'blog-next-6';
  const disqusConfig = {
    url: `${SITE_URL}/post/${slug}`,
    identifier: slug,
    title: title,
    language: 'pt_BR',
  };

  return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};
