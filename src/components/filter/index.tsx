// Filter.tsx
import { useState, useEffect } from 'react';
import * as S from './styles';
import { Asset } from '../../types/Assets';
import { Location } from '../../types/Locations';

interface FilterProps {
    data: (Location | Asset)[];
    onSearch: (searchTerm: string) => void;
    searchTerm: string; // Recebe o searchTerm como prop
}

export function Filter({ data, onSearch, searchTerm }: FilterProps) {
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

    useEffect(() => {
        setLocalSearchTerm(searchTerm); // Atualiza o campo de busca quando searchTerm muda
    }, [searchTerm]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        onSearch(localSearchTerm);
    };

    return (
        <S.SearchWrapper>
            <S.SearchInput
                type="text"
                placeholder="Buscar Ativo ou Local"
                value={localSearchTerm}
                onChange={handleChange}
            />
            <S.SearchButton onClick={handleSearch}>
                <S.SearchIcon />
            </S.SearchButton>
        </S.SearchWrapper>
    );
}
