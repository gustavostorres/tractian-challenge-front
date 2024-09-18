import { createContext, useContext, useState, ReactNode } from 'react';

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

    return (
        <CompanyContext.Provider value={{ company, setCompany }}>
            {children}
        </CompanyContext.Provider>
    );
};
