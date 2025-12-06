// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function MainLayout() {
//     return (
//         <>
//             <Navbar />
//             <Outlet/>
//             <Footer />
//         </>
//     )
// }

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { pathname } = useLocation();

  
  const hideFooter = pathname.includes("/book-seat");

  return (
    <>
      <Navbar />
      <Outlet />

      {!hideFooter && <Footer />}  
    </>
  );
}