import * as S from './styles';
import logoImg from '../../assets/LOGO_TRACTIAN.svg';
import { useQuery } from 'react-query';
import { getCompanies } from '../../services/queries/Company';
import { Company } from '../../types/Company';
import { useCompany } from '../../contexts/CompanyContext';
import { useEffect } from 'react';

export function Header() {
    const { company, setCompany } = useCompany();

    const fetchCompanies = useQuery<Company[]>(
        ['company'],
        () => getCompanies(),
    );

    useEffect(() => {
        if (fetchCompanies.data && !company.name) {
            setCompany({ name: fetchCompanies.data[0].name, id: fetchCompanies.data[0].id });
        }
    }, [fetchCompanies.data, company.name, setCompany]);

    if (fetchCompanies.isLoading) {
        return <div>Loading...</div>;
    }

    if (fetchCompanies.error) {
        return <div>Error loading companies</div>;
    }

    const highlightedCompany = company.name || (fetchCompanies.data && fetchCompanies.data[0].name);

    return (
        <S.HeaderContainer>
            <S.Logo src={logoImg} alt="TRACTIAN Logo" />

            <S.TextContainer>
                {fetchCompanies.data?.map((company: Company) => (
                    <S.BorderText 
                        key={company.id}
                        isHighlighted={company.name === highlightedCompany}
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
