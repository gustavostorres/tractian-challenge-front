import { useContext } from 'react';
import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { Assets } from './Assets';
import * as S from './styles';
import { CompanyContext } from '../contexts/CompanyContext';
import { NodeContext } from '../contexts/NodeContext';
import { Asset } from '../types/Assets';

export function HomeApp() {
    const companyContext = useContext(CompanyContext);
    const nodeContext = useContext(NodeContext)

    const status = nodeContext.selectedNode && 'status' in nodeContext.selectedNode
    ? (nodeContext.selectedNode as Asset).status : null;
    
  return (
    <>
        <Header />
        <S.Container>
            <S.Row>
                <div>
                <S.BoldText>Ativos</S.BoldText> / <S.SecundaryText>{companyContext?.company.name} Unit</S.SecundaryText>
                </div>

                <div>
                    <S.BorderedText1 status={status}>
                        <S.EnergyIcon status={status} /> Sensor de Energia
                    </S.BorderedText1>
                    
                    <S.BorderedText2 status={status}>
                        <S.CriticalIcon status={status} /> Crítico
                    </S.BorderedText2>
                </div>

            </S.Row>
            <S.ContentWrapper>
                <SideBar />
                <Assets />
            </S.ContentWrapper>
        </S.Container>
    </>
    
  );
}
