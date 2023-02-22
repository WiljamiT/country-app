// import React, { createContext, useState } from 'react'
// import { useFetch } from '../hooks/useFetch';

// export const CountryContext = createContext()

// const GlobalState = ({ children }) => {
//     const [countries, setCountries] = useState([])

//     const { loading, data, error } = useFetch(
//         "https://restcountries.com/v3.1/all"
//     );

//     setCountries(data);
    
//     if(loading) return <h1>loading...</h1>;
//     if (error)
//         return <pre>{JSON.stringify(error, null, 2)}</pre>

//     return (
//       <CountryContext.Provider value={[countries, setCountries]}>
//         {children}
//       </CountryContext.Provider>
//     )
// }

// export default GlobalState