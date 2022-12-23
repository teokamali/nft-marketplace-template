import { StyledHeader, StyledHeaderLogoVMenu, StyledHeaderOprator } from "./homeStyles";
import logo2 from '../../assets/logo2.png';
import Image from "next/image";
import Header from "src/components/Header/Header";

export default function Home() {
    return (
        // <StyledHeader>
        //     <StyledHeaderLogoVMenu>
        //         <svg className="h-8 w-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        //             <line x1="3" y1="12" x2="21" y2="12" />
        //             <line x1="3" y1="6" x2="21" y2="6" />
        //             <line x1="3" y1="18" x2="21" y2="18" />
        //         </svg>
        //         <Image src={logo2} alt="logo" width="82" height="25" />
        //     </StyledHeaderLogoVMenu>
        //     <StyledHeaderOprator>
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" className="h-8 w-8 text-gray-900">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        //         </svg>
        //         <svg className="h-8 w-8 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round">
        //             <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        //             <line x1="12" y1="8" x2="12" y2="16" />
        //             <line x1="8" y1="12" x2="16" y2="12" />
        //         </svg>
        //         <svg className="h-8 w-8 text-gray-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        //             <path stroke="none" d="M0 0h24v24H0z" />
        //             <circle cx="10" cy="10" r="7" />
        //             <line x1="21" y1="21" x2="15" y2="15" />
        //         </svg>
        //         <svg className="h-8 w-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        //         </svg>
        //     </StyledHeaderOprator>
        // </StyledHeader>
        <Header />
    );
}
