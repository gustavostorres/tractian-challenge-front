import { createContext, useContext, useState, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { getCompanies } from '../services/queries/Company';

interface CompanyState {
    name: string;
    id: string;
}

const initialCompanyState: CompanyState = {
    name: '',
    id: ''
};

interface CompanyContextProps {
    company: CompanyState;
    setCompany: (company: CompanyState) => void;
}

export const CompanyContext = createContext<CompanyContextProps | undefined>(undefined);

export const useCompany = () => {
    const context = useContext(CompanyContext);
    if (!context) {
        throw new Error('useCompany must be used within a CompanyProvider');
    }
    return context;
};

export const CompanyProvider = ({ children }: { children: ReactNode }) => {
    const [company, setCompany] = useState<CompanyState>(initialCompanyState);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fetchContext = useQuery(['companyContext'], getCompanies, {
        onSuccess: (data) => {
            if (data) {
                setCompany({ name: data.name, id: data.id });
            }
        }
    });

    return (
        <CompanyContext.Provider value={{ company, setCompany }}>
            {children}
        </CompanyContext.Provider>
    );
};
