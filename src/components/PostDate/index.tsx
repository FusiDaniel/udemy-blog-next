import { formatDate } from 'src/utils/format-date';
import { Container } from './styled';

export type PostDateProps = {
  date: string;
};

export const PostDate = ({ date }: PostDateProps) => {
  return <Container>{formatDate(date)}</Container>;
};
