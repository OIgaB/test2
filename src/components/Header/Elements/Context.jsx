import React, { createContext, useContext, useState } from 'react';

const HubContext = createContext();
export const useHubContext = () => useContext( HubContext );

export const Context = ( { children } ) => {
  const [ showModalLogin, setShowModalLogin ] = useState( false );
  const [ isHeroFilterShown, setIsHeroFilterShown ] = useState( false );
  let storedCountry = 'Україна';
  try {
    storedCountry = JSON.parse( localStorage.getItem( 'selectedCountry' ) ) || 'Україна';
  } catch ( error ) {
    console.log( error.message );
  }

  const [ selectedCountry, setSelectedCountry ] = useState( storedCountry );

  return (
    <HubContext.Provider
      value={ {
        showModalLogin,
        setShowModalLogin, 
        isHeroFilterShown, 
        setIsHeroFilterShown, 
        selectedCountry,
        setSelectedCountry,
      } }
    >
      {children}
    </HubContext.Provider>
  );
};
