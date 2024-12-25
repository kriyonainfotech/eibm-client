import React, { useState } from "react";
import "../styles/Team.css";
import "../styles/Utility.css";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Copyright from "../components/Copyright";
import TopBtn from "../components/Topbtn";
import HashLoader from "react-spinners/HashLoader";
import "../styles/MQ.css";
import Whatsapp from "../components/Whatsapp";
import { useEffect } from "react";
const Team = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  const [teamMembers] = useState([
    {
      name: "Satish Hirpara",
      role: "Founder (Eveg Group)",
      image: "/ceo.jpg",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Jitesh Hirpara",
      role: "Co-founder (Eveg Group)",
      image: "/jitubhai.jpg",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Darshit Hirpara",
      role: "CFO (Eveg Group)",
      image: "/darshitbhai.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Yagnik Buha",
      role: "Company Secretary (Eveg Group)",
      image: "/yagnik.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Prashant Zalavadiya",
      role: "Team Admin (Eveg Group)",
      image: "/prashant.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Prince Savaliya",
      role: "EIBM Head (EIBM & Eveg Group)",
      image: "/prince.jpg",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Dr.Vijay Gondliya",
      role: "(Company Advisor)",
      image: "/Dr. Vijay Gondaliya.jpg",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Drashti Hirpara",
      role: "EIBM Head (EIBM)",
      image: "/drashti.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Jalpa Borad",
      role: "Co-founder (Saara Lifestyle)",
      image: "/jalpa.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    // {
    //   name: "Priyanka Patel",
    //   role: "Company Secretary",
    //   image: "/priyanka-patel.png",
    //   socialLinks: [
    //     {
    //       icon: <FaFacebookF />,
    //       href: "",
    //     },
    //     {
    //       icon: <FaInstagram />,
    //       href: "https://www.instagram.com/eveg_group/",
    //     },
    //     {
    //       icon: <FaTwitter />,
    //       href: "#",
    //     },
    //   ],
    // },
    // {
    //   name: "JSrushti Patel",
    //   role: "Admin Team",
    //   image: "/srushti-patel.png",
    //   socialLinks: [
    //     {
    //       icon: <FaFacebookF />,
    //       href: "",
    //     },
    //     {
    //       icon: <FaInstagram />,
    //       href: "https://www.instagram.com/eveg_group/",
    //     },
    //     {
    //       icon: <FaTwitter />,
    //       href: "#",
    //     },
    //   ],
    // },
    {
      name: "Ritaben Bagadiya",
      role: "Administration",
      image: "/ritaben-bagadiya.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Keval Bhalala",
      role: "Administration",
      image: "/keval-bhalala.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Shreyansh Gevariya",
      role: "Team Management (Eveg Group)",
      image: "/shreyansh-gevariya.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Jay Gelani",
      role: "Zippy Zest Administration",
      image: "/jay-gelani.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    {
      name: "Jenish Paneliya",
      role: "Ahmedabad Administration",
      image: "/jenish-paneliya.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    // {
    //   name: "Parth Jetawa",
    //   role: "Rajkot Administration",
    //   image: "/parth-jethva.png",
    //   socialLinks: [
    //     {
    //       icon: <FaFacebookF />,
    //       href: "",
    //     },
    //     {
    //       icon: <FaInstagram />,
    //       href: "https://www.instagram.com/eveg_group/",
    //     },
    //     {
    //       icon: <FaTwitter />,
    //       href: "#",
    //     },
    //   ],
    // },
    

    // {
    //   name: "Riddham Kakadiya",
    //   role: "Rajkot Administration",
    //   image: "/riddham-kakadiya.png",
    //   socialLinks: [
    //     {
    //       icon: <FaFacebookF />,
    //       href: "",
    //     },
    //     {
    //       icon: <FaInstagram />,
    //       href: "https://www.instagram.com/eveg_group/",
    //     },
    //     {
    //       icon: <FaTwitter />,
    //       href: "#",
    //     },
    //   ],
    // },
    {
      name: "Yashesh Patel",
      role: "HOD",
      image: "/yashesh-patel.png",
      socialLinks: [
        {
          icon: <FaFacebookF />,
          href: "",
        },
        {
          icon: <FaInstagram />,
          href: "https://www.instagram.com/eveg_group/",
        },
        {
          icon: <FaTwitter />,
          href: "#",
        },
      ],
    },
    // {
    //   name: "Sanket Gelani",
    //   role: "Admin Team",
    //   image: "/sanket-gelani.png",
    //   socialLinks: [
    //     {
    //       icon: <FaFacebookF />,
    //       href: "",
    //     },
    //     {
    //       icon: <FaInstagram />,
    //       href: "https://www.instagram.com/eveg_group/",
    //     },
    //     {
    //       icon: <FaTwitter />,
    //       href: "#",
    //     },
    //   ],
    // },
  ]);

  return (
    <div>
      {loading ? (
        <div className="load bg-mainpurple">
          <div>
            <HashLoader
              color={"blue"}
              className="h-100 w-100"
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <div className="bg-mainpurple">
          <TopHeader></TopHeader>
          <Header></Header>
          <h3 className="text-center text-4xl pt-5 text-mainblue m-0">
            Meet Our Team
          </h3>
          <section className="pt-20 bg-mainpurple">
            <div className="container">
              <div className="flex flex-wrap items-center col-12">
                {teamMembers.map((member, index) => (
                  <div className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 px-4 xs:pb-24 sm:pb-24">
                    <div
                      className="profile-card sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] xs:w-[150px] xs:h-[150px] sm:h-[210px] md:h-[310px] lg:h-[192px] xl:h-[237px] group hover:xs:h-[250px] hover:sm:h-[300px] hover:lg:h-[290px] hover:md:h-[400px] hover:xl:h-[330px]"
                      key={index}
                    >
                      <div className="img">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="caption group-hover:xs:-translate-y-[150px] group-hover:md:-translate-y-[140px] group-hover:sm:-translate-y-[130px]">
                        <h3 className="xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg underline">
                          {member.name}
                        </h3>
                        <p className="text-blue text-xs py-2">{member.role}</p>
                        <div className="social-links flex justify-center">
                          {member.socialLinks &&
                            member.socialLinks.map((link, index) => (
                              <a href={link.href} key={index} target="new">
                                {link.icon}
                              </a>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Footer></Footer>
          <Copyright></Copyright>
          <TopBtn />
          <Whatsapp></Whatsapp>
        </div>
      )}
    </div>
  );
};

export default Team;
