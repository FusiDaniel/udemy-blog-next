import { PostData } from '@domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Post from 'src/containers/Post';
import { countAllPosts } from 'src/data/posts/count-all-posts';
import { getAllPosts } from 'src/data/posts/get-all-posts';
import { getPost } from 'src/data/posts/get-post';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOsPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[limit]=${numberOsPosts}`);

  return {
    paths: posts.map((posts) => ({ params: { slug: posts.attributes.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const posts = await getPost(slug);
  return {
    props: { post: posts[0] },
    // revalidate: 5,
  };
};

export default DynamicPost;
