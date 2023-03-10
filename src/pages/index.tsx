import { PostData } from '@domain/posts/post';
import { GetStaticProps } from 'next';
import HomePage from 'src/containers/HomePage';
import { getAllPosts } from 'src/data/posts/get-all-posts';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    'sort[0]=createdAt:ASC&pagination[start]=0&pagination[limit]=10'
  );
  return {
    props: { posts },
    // revalidate: 5,
  };
};
