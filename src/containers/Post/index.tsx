import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import Heading from '@components/Heading';
import { MainContainer } from '@components/MainContainer';
import { PostContainer } from '@components/PostContainer';
import { PostCover } from '@components/PostCover';
import { PostDetails } from '@components/PostDetails';
import { PostData } from '@domain/posts/post';
import { Comments } from 'src/comments';

export type PostProps = {
  post: PostData;
};

export default function Post({ post }: PostProps) {
  return (
    <>
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
