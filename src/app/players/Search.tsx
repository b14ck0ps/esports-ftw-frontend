import React from 'react'

interface SearchProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ setSearchTerm }: SearchProps) {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='w-full py-10 flex gap-2'>
            <input
                type="text"
                placeholder="Search by player name...."
                className="input input-bordered input-sm w-full rounded-md focus:outline-none"
                onChange={handleSearchChange}
            />
        </div>
    );
}