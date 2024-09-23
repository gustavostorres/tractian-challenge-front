import * as S from './styles';
import { ImageComponent } from '../../components/Image';
import { TbCircleLetterMFilled } from "react-icons/tb";
import { MdOutlineSensors } from "react-icons/md";
import { LuRadioReceiver } from "react-icons/lu";
import motorImage from '../../assets/image 223 1 2.png';
import { Asset } from '../../types/Assets';
import { useCompany } from '../../hooks/useCompany';

export function Assets() {
    const { selectedNode } = useCompany();

    return (
        <>
        {selectedNode !== null ? (
            <S.Container>
                <S.Title>{selectedNode?.name}</S.Title>
                <S.ContentWrapper>
                    <ImageComponent src={motorImage} alt='testando' />

                    <S.TextContainer>
                        <S.TextRow>
                            <S.Text>Tipo Equipamento</S.Text>
                            <S.Text2>Equipamento 1</S.Text2>
                        </S.TextRow>

                        <S.Separator />

                        <S.TextRow>
                            <S.Text>Responsáveis</S.Text>
                            <S.Text2>
                                <TbCircleLetterMFilled /> Mecânica
                            </S.Text2>
                        </S.TextRow>
                    </S.TextContainer>

                    <S.Separator />

                    <S.TextContainer>
                    <S.TextRow2>
                        <S.Text>Sensor</S.Text>
                        <S.Text>Receptor</S.Text>
                    </S.TextRow2>

                    <S.TextRow2>
                        <S.Text2>
                        <MdOutlineSensors />
                        {selectedNode && 'sensorId' in selectedNode
                            ? ` ${(selectedNode as Asset).sensorId}`
                            : `sem sensor`}
                        </S.Text2>
                        <S.Text2>
                        <LuRadioReceiver />
                        {selectedNode && 'gatewayId' in selectedNode
                            ? ` ${(selectedNode as Asset).gatewayId}`
                            : `sem receptor`}
                        </S.Text2>
                    </S.TextRow2>
                    </S.TextContainer>
                </S.ContentWrapper>
            </S.Container>
        ) : (
            <S.Container />
        )}
        </>
    );
}
