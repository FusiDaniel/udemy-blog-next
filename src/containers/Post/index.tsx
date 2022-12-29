import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import Heading from '@components/Heading';
import { MainContainer } from '@components/MainContainer';
import { PostContainer } from '@components/PostContainer';
import { PostCover } from '@components/PostCover';
import { PostDetails } from '@components/PostDetails';
import { SITE_NAME } from '@config/app-config';
import { PostData } from '@domain/posts/post';
import Head from 'next/head';
import { Comments } from 'src/comments';
import { removeHTML } from 'src/utils/remove-html';

export type PostProps = {
  post: PostData;
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHTML(post.attributes.content).slice(0, 150)}
        ></meta>
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.medium.url}
          alt={post.attributes.title}
        />
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          date={post.attributes.createdAt}
          category={post.attributes.category.data.attributes.name}
        />
        <PostContainer content={post.attributes.content} />
        <Comments slug={post.attributes.slug} title={post.attributes.title} />
      </MainContainer>
      <Footer />
    </>
  );
}
