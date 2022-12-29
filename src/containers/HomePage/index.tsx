import Head from 'next/head';
import { PostData } from '@domain/posts/post';
import { Header } from '@components/Header';
import { Container } from './styled';
import { MainContainer } from '@components/MainContainer';
import { PostCard } from '@components/PostCard';
import { Footer } from '@components/Footer';
import { SITE_NAME } from '@config/app-config';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name="description"
          content="Meu blog feito em Next, com Strapi"
        ></meta>
      </Head>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.attributes.slug}
              cover={post.attributes.cover.data.attributes.formats.small.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
