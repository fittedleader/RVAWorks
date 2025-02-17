import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './img/rvaworkslogobgremoved.png';
import businessImage from "./img/businesstest.png"
import "./sponsorPage.css";
import arrowImage from "./img/arrow.png"
import kauffmanLogo from "./img/kauffman.png"
import businessesImg from "./img/businesstest.png"

import davidBarrett from './img/Governance/BoardOfDirectors/david_barrett.png'; 
import rickWildes from './img/Governance/BoardOfDirectors/rick_wildes.webp';
import charlettaDarville from './img/Governance/BoardOfDirectors/Charletta_Darville.png';
import charolette from './img/Governance/BoardOfDirectors/charolette.webp';

import daleFickett from './img/Governance/CEO/Dale_Fickett.png';

import danielLantz from './img/Governance/Advisory/Daniel_Lantz.png';
import gopa from './img/Governance/Advisory/gopa.webp';
import john from './img/Governance/Advisory/john.webp';
import sidTanu from './img/Governance/Advisory/Sid_Tanu.png';
import simiJung from './img/Governance/Advisory/Simi_Jung.png';
import swatiSachan from './img/Governance/Advisory/Swati_Sachan.png';
import charles from './img/Governance/Advisory/charles.jpg';

import ian from './img/Governance/Volunteers/ian.webp';
import ohenebaBerko from './img/Governance/Volunteers/Oheneba_Berko.png';

import addInformationImg from './img/Add_information.svg';
import communityImg from './img/Community.svg';
import financeImg from './img/Finance.svg';
import featured from './img/media.webp';
import partners from './img/partner.webp';

import bernie from './img/bernie.png'
import khaled from './img/khaled.png'
import alan from './img/alan.png'

import networkingImg from './img/landing/Leadership.svg'
import creditImg from './img/landing/Lost.svg'
import startupImg from './img/landing/Community.svg'
import streetImg from './img/landing/Questions.svg'
import capitalImg from './img/landing/Add_information.svg'
import softwareImg from './img/landing/Finance.svg'

import missionImgEnd1 from './img/missionImg/missionimgend2.svg'
import missionImgEnd2 from './img/missionImg/missionimgend1.svg'
import missionImg3 from './img/missionImg/missionImage1.png'
import missionImg4 from './img/missionImg/missionImage3.png'
import missionImg5 from './img/missionImg/missionimg7.png'
import missionImg6 from './img/missionImg/missionimg8.png'

import threelinedash from './img/threelinedashbetter.png'
import ReactDOM from 'react-dom';

// NavigationBar component
function NavigationBar() {
  const [showModal, setShowModal] = useState({ subscribe: false });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubscribe = () => {
    setShowModal({ ...showModal, subscribe: true });
  };

  return (
    <nav className="navbar">
      <a href="#top">
        <img src={logo} alt="RVA Works Logo" className="logo" />
      </a>
      <ul className="nav-links">
        <li><a className="nav-btn-green" href="#mission">Mission</a></li>
        <li><a className="nav-btn-orange" href="#programs">Programs</a></li>
        <li><a className="nav-btn-green" href="#impact">Impact</a></li>
        <li><a className="nav-btn-orange" href="#governance">Governance</a></li>
      </ul>
      <div className="cta-buttons">
        <button className="subscribe-btn" onClick={handleSubscribe}>Subscribe</button>
        <button className="donate-btn" onClick={() => window.open('https://www.paypal.com/paypalme/rvaworks?locale.x=en_US', '_blank')}>Donate</button>
      </div>
      <div className="dropdown-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        &#9776;
      </div>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a className="nav-btn-green" href="#mission">Mission</a></li>
            <li><a className="nav-btn-orange" href="#programs">Programs</a></li>
            <li><a className="nav-btn-green" href="#impact">Impact</a></li>
            <li><a className="nav-btn-orange" href="#governance">Governance</a></li>
            <li><button className="subscribe-btn" onClick={handleSubscribe}>Subscribe</button></li>
            <li><button className="donate-btn" onClick={() => window.open('https://www.paypal.com/paypalme/rvaworks?locale.x=en_US', '_blank')}>Donate</button></li>
          </ul>
        </div>
      )}
      
      {showModal.subscribe && (
        <div className="fullscreen-modal show" onClick={() => setShowModal({ ...showModal, subscribe: false })}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()} style={{
            padding: '0',
            width: 'auto',
            minWidth: '600px',
            maxWidth: '450px'
          }}>
            <span className="close-btn" onClick={() => setShowModal({ ...showModal, subscribe: false })}>&times;</span>
            <iframe 
              src="/subscribe.html"
              style={{
                width: '100%',
                height: '400px',
                border: 'none',
                overflow: 'hidden',
                borderRadius: '8px'
              }}
              title="Subscribe Form"
            />
          </div>
        </div>
      )}
    </nav>
  );
}




// HeroSection component
function HeroSection() {
  const navigate = useNavigate(); // Step 2
  return (
    <header className="hero">
      <h1 className="hero-title">
        <img src={logo} alt="RVA Works Logo" style={{ maxWidth: '350px', height: 'auto' }} />
      </h1>
      <p className="hero-subtitle">
        <b>Helping People Overcome Barriers and Become Business Owners</b>
      </p>
      
      <p className="hero-subtitle"><i>RVA Works Enterprise Support, Inc is a tax exempt organization</i></p>
      <p className="hero-subtitle">
        Are you interested in <span style={{ color: 'green', fontWeight: 'bold'}}>growing</span> your business?
      </p>
      <br/>
      
      <button className="get-started-btn" onClick={() => navigate('/business')}>
        <span style={{fontWeight: 'bold', fontSize: 17.5}}>Grow My Business</span>
      </button>
    </header>
  );
}

// MissionSection component
function MissionSection() {
  return (
    <section id="mission" className="mission-section">
      <div class="divider"></div>
      <h2>Our Mission</h2>
      <div className="mission-content">
        <div className="mission-text centered">
          <p><b>What We Do: </b>RVA Works is a nonprofit in Richmond, Virginia that helps entrepreneurs start businesses. RVA Works offers a variety of resources such as business training and network building to help entrepreneurs at all levels to grow their businesses.</p>
        </div>
        <img src={missionImg3} alt="Mission Image 3" className="image-placeholder orange" />
        <img src={missionImgEnd1} alt="Mission Image 4" className="image-placeholder green" />
        <img src={missionImg5} alt="Mission Image 5" className="image-placeholder orange" />
        <div className="mission-text centered">
          <p><b>Why We Do This: </b>RVA Works' mission is to eliminate barriers to business ownership to give everyone a chance to become a successful entrepreneur. We provide educational and financial services to help those in need use their passions to build a robust business.</p>
        </div>
        <img src={missionImg6} alt="Mission Image 6" className="image-placeholder orange" />
        <img src={missionImgEnd2} alt="Mission Image End 1" className="image-placeholder orange" />
        <img src={missionImg4} alt="Mission Image End 2" className="image-placeholder orange" />
        <div className="mission-text centered">
          <p><b>Who We Serve: </b>We support prospective entrepreneurs of all backgrounds. We make it our goal to allow everyone the opportunity to learn more about business to help them grow their passions. Regardless of one's business stage, industry, or revenue, RVA Works offers resources for all.</p>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flippedStates, setFlippedStates] = useState(
    Array(6).fill(false)
  ); // Manage flip state for each card
  const sliderRef = useRef(null); 

  const programData = [
    {
      title: <span className="title-style-green">Network Building and Access to Business People</span>,
      image: networkingImg,
      description: (
        <div className="program-description">
          <h4 className="program-heading">Who it's for:</h4>
            <h5>Entrepreneurs at all stages of their careers</h5>
          <br />
          <h4 className="program-heading">What we provide:</h4>
          <p>Our promotional support of 1 Million Cups, ensures a unique forum for building connections with peer entrepreneurs. 1 Million Cups is a national program of the Kauffman Foundation, and hosted at the Robins School of Business, University of Richmond. This weekly meetup includes free coffee, an entrepreneur speaker, and facilitated discussions. Through the discussion all participants benefit from peer learning, identifying insights, applying those insights to their own business, and exchanging valuable referrals.</p>
        </div>
      )
    },
    {
      title: <span className="title-style-orange">One on One Credit Counseling</span>,
      image: creditImg,
      description: (
        <div className="program-description">
          <h4 className="program-heading">Who it's for:</h4>
            <h5>Entrepreneurs at all stages of their careers</h5>
          <br />
          <h4 className="program-heading">What we provide:</h4>
          <p>Introduced at the request of Capital One, we provide a one-on-one "deep dive" into entrepreneur's credit report and budget, and provide recommendations for lower cost products. Plus, through larger roundtable discussions, we cover managing free cash flow, preparation for a loan underwriter, and reducing interest rates.</p>
        </div>
      )
    },
    {
      title: <span className="title-style-green">Startup Accelerator to Build a New Business</span>,
      image: startupImg,
      description: (
        <div className="program-description">
          <h4 className="program-heading">Who it's for:</h4>
            <h5>People thinking about starting a new business.</h5>
          <br />
          <h4 className="program-heading">What we provide:</h4>
          <p>A 12 week educational experience, with a cohort of peer founders. First, decide if an entrepreneurial lifestyle is a good fit for you. Second, use the Kauffman Fasttrac program and other mentor insights to clarify the idea, and validate whether customers will purchase what you will sell. Third, develop the organization, so you can start making sales. After you finish, you'll benefit from alumni-only events and professional referrals.</p>
        </div>
      )
    },
    {
      title: <span className="title-style-orange">Main Street Mastermind</span>,
      image: streetImg,
      description: (
        <div className="program-description">
          <h4 className="program-heading">Who it's for:</h4>
            <h5>Alumni of the accelerator program</h5>
          <br />
          <h4 className="program-heading">What we provide:</h4>
          <p>A monthly pro bono meeting of RVA Works Accelerator alumni. Join a supportive community of peers. Discussion focuses on continuous improvement of your business, a roundtable format for each person to share their current business challenges, and an opportunity for the group to express helpful experiences overcoming the particular difficulty.</p>
        </div>
      )
    },
    {
      title: (
        <>
          <span className="title-style-green">Capital Access through a New Loan</span>
          <br />
          <span className="title-style-green">(Coming Soon!)</span>
        </>
      ),
      image: capitalImg,
      description: (
        <div className="program-description">
          <h4 className="program-heading">Who it's for:</h4>
            <h5>Small Business Owners Making Sales</h5>
          <br />
          <h4 className="program-heading">What we provide:</h4>
          <p>We're developing a new loan fund for qualifying small business borrowers. These unsecured term loans are designed to provide working capital, which helps small businesses grow. Borrowers typically meet underwriting requirements within several months of opening their business, and they rely on other aspects of the RVA Works support system.</p>
        </div>
      )
    },
    {
      title: (
        <>
          <span className="title-style-orange">Software Platform for Small Business Owners</span>
          <br />
          <span className="title-style-orange">(Coming Soon!)</span>
        </>
      ),
      image: softwareImg,
      description: (
        <div className="program-description">
          <h4 className="program-heading">Who it's for:</h4>
            <h5>Small Business Owners Making Sales</h5>
          <br />
          <h4 className="program-heading">What we provide:</h4>
          <p>We're developing new software to allow small business owners to exchange insights, connections, and to qualify for a loan. For more information on this product, and to sign up for email updates on product releases, please see www.opentrellis.org.</p>
        </div>
      )
    },
  ];

  const nextSlide = () => {
    const getSlideDistance = () => {
        if (window.innerWidth <= 800) {
            return 19;
        } else if (window.innerWidth <= 1100) {
            return 29;
        } else if (window.innerWidth <= 1500) {
            return 21;
        } else {
            return 21;
        }
    };

    const getVisibleCards = () => {
        if (window.innerWidth <= 800) {
            return 2; // For -3 offset
        } else if (window.innerWidth <= 1100) {
            return 4; // For -3 offset
        } else if (window.innerWidth <= 1500) {
            return 4; // For -4 offset
        } else {
            return 4; // For -4 offset
        }
    };

    const slideDistance = getSlideDistance();
    const visibleCards = getVisibleCards();

    if (currentSlide < programData.length - visibleCards) {
        setCurrentSlide(currentSlide + 1);
        sliderRef.current.style.transform = `translateX(-${(currentSlide + 1) * slideDistance}%)`;
    } else {
        setCurrentSlide(0);
        sliderRef.current.style.transform = 'translateX(0)';
    }
    
    if (currentSlide === programData.length - (visibleCards + 1)) {
        setCurrentSlide(-1);
    }
};

  const handleCardClick = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index]; 
    setFlippedStates(newFlippedStates); 
  };

  return (
    <section id="programs" className="programs-section">
      <div className="divider"></div>
      <h2>Our Programs</h2>
      <div className="program-slider">
        <div className="program-content" ref={sliderRef}>
          {programData.map((program, index) => {
            // Determine the background color based on the index
            const backgroundColor = index % 2 === 0 ? '#ff8c00' : '#4CAF50'; // Orange for even, Green for odd
  
            return (
              <div key={index} className="program-card" onClick={() => handleCardClick(index)}>
                <div className={`program-inner ${flippedStates[index] ? 'flipped' : ''}`}>
                  <div className="program-front">
                    <img src={program.image} alt={program.title} />
                    <p>{program.title}</p>
                  </div>
                  <div className="program-back" style={{ backgroundColor: backgroundColor }}>
                    <p>{program.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className="bottom-right-btn" onClick={nextSlide}>
        <img src={arrowImage} alt="Next" className="arrow-icon" />
      </button>
    </section>
  );
  
}


// ImpactSection component
function ImpactSection() {
  const statsData = [
    { number: "130", text: "Founders have entered the accelerator" },
    { number: "95%", text: "Women-owned or ethnic minority-owned" },
    { number: "110", text: "Of graduates start their businesses" },
    { number: "400+", text: "Free, public meetups for business owners" },
    { number: "38%", text: "Average annual income increase graduates report after launching their business" },
    { number: "15,000", text: "Online audience of emerging entrepreneurs and supporters" },
  ];

  const founders = [
    {
      name: "",
      business: "",
      description: "",
      image: bernie
    },
    {
      name: "",
      business: "",
      description: "",
      image: khaled
    },
    {
      name: "",
      business: "",
      description: "",
      image: alan
    }
  ];

  return (
    <section id="impact" className="impact-section">
      <h2>Our Impact</h2>
      <div className="impact-stats">
        {statsData.map((stat, index) => (
          <div key={index} className={`stat-box ${index % 2 === 0 ? "green-box" : "orange-box"}`}>
            <h3 className={`stat-number ${index % 2 === 0 ? "orange-gradient" : "green-gradient"}`}>
              {stat.number}
            </h3>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
      <div class="divider"></div>

      <div className="founders-gallery">
        {founders.map((founder, index) => (
          <div className="founder-card">
            <img src={founder.image} alt={founder.name} />
            
          </div>
        ))}
      </div>
      <div class="divider"></div>

      <div className="foundation-thankyou">
        <div className="kauffman-logo">
          <a href="https://www.kauffman.org/" target="_blank" rel="noopener noreferrer" className="hover-link">
            <img src={kauffmanLogo} alt="Kauffman Foundation Logo" />
          </a>
        </div>
        <div className="thank-you-text">
          <h3>Thank You Kauffman Foundation: </h3>
          <p>
            The Board of Directors of RVA Works would like to extend our sincere gratitude to the Ewing Marion Kauffman Foundation for consistent collaboration. Starting in 2014, RVA Works and the Richmond community of entrepreneurs have benefited from the Kauffman Foundation's leadership in advancing the 1 Million Cups® peer learning program, the Fasttrac® curricula for entrepreneurs, and collaboration in community-engaged research with Virginia Commonwealth University. We truly value the Kauffman Foundation's advances in research, advocacy, and programs that assist in expanding access to entrepreneurial opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

function OneMillionSponsorships() {
  return (
    <div className="sponsorship-section" style={{ 
      padding: '40px 20px', 
      textAlign: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <div class="divider"></div>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>1 Million Cups Sponsorship</h2>
      
      <p style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        lineHeight: '1.6', 
        marginBottom: '30px',
        color: '#333',
        fontSize: '18px'  // Increased font size
      }}>
        We are pleased to sponsor 1 Million Cups, a national entrepreneur program of the Kauffman Foundation. 
        Our local community began in 2014, and includes founders, investors and startup community builders. 
        Together we hold hybrid events, and reach an online audience of over 15,000 people. For more details, 
        please see our event listing on Meetup.com.
      </p>

      <button 
        className="meetup-btn"
        onClick={() => window.open('https://www.meetup.com/opentrellis/', '_blank')}
        style={{
          padding: '12px 24px',
          backgroundColor: '#f64060',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
          transition: 'all 0.3s ease',  // Smooth transition for all changes
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#ff6b81';  // Lighter red
          e.target.style.transform = 'scale(1.1)';  // Grow by 10%
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#f64060';  // Original red
          e.target.style.transform = 'scale(1)';  // Original size
        }}
      >
        1 Million Cups Meetup
      </button>
      <div class="divider"></div>
    </div>
  );
}

function GovernanceSection() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const team = {
    "Board of Directors & Officers": [
      { name: "David Barrett", image: davidBarrett, description: "Board experience, Chairman Emeritus, or Trustee at the Virginia Council of CEOs, Better Business Bureau, Fork Union Military Academy."},
      { name: "Rick Wildes", image: rickWildes, description: "Financial & Special Projects, Virginia Museum of Fine Arts, VMFA Foundation, and Independent CPA." },
      { name: "Charletta Darville", image: charlettaDarville, description: "Board Secretary, RVA Works Alumna, and Founder of Community Aid, LLC." },
      { name: "Charolette Davis", image: charolette, description: "Board Member, Chair of the Alumni Committee, and Founder of Lyfestyle Mobile, LLC." }
    ],
    "Chief Executive Officer": [
      { name: "Dale Fickett", image: daleFickett, description: "Board President (voting officer), RVA Works CEO, and Instructor of Entrepreneurship at the University of Richmond." }
    ],
    "Advisory Council": [
      { name: "John Marin", image: john, description: "Co-Founder of Laborem Edge, a digital marketing agency and proprietary marketing software. Marketing and software advisor." },
      { name: "Gopa Nair", image: gopa, description: "Innovation Adoption lead with the Center of Excellence at U.S. GSA. Shares expertise via entrepreneurial training through RVAWorks." },
      { name: "Sid Tanu", image: sidTanu, description: "Small Business Loan Underwriter, Startup Mentor, TechStars accelerator Graduate, and RVA Works Advisor on Credit Counseling and Loan Fund Formation." },
      { name: "Swati Sachan", image: swatiSachan, description: "Professor of Finance & Accounting, Lecturer in Financial Technology, with a research interest in explainable AI and machine learning models. AI advisor." },
      { name: "Daniel Lantz", image: danielLantz, description: "Software Engineering Manager with Trovata, and technology mentor for the development team at RVA Works." },
      { name: "Charles Ajemian", image: charles, description: "MEDIAFLUX Benefit Corp. founder, and former Social Enterprise Alliance board director. Leads technical architecture and human-centered design projects at RVA Works." },
      { name: "Simi Jung", image: simiJung, description: "Founder of a Social Media Management and Virtual Assistance business founder. University of Richmond alumna." }
    ],
    "Volunteer Staff": [
      { name: "Ian Young", image: ian, description: "Holds responsibility for coordinating 1 Million Cups events, in-room technology, and hospitality." },
      { name: "Oheneba Berko", image: ohenebaBerko, description: "User Experience Designer & Webmaster. University of Richmond alumnus." }
    ]
  };

  const handleClick = (person) => {
    setSelectedPerson(person);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setTimeout(() => setSelectedPerson(null), 300);
  };

  return (
    <section id="governance" className={`governance-section ${isPopupVisible ? 'blurred' : ''}`}>
      <h2>Our Governance</h2>
      <h6>Our strategy, policies, budget, and programs are mission-aligned… Meet the team behind the magic.</h6>
      <div className="governance-grid">
        {Object.entries(team).map(([category, members]) => (
          <div key={category} className="governance-category">
            <h3>{category}</h3>
            <div className="members">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="member-container"
                  onClick={() => handleClick(member)}
                >
                  <img src={member.image} alt={member.name} className="member-image" />
                  <p className="member-name">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Popup Modal */}
      {selectedPerson && (
        <div className={`fullscreen-modal ${isPopupVisible ? 'show' : 'hide'}`}>
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src={selectedPerson.image} alt={selectedPerson.name} className="popup-image" />
            <h3>{selectedPerson.name}</h3>
            <p>{selectedPerson.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

function InfoSection() {
  const [showModal, setShowModal] = useState({ subscribe: false });

  const toggleModal = (type) => {
    setShowModal({ ...showModal, [type]: !showModal[type] });
  };

  return (
    <section className="info-section">
      <div className="container">
        <div class="divider"></div>
        <h2>Learn More</h2>
        <div className="card-grid">
          {[
            {
              img: addInformationImg,
              alt: "Getting information",
              title: "1. Strategic Plan",
              text: "Learn about our work to cultivate small business growth most beneficial to society."
            },
            {
              img: communityImg,
              alt: "Communicating",
              title: "2. Impact Report",
              text: "Dive into the peer-reviewed research, and quantitative analyses we've used to demonstrate the difference our business owners are making."
            },
            {
              img: financeImg,
              alt: "Financing",
              title: "3. Operating Budget",
              text: "Review our funding sources, our allocations to direct program services, and the financial strength of our organization."
            }
          ].map((card, index) => (
            <div key={index} className="card">
              <img
                src={card.img}
                alt={card.alt}
                className="card-img"
              />
              <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="sign-up-btn" onClick={() => toggleModal('subscribe')}>
          Sign Up
        </button>
      </div>

      {showModal.subscribe && (
        <div className="fullscreen-modal show" onClick={() => setShowModal({ ...showModal, subscribe: false })}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()} style={{
            padding: '0',
            width: 'auto',
            minWidth: '600px',
            maxWidth: '450px'
          }}>
            <span className="close-btn" onClick={() => setShowModal({ ...showModal, subscribe: false })}>&times;</span>
            <iframe 
              src="/subscribe.html"
              style={{
                width: '100%',
                height: '400px',
                border: 'none',
                overflow: 'hidden',
                borderRadius: '8px'
              }}
              title="Subscribe Form"
            />
          </div>
        </div>
      )}
    </section>
  );
}


function Footer() {
  const [showModal, setShowModal] = useState({
    subscribe: false,
    terms: false,
    privacy: false,
    disclaimer: false,
    volunteer: false,
  });
  const [email, setEmail] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [message, setMessage] = useState('');

const toggleModal = (type) => {
    setShowModal({ ...showModal, [type]: !showModal[type] });
    // Reset message when modal is closed
    if (showModal[type]) {
        setMessage('');
    }
};
const navigate = useNavigate(); // Keep the navigation

const handleSubscribe = async () => {
    if (!email) {
      setMessage('Please enter a valid email.');
      return;
    }
    setIsSubmitting(true);
    setMessage('');

    try {
      console.log('Attempting to send email:', email); // Debug log
      const response = await fetch('https://rva-works-server.vercel.app/subscribe-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail(''); // Clear the input field
      } else {
        const errorData = await response.text(); // Get error message from server
        console.error('Server response:', errorData); // Debug log
        setMessage(`Failed to subscribe: ${errorData}`);
      }
    } catch (error) {
      console.error('Client error:', error); // Debug log
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scrolling smooth
    });
  };

  return (
    <footer className="footer">
      <h2>Get Involved Now</h2>
      <div className="footer-buttons">
        <button
          className="subscribe-btn"
          onClick={() => toggleModal('subscribe')}
        >
          Subscribe
        </button>
        <button
          className="volunteer-btn"
          onClick={() =>
            window.open(
              'https://docs.google.com/forms/d/e/1FAIpQLSesks3OZT-cm8QKhA9LcA-02TSiYqqzAGkENKUssF9weeWi-Q/viewform',
              '_blank'
            )
          }
        >
          Volunteer
        </button>
      </div>
      <div className="footer-buttons">
        <button
          className="donate-btn"
          onClick={() =>
            window.open(
              'https://www.paypal.com/paypalme/rvaworks?locale.x=en_US',
              '_blank'
            )
          }
        >
          Donate
        </button>
      </div>
      <div className="divider"></div>
      <div className="footer-info">
        <div className="categories">
          <div className="governance-category">
            <h3>As Featured In</h3>
            <img
              src={featured}
              alt="Featured images"
              className="feature-logos"
            ></img>
          </div>
          <div className="governance-category">
            <h3>Community Partners</h3>
            <img
              src={partners}
              alt="Featured partners"
              className="partners-logos"
            ></img>
          </div>
        </div>
        <div className="divider"></div>

        <div className="rva-logo">
          <img src={logo} alt="Logo" className="secondlogo"></img>
          <p>
            <i>Where Small Businesses Go To Grow</i>
          </p>
        </div>
        <div className="divider"></div>

        <h2>Explore</h2>
        <h3>
          If you want to explore more about how to grow your business, visit our business page.
        </h3>
        
        <button
          className="business-btn"
          onClick={() => {
            navigate('/business');
            window.scrollTo(0, 0);
          }}
        >
          <span style={{fontWeight: 'bold', fontSize: 17.5}}>Grow My Business</span>
        </button>
        
        
      </div>

      {/* Dark gray background section for footer links and copyright */}
      <div className="dark-gray-bg">
        <div className="footer-links">
          <button className="footer-link" onClick={() => toggleModal('terms')}>
            Terms & Service
          </button>
          <button className="footer-link" onClick={() => toggleModal('privacy')}>
            Privacy Statement
          </button>
          <button
            className="footer-link"
            onClick={() => toggleModal('disclaimer')}
          >
            Disclaimer
          </button>
        </div>
        <div className="divider"></div>

        <div className="copyright">
          <p>
            Copyright © 2014 - 2024 RVA Works Enterprise Support, Inc. All
            rights reserved.
          </p>
          <p>
            RVA Works Enterprise Support, Inc., d/b/a RVA Works is a 501(c)3 tax
            exempt organization.
          </p>
          <p>P.O. Box 61025 Richmond VA</p>
        </div>
        <div className="coded">
          This website was designed and coded by <a href="https://code4cause.org" target="_blank" rel="noopener noreferrer" className="code4cause-link">Code4Cause ©</a>
        </div>
      </div>

      {/* Modal Component */}
      {showModal.subscribe && (
        <div className="fullscreen-modal show" onClick={() => toggleModal('subscribe')}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()} style={{
            padding: '0',
            width: 'auto',
            minWidth: '600px',
            maxWidth: '450px'
          }}>
            <span className="close-btn" onClick={() => toggleModal('subscribe')}>&times;</span>
            <iframe 
              src="/subscribe.html"
              style={{
                width: '100%',
                height: '400px',
                border: 'none',
                overflow: 'hidden',
                borderRadius: '8px'
              }}
              title="Subscribe Form"
            />
          </div>
        </div>
      )}
      {showModal.terms && (
        <div
          className="fullscreen-modal show"
          onClick={() => toggleModal('terms')}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => toggleModal('terms')}>
              &times;
            </span>
            <h4>Terms of Service</h4>
            <p>Please read these terms and conditions carefully before using Our Service.</p>

            <h4>Interpretations and Definitions</h4>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

            <h4>Definitions</h4>
            <p>For the purposes of these Terms and Conditions: Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority. Country refers to: Virginia, United States. Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to RVA Works Enterprise Support, 102 UR Drive Richmond, VA 23173 U.S.A.
            Device means any device that can access the Service such as a computer, a cellphone or a digital tablet. Service refers to the Website. Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service. Website refers to RVA Works Enterprise Support, accessible from www.rvaworks.org. You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>

            <h4>Acknowledgement</h4>
            <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service. By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service. You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service. Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>


            <h4>Intellectual Property</h4>
            <p>The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.</p>

            <h4>Links to Other Websites</h4>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>

            <h4>Termination</h4>
            <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.</p>

            <h4>Limitation of Liability</h4>
            <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service. To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose. Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>


            <h4>Disclaimer</h4>
            <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected. Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, time-bombs or other harmful components. Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>

            <p>This website and its documents, materials, video, text and images are designed for informational purposes only. It is not intended to infer or contain any contractual obligations. Unless otherwise referenced, this website and other communications of RVA Works Enterprise Support contain ideas, concepts, illustrations and information that reflect the views of authors and referenced sources. It is not designed to imply definitive facts, data or information on which business decisions should be made. The content herein may, or may not be used to guide the efforts of RVA Works Enterprise Support. Interpretations of the programs, products, services and strategies outlined herein, or the mention of other entities or agencies is not to be construed as representing any contractual agreements. The opinions expressed in this document are just that. No warranties, express or implied, of any kind are made, intended or inferred. You agree to defend, indemnify, and hold harmless RVA Works Enterprise Support its board, executives, directors, officers, agents, contractors and volunteers from any and all the liabilities, claims, damages, and expenses <n>(</n>including reasonable attorney's fees and costs<n>)</n> arising out of your use of this material; or arising out of your breach or alleged breach the copyright, trademark, proprietary, or other rights of RVA Works Enterprise Support. Open Trellis® and RVA Works® are trademark of RVAWorks Enterprise Support, all rights reserved.</p>


            <h4>Governing Law</h4>
            <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

            <h4>Disputes Resolution.</h4>
            <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company. For European Union (EU) Users If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>

            <h4>United States Legal Compliance</h4>
            <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>

            <b>Severability and Waiver</b>

            <h4>Severability</h4>
            <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>

            <h4>Waiver</h4>
            <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.</p>

            <h4>Translation Interpretation</h4>
            <p>These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>

            <h4>Changes to These Terms and Conditions</h4>
            <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>

            <h4>Contact Us</h4>
            <p>If you have any questions about these Temrs and Conditions, You can contact our Data Protection Officer (DPO), Dale Fickett, by email at dale.fickett@rvaworks.org by phone at 804-335-7198 or by mail to:</p>
            <p><strong>102 UR Drive </strong>
              <br/>Richmond, VA 23173 
              <br/>U.S.A.
            </p>

            <h5> 14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h5>
            <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please contact us here www.rvaworks.org. We will respond to your request within 30 days.</p>

          </div>
        </div>
      )}
      {showModal.privacy && (
        <div
          className="fullscreen-modal show"
          onClick={() => toggleModal('privacy')}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => toggleModal('privacy')}>
              &times;
            </span>
            <h4>Privacy Statement</h4>
            <p>This privacy notice applies to all information collected through our Services (which, as described above, includes our Website and App), as well as, any related services, sales, marketing or events. Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</p>

            <h5> 1. WHAT INFORMATION DO WE COLLECT?</h5>
            <p> Personal information you disclose to us.</p>
            <p>In Short: We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services (such as by posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.</p>

            <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following:</p>

            <p>Personal Information Provided by You. We collect names; phone numbers; email addresses; mailing addresses; job titles; usernames; passwords; contact preferences; contact or authentication data; billing addresses; debit/credit card numbers; and other similar information.</p>

            <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>

            <h5> 2. HOW DO WE USE YOUR INFORMATION?</h5>
            <p> In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
            <p> We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>

            <p><strong>We use the information we collect or receive:</strong></p>
            <p>   <ul>
                <li> To facilitate account creation and logon process. If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</li>
                <li> To post testimonials. We post testimonials on our Services that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at dale.fickett@rvaworks.org and be sure to include your name, testimonial location, and contact information.</li>
                <li> Request feedback. We may use your information to request feedback and to contact you about your use of our Services.</li>
                <li> To enable user-to-user communications. We may use your information in order to enable user-to-user communications with each user's consent.</li>
                <li> To send administrative information to you. We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                <li> To protect our Services. We may use your information as part of our efforts to keep our Services safe and secure (for example, for fraud monitoring and prevention).</li>
                <li> To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
                <li> To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</li>
                <li> Fulfill and manage your orders. We may use your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services</li>
                <li> Administer prize draws and competitions. We may use your information to administer prize draws and competitions when you elect to participate in our competitions.</li>
                <li> To deliver and facilitate delivery of services to the user. We may use your information to provide you with the requested service.</li>
                <li> To respond to user inquiries/offer support to users. We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
                <li> To send you marketing and promotional communications. We and/or our third-party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. For example, when expressing an interest in obtaining information about us or our Services, subscribing to marketing or otherwise contacting us, we will collect personal information from you. You can opt-out of our marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).</li>
                <li> Deliver targeted advertising to you. We may use your information to develop and display personalized content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness.</li>
                </ul>
                </p>

            <h5>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h5>
            <p> In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
            <p> We may process or share your data that we hold based on the following legal basis:</p>
            <ul>
              <li> Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
              <li>Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
              <li>Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
              <li>Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
              <li>Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
            </ul>
            <p>More specifically, we may need to process your data or share your personal information in the following situations:</p>
              <p> <ul>
              <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul></p>

            <h5>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h5>
            <p>In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
            <p> We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

            <h5>5. DO WE USE GOOGLE MAPS?</h5>
            <p> In Short: Yes, we use Google Maps for the purpose of providing better service.</p>
            <p> This Website or App uses Google Maps APIs which is subject to Google's Terms of Service. You may find the Google Maps APIs Terms of Service here. To find out more about Google's Privacy Policy, please refer to this link.</p>

            <h5>6. HOW LONG DO WE KEEP YOUR INFORMATION?</h5>
            <p>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
            <p> We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.</p>
            <p> When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

            <h5>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h5>
            <p>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
            <p> We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

            <h5>8. DO WE COLLECT INFORMATION FROM MINORS?</h5>
            <p> In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
            <p> We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at dale.fickett@rvaworks.org.</p>

            <h5>9. WHAT ARE YOUR PRIVACY RIGHTS?</h5>
            <p> In Short: You may review, change, or terminate your account at any time.
            If you are a resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</p>
            <p> If you are a resident in Switzerland, the contact details for the data protection authorities are available here: https://www.edoeb.admin.ch/edoeb/en/home.html.</p>
            <p> Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt-out of interest-based advertising by advertisers on our Services visit http://www.aboutads.info/choices/.</p>

            <h5>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h5>
            <p> Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

            <h5>11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h5>
            <p> In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
            <p> California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>

            <p> If you are under 18 years of age, reside in California, and have a registered account with a Service, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.).</p>

            <h5> CCPA Priacy Notice</h5>

            <p> The California Code of Regulations defines a "resident" as:</p>
            <p> <ol>
              <li>every individual who is in the State of California for other than a temporary or transitory purpose and </li>
              <li>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose.</li>
            </ol>
            </p>
            <br/>All other individuals are defined as "non-residents."
            <br/>If this definition of "resident" applies to you, we must adhere to certain rights and obligations regarding your personal information.
            <br/>What categories of personal information do we collect?
            <br/>We have collected the following categories of personal information in the past twelve (12) months:
                        
            <div>
              <h5>Category	Examples	Collected:</h5>
            <p><strong> A. Identifiers	<span class="text-success">~ YES</span></strong>
              <br/>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name
            </p>

            <p><strong>B. Personal information categories listed in the California Customer Records statute <span class="text-success">~ YES</span></strong>
              <br/>	Name, contact information, education, employment, employment history and financial information	YES
            </p>

            <p><strong> C. Protected classification characteristics under California or federal law  <span class="text-success"> ~ YES</span></strong>
              <br/> Gender and date of birth
            </p>

            <p><strong> D. Commercial information	<span class="text-success"> ~ YES</span></strong>
                <br/> Transaction information, purchase history, financial details and payment information
            </p>

            <p><strong> E. Biometric information<span class="text-danger"> ~ NO</span></strong>
                  <br/> Fingerprints and voiceprints
            </p>

            <p><strong> F. Internet or other similar network activity <span class="text-success"> ~ YES</span></strong>
            <br/>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems and advertisements
            </p>

            <p><strong> G. Geolocation <span class="text-success"> ~ YES</span></strong>
            <br/> data	Device location
            </p>

            <p><strong> H. Audio, electronic, visual, thermal, olfactory, or similar information	<span class="text-danger"> ~ NO</span></strong>
            <br/>Images and audio, video or call recordings created in connection with our business activities
            </p>

            <p><strong>  I. Professional or employment-related information <span class="text-success"> ~ YES</span></strong>
              <br/>Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualifications if you apply for a job with us.
            </p>

            <p><strong>  J. Education Information<span class="text-danger"> ~ NO</span></strong>
              <br/>Student records and directory information	
            </p>

            <p><strong>K. Inferences drawn from other personal information	<span class="text-success"> ~ YES</span></strong>
            <br/>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics	
            </p>
            </div>

            <hr />


            <p> We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:</p>
            <p> <ul>
              <li>Receiving help through our customer support channels;</li>
              <li>Participation in customer surveys or contests; and</li>
              <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>
              </p>

              <h5>How do we use and share your personal information?</h5>
              <p> More information about our data collection and sharing practices can be found in this privacy notice.</p>
              <p>You may contact us by emailing dale.fickett@rvaworks.org and our customer service will typically respond within 72 hours. Alternatively, you can reach us by mail at 102 UR Drive Richmond, VA 23173 U.S.A. by phone at 804-335-7198</p>
              <p> If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.</p>

            <h5> Will your information be shared with anyone else?</h5>
            <p> We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.</p>
            <p> We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal data.</p>

            <p> RVA Works Enterprise Support has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. RVA Works Enterprise Support will not sell personal information in the future belonging to website visitors, users and other consumers.</p>

            <h5> Your rights with respect to your personal data</h5>
            Right to request deletion of the data - Request to delete
            <p> You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities.</p>

            <h5> Right to be informed - Request to know </h5>

            <p>Depending on the circumstances, you have a right to know:</p>
            <p> <ul>
              <li> whether we collect and use your personal information;</li>
              <li> the categories of personal information that we collect;</li>
              <li> the purposes for which the collected personal information is used;</li>
              <li> whether we sell your personal information to third parties;</li>
              <li> the categories of personal information that we sold or disclosed for a business purpose;</li>
              <li> the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
              <li> the business or commercial purpose for collecting or selling personal information.</li>
            </ul>
            </p>
            <p> In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</p>

            <p> Right to Non-Discrimination for the Exercise of a Consumer's Privacy Rights</p>
            <p> We will not discriminate against you if you exercise your privacy rights.
            Verification process</p>
            <p> Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.</p>
            <p> We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</p>

            <p> <strong>Other privacy rights</strong></p>
            <p> <ul>
              <li> you may object to the processing of your personal data</li>
              <li> you may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data</li>
              <li> you can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
              <li> you may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.</li>
            </ul>
            </p>

            <p> To exercise these rights, you can contact us by visiting http://www.opentrellis.org, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>

            <h5> 12. DO WE MAKE UPDATES TO THIS NOTICE?</h5>
            <p> In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
            <p> We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

            <h5> 13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h5>
            <p> If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO), Dale Fickett, by email at dale.fickett@rvaworks.org by phone at 804-335-7198 or by mail to:</p>
            <p><strong>102 UR Drive </strong>
              <br/>Richmond, VA 23173 
              <br/>U.S.A.
            </p>

            <h5> 14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h5>
            <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please contact us here www.rvaworks.org. We will respond to your request within 30 days.</p>

          </div>
        </div>
      )}
      {showModal.disclaimer && (
        <div
          className="fullscreen-modal show"
          onClick={() => toggleModal('disclaimer')}
        >
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => toggleModal('disclaimer')}>
              &times;
            </span>
            <h4>Disclaimer</h4>
            <p>This website and its documents, materials, video, text and images are designed for informational purposes only. It is not intended to infer or contain any contractual obligations. Unless otherwise referenced, this website and other communications of RVA Works Enterprise Support contain ideas, concepts, illustrations and information that reflect the views of authors and referenced sources. It is not designed to imply definitive facts, data or information on which business decisions should be made. The content herein may, or may not be used to guide the efforts of RVA Works Enterprise Support. Interpretations of the programs, products, services and strategies outlined herein, or the mention of other entities or agencies is not to be construed as representing any contractual agreements. The opinions expressed in this document are just that. No warranties, express or implied, of any kind are made, intended or inferred. You agree to defend, indemnify, and hold harmless RVA Works Enterprise Support its board, executives, directors, officers, agents, contractors and volunteers from any and all the liabilities, claims, damages, and expenses <n>(</n>including reasonable attorney's fees and costs<n>)</n> arising out of your use of this material; or arising out of your breach or alleged breach the copyright, trademark, proprietary, or other rights of RVA Works Enterprise Support. Open Trellis® and RVA Works® are trademark of RVAWorks Enterprise Support, all rights reserved.</p>
          </div>
        </div>
      )}
      
      <div className="scroll-to-top-container">
        <button className="scroll-to-top" onClick={scrollToTop}>
          <img src={arrowImage} alt="Scroll to top" className="arrow-icon-up" />
        </button>
      </div>
    </footer>
  );
}

// App component
function SponsorPage() {
  return (
    <>
      <div className="App">
        <NavigationBar />
        <HeroSection />
        <MissionSection />
        <ProgramsSection />
        <ImpactSection />  {/* Add this line */}
        <OneMillionSponsorships />
        <GovernanceSection />
        <InfoSection />
        <Footer />
      </div>
    </>
  );
}


export default SponsorPage;
