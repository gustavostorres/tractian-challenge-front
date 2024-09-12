import * as S from './styles';
import { ImageComponent } from '../../components/Image';
import { TbCircleLetterMFilled } from "react-icons/tb";
import { MdOutlineSensors } from "react-icons/md";
import { LuRadioReceiver } from "react-icons/lu";
import motorImage from '../../assets/image 223 1 2.png';
import { useContext } from 'react';
import { NodeContext } from '../../contexts/NodeContext';
import { Asset } from '../../types/Assets';

export function Assets() {
    const nodeContext = useContext(NodeContext);

    return (
        <>
        {nodeContext.selectedNode !== null ? (
            <S.Container>
                <S.Title>{nodeContext.selectedNode?.name}</S.Title>
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
                        {nodeContext.selectedNode && 'sensorId' in nodeContext.selectedNode
                            ? ` ${(nodeContext.selectedNode as Asset).sensorId}`
                            : `sem sensor`}
                        </S.Text2>
                        <S.Text2>
                        <LuRadioReceiver />
                        {nodeContext.selectedNode && 'gatewayId' in nodeContext.selectedNode
                            ? ` ${(nodeContext.selectedNode as Asset).gatewayId}`
                            : `sem receptor`}
                        </S.Text2>
                    </S.TextRow2>
                    </S.TextContainer>
                </S.ContentWrapper>
            </S.Container>
        ) : (
            <S.Container>
                <S.ContentWrapper>
                    <ImageComponent />

                    <S.TextContainer>
                        <S.TextRow>
                            <S.Text>Tipo Equipamento</S.Text>
                            <S.Text2>sem equipamento</S.Text2>
                        </S.TextRow>

                        <S.Separator />

                        <S.TextRow>
                            <S.Text>Responsáveis</S.Text>
                            <S.Text2>
                                sem responsáveis
                            </S.Text2>
                        </S.TextRow>
                    </S.TextContainer>

                    <S.TextContainer>
                        <S.TextRow2>
                            <S.Text>Sensor</S.Text>
                            <S.Text>Receptor</S.Text>
                        </S.TextRow2>

                        <S.Separator />
                        
                        <S.TextRow2>
                            <S.Text2>
                                <MdOutlineSensors />
                                {nodeContext.selectedNode && 'sensorId' in nodeContext.selectedNode 
                                    ? ` ${(nodeContext.selectedNode as Asset).sensorId}`
                                    : `  ${'sem sensor'}`}
                            </S.Text2>
                            <S.Text2>
                                <LuRadioReceiver />
                                {nodeContext.selectedNode && 'gatewayId' in nodeContext.selectedNode 
                                    ? ` ${(nodeContext.selectedNode as Asset).gatewayId}`
                                    : `  ${'sem receptor'}`}
                            </S.Text2>
                        </S.TextRow2>
                    </S.TextContainer>
                </S.ContentWrapper>
            </S.Container>
        )}
        </>
    );
}
