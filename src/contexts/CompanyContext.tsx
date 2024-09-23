import { createContext, useState, useEffect, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { getCompanies, getCompanyAssets, getCompanyLocations } from '../services/queries/Company';
import { Company } from '../types/Company';
import { Asset } from '../types/Assets';
import { Location } from '../types/Locations';

interface CompanyState {
    name: string;
    id: string;
}

interface CompanyContextProps {
    company: CompanyState;
    setCompany: (company: CompanyState) => void;
    companies: Company[] | undefined;
    isLoading: boolean;
    error: any;
    assets: Asset[] | undefined;
    locations: Location[] | undefined;
    selectedNode: Asset | Location | null;
    setSelectedNode: (node: Asset | Location | null) => void;
}

export const CompanyContext = createContext<CompanyContextProps>({
    company: { name: '', id: '' },
    setCompany: () => {},
    companies: [],
    isLoading: false,
    error: null,
    assets: [],
    locations: [],
    selectedNode: null,
    setSelectedNode: () => {},
});

export const CompanyProvider = ({ children }: { children: ReactNode }) => {
    const [company, setCompany] = useState<CompanyState>({ name: '', id: '' });
    const [selectedNode, setSelectedNode] = useState<Asset | Location | null>(null);

    const storedCompanies = localStorage.getItem('companies');
    const { data: companies, isLoading, error } = useQuery<Company[]>(
        ['company'],
        () => {
            if (storedCompanies) {
                return JSON.parse(storedCompanies) as Company[];
            }
            return getCompanies().then(data => {
                localStorage.setItem('companies', JSON.stringify(data));
                return data;
            });
        }
    );

    const { data: locations } = useQuery<Location[]>(
        ['locations', company.id],
        () => {
            const storedLocations = localStorage.getItem(`locations_${company.id}`);
            if (storedLocations) {
                return JSON.parse(storedLocations) as Location[];
            }
            return getCompanyLocations(company.id).then(data => {
                localStorage.setItem(`locations_${company.id}`, JSON.stringify(data));
                return data;
            });
        },
        { enabled: !!company.id }
    );

    const { data: assets } = useQuery<Asset[]>(
        ['assets', company.id],
        () => {
            const storedAssets = localStorage.getItem(`assets_${company.id}`);
            if (storedAssets) {
                return JSON.parse(storedAssets) as Asset[];
            }
            return getCompanyAssets(company.id).then(data => {
                localStorage.setItem(`assets_${company.id}`, JSON.stringify(data));
                return data;
            });
        },
        { enabled: !!company.id }
    );

    useEffect(() => {
        const savedCompany = localStorage.getItem('selectedCompany');
        if (savedCompany && !company.name) {
            setCompany(JSON.parse(savedCompany));
        } else if (companies && !company.name) {
            setCompany({ name: companies[0].name, id: companies[0].id });
        }
    }, [companies, company.name]);

    // Save selected company in localStorage
    useEffect(() => {
        if (company.name) {
            localStorage.setItem('selectedCompany', JSON.stringify(company));
        }
    }, [company]);

    return (
        <CompanyContext.Provider
            value={{
                company,
                setCompany,
                companies,
                isLoading,
                error,
                assets,
                locations,
                selectedNode,
                setSelectedNode,
            }}
        >
            {children}
        </CompanyContext.Provider>
    );
};
