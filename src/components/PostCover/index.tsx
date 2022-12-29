import { ImageContainer } from './styled';
import Image from 'next/image';
// import { buildImageUrl } from 'cloudinary-build-url';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <ImageContainer>
      <img src={coverUrl} alt={alt} object-fit="fill" />
      {/* <Image priority src={coverUrl} alt={alt} fill={true} /> */}
    </ImageContainer>
  );
};
