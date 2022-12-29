import { Container, PostCardCover, PostCardHeading } from './styled';
import Link from 'next/link';
import Image from 'next/image';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: string;
};

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
  return (
    <Container>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          {/* <img src={cover} alt={title}></img> */}
          <div className="next-image-wrapper">
            <Image src={cover} alt={title} fill={true} />
          </div>
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
};
