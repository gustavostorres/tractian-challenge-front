import * as S from './styles';
import logoImg from '../../assets/LOGO_TRACTIAN.svg';
import { useCompany } from '../../hooks/useCompany';

export function Header() {
    const { company, setCompany, companies, isLoading, error } = useCompany();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading companies</div>;
    }

    const highlightedCompany = company.name || (companies && companies[0].name);

    return (
        <S.HeaderContainer>
            <S.Logo src={logoImg} alt="TRACTIAN Logo" />

            <S.TextContainer>
                {companies?.map((company) => (
                    <S.BorderText 
                        key={company.id}
                        isSelected={company.name === highlightedCompany}
                        onClick={() => setCompany({ name: company.name, id: company.id })}
                    >
                        <S.Icon />
                        {company.name} {'Unit'}
                    </S.BorderText>
                ))}
            </S.TextContainer>
        </S.HeaderContainer>
    );
}