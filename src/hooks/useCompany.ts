import { useContext } from "react";
import { CompanyContext } from "../contexts/CompanyContext";

export const useCompany = () => {
    const context = useContext(CompanyContext);
    
    return context;
};