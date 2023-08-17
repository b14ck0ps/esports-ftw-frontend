import React, { useState } from 'react';

interface SortProps {
    handleSortChange: (selectedSort: string) => void;
}

export default function Sort({ handleSortChange }: SortProps) {
    const [selectedSort, setSelectedSort] = useState<string>('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedSort(selectedValue);
        handleSortChange(selectedValue);
    };

    return (
        <select
            className="select select-ghost w-full max-w-xs focus:outline-none"
            value={selectedSort}
            onChange={handleSelectChange}
        >
            <option disabled value="">Sort By</option>
            <option value="default">Default</option>
            <option value="mostWins">Most Wins</option>
            <option value="mostSalary">Most Salary</option>
        </select>
    );
}
