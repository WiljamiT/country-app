// import React, { createContext, useState } from "react";

// import { useFetch } from "../hooks/useFetch";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TablePagination
// } from "@mui/material";
// import "./styles/Countries.css";
// import './styles/HomePage.css';

// const CountriesContext = createContext();

// export function HomePage() {
//   const { loading, data, error } = useFetch(
//     "https://restcountries.com/v3.1/all"
//   );
//   const [page, setPage] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(5);
//   const handleChangePage = (event, value) => {
//     setPage(value);
//   };
//   const handleChangeItemsPerPage = (event) => {
//     setItemsPerPage(parseInt(event.target.value));
//     setPage(0);
//   };
//   if(loading) return <h1>loading...</h1>;
//   if (error)
//     return <pre>{JSON.stringify(error, null, 2)}</pre>
//     // const normalData = data.sort((a, b) => {
//     //   const nameA = !a.altSpellings[1] ? a.altSpellings[0] : a.altSpellings[1];
//     //    const nameB = !b.altSpellings[1] ? b.altSpellings[0] : b.altSpellings[1];
//     //    return nameA.localeCompare(nameB);
//     // })
//   return (
//     <CountriesContext.Provider value={data}>
//     <div>
//       <nav>
//         <button>- - -</button>
//         <h3>Country</h3>
//         <input type="text" placeholder="Search" />
//     </nav>
//       {!data ? (
//         <div>
//     <p>NO DATA</p>
//     </div>
//   ) : (
//     <div>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Flag</TableCell>
//               <TableCell>Name <button onClick={()=>{}}>sort</button></TableCell>
//               <TableCell>Region</TableCell>
//               <TableCell>Population</TableCell>
//               <TableCell>Language</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data
//               .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
//               .map((item, i) => (
//                 <TableRow key={i}>
//                   <TableCell>
//                     {
//                       <img
//                         src={item.flags.png}
//                         alt="flagOfCountry"
//                         style={{
//                           width: "150px",
//                           height: "100px",
//                           border: "1px solid black",
//                           objectFit: "cover",
//                         }}
//                       />
//                     }
//                   </TableCell>
//                   <TableCell>
//                     {!item.altSpellings[1]
//                       ? item.altSpellings[0]
//                       : item.altSpellings[1]}
//                   </TableCell>
//                   <TableCell>{item.continents}</TableCell>
//                   <TableCell>{item.population}</TableCell>
//                   <TableCell>
//                     {item.languages &&
//                       typeof item.languages === "object" &&
//                       Object.keys(item.languages).map((key) => (
//                         <li key={key}>{item.languages[key]}</li>
//                       ))}
//                   </TableCell>
//                   <TableCell>
//                     <button>asd</button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//             component="div"
//             count={data.length}
//             page={page}
//             onPageChange={handleChangePage}
//             rowsPerPage={itemsPerPage}
//             rowsPerPageOptions={[5, 10, 25, { value: -1, label: 'All' }]}
//             onRowsPerPageChange={handleChangeItemsPerPage}
//         />
        
//       </TableContainer>
      
//     </div>
//   )}
//     </div>
//     </CountriesContext.Provider>
//   );
// }
