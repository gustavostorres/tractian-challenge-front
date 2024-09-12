import * as S from './styles';

interface ImageComponentProps {
    src?: string;
    alt?: string;
}

export function ImageComponent({ src, alt }: ImageComponentProps) {
    return (
        <S.ImageContainer>
            <S.StyledImage src={src} alt={alt} />
        </S.ImageContainer>
    );
}