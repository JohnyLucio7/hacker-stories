import * as React from 'react';
import { InputWithLabel } from './InputWithLabel.tsx';

type SearchFormProps = {
    searchTerm: string;
    onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm = ({
    searchTerm,
    onSearchInput,
    onSearchSubmit,
}: SearchFormProps) => (
    <form onSubmit={onSearchSubmit} className='searchForm'>
        <InputWithLabel
            id="search"
            value={searchTerm}
            isFocused
            onInputChange={onSearchInput}
        >
            <strong>Search:</strong>
        </InputWithLabel>

        <button
            type="submit"
            disabled={!searchTerm}
            className='button buttonLarge'
        >
            Submit
        </button>
    </form>
);

export { SearchForm };