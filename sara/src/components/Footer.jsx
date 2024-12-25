import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import '../styles/MQ.css';
import '../styles/footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <section className='footers py-20 bg-center bg-[url("/footerbg.jpg")] bg-cover bg-mainpurple bg-blend-overlay'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="py-3 col-lg-4">
                        <h2 className="text-3xl font-bold mb-4 text-mainblue d-flex justify-center">
                            <img src="/eibmlogo.png" alt="" />
                        </h2>
                        <p className='text-md'>Connecting the world through trade. Your trusted partner in global import-export solutions. Discover endless possibilities with us.</p>
                        <ul className='flex m-0 p-0 pt-lg-4'>
                            <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3' ><a href=""><FaTwitter className='text-white mx-auto align-middle leading-5' style={{cursor : "pointer",}}></FaTwitter></a></li>
                            <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3' ><a href="https://www.linkedin.com/company/eveginternational/" target='_blank'></a><FaLinkedinIn className='text-white mx-auto align-middle leading-5' style={{cursor:"pointer"}}></FaLinkedinIn></li>
                            <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3' ><a href=""><FaInstagram className='text-white mx-auto align-middle leading-5' style={{cursor:"pointer"}}></FaInstagram></a></li>
                            <li className='bg-mainblue rounded-full h-10 w-10 pt-[11px] me-3' ><a href=""><FaFacebookF className='text-white mx-auto align-middle leading-5' style={{cursor:"pointer"}}></FaFacebookF></a></li>

                        </ul>
                    </div>
                    <div className="py-3 col-lg-3 mx-lg-auto">
                        <div className='mx-auto col-lg-5 col-xl-5'>
                        <h2 className="text-3xl font-bold mb-lg-4 text-mainblue w-75 mt-4 mt-lg-0">Links </h2>
                        <ul className='w-lg-75 items-center m-0 p-0 flex flex-wrap d-lg-block mx-lg-auto mt-3 mt-lg-0'>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><Link style={{textDecoration:"none"}} className='text-dark text-md' to={'/'}>Home</Link></li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><Link style={{textDecoration:"none"}} className='text-dark text-md' to={'/studentcorner'}>Student Corner</Link></li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><Link style={{textDecoration:"none"}} className='text-dark text-md' to={'/courses'}>Courses</Link></li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><Link style={{textDecoration:"none"}} className='text-dark text-md' to={'/companies'}>Our Companies</Link></li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><Link style={{textDecoration:"none"}} className='text-dark text-md' to={'/success'}>Success Story</Link></li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><Link style={{textDecoration:"none"}} className='text-dark text-md' to={'/team'}>Our Team</Link></li>
                            <li className='text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><Link style={{textDecoration:"none"}} className='text-dark text-md' to={'/contact'}>Support Team</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="py-3 col-lg-4">
                        <div className="col-lg-9 col-xl-9">
                        <h2 className="text-3xl font-bold mb-3 mb-xl-4 text-mainblue mt-4 mt-lg-0">Contact Us </h2>
                        <ul className='w-lg-75 items-center m-0 p-0 flex flex-wrap d-lg-block mx-lg-auto mt-3 mt-lg-0'>
                            <li className='flex items-center text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><span className='pe-3 text-lg text-mainblue'><FaLocationDot/></span>4007,08,18 The Palladium Mall, near Vijaynagar, Yogichowk, Surat, Gujarat 395010</li>
                            <li className='flex items-center text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><span className='pe-3 text-lg text-mainblue'><IoIosMailOpen/></span><Link style={{textDecoration:"none"}} className='text-dark text-md'>
                            EIBM@evegimpex.com</Link></li>
                            <li className='flex items-center text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><span className='pe-3 text-lg text-mainblue'><LuPhoneCall/></span><Link style={{textDecoration:"none"}} className='text-dark text-md'>(+91) 97269 08417</Link></li>
                            <li className='flex items-center text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><span className='pe-3 text-lg text-mainblue'><LuPhoneCall/></span><Link style={{textDecoration:"none"}} className='text-dark text-md'>(+91) 97269 08478</Link></li>
                            <li className='flex items-center text-sm me-3 me-lg-0 mb-lg-2 xs:py-3 sm:py-3 md:py-3 lg:py-0 xl:py-1' style={{cursor : "pointer",}}><span className='pe-3 text-lg text-mainblue'><FaGlobe/></span><Link style={{textDecoration:"none"}} className='text-dark text-md' to={'/success'}>https://eibm.in/</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer

