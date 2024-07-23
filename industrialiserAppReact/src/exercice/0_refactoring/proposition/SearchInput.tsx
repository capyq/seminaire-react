import { useState } from 'react';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search"/>
    </div>
  );
};

export default SearchInput;