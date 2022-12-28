import { PostDate } from '@components/PostDate';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <PostDate date={date} /> por {author} na categoria {category}
    </Container>
  );
};
