import { React, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./filteredCompaniesPage.module.css"; // Create and style this CSS file
import logo from './img/rvaworkslogobgremoved.png';
function NavigationBar() {
    const navigate = useNavigate();
    return (
        <nav className={styles.navbar}>
            <div
                className={styles.logoContainer} // Optionally use a wrapper div for styles
                onClick={() => navigate('/business')} // Navigate to the /business page
                style={{ cursor: 'pointer' }} // Make the div look clickable (optional)
            >
                <img src={logo} alt="RVA Works Logo" className={styles.logo} />
            </div>
        </nav>
    );
}
const FilteredCompaniesPage = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Use useLocation to access location
    const { results } = location.state || {};
    console.log("State Passed to FilteredCompanies:", location.state);

    useEffect(() => {
        // Scroll to top when the component is mounted
        window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures it only runs on mount
    
    if (!location.state || !location.state.results) {
        return ( 
            <div>
                <br />
                <br />
                <br />
                <h2 className={styles.title}>No Results Available</h2>
            </div>
        );
    }


    return (
        <div className={styles.container}>
            <button className={styles.backButton} onClick={() => navigate('/business')}>
                &larr; Back
            </button>
            <h2 className={styles.title}>Filtered Companies</h2>
            {results && results.length > 0 ? (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((company, index) => (
                            <tr key={index}>
                                <td>{company.organization}</td>
                                <td>
                                    {company.website ? (
                                        <a
                                            href={company.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {company.website}
                                        </a>
                                    ) : (
                                        "N/A"
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className={styles.noResults}>No matching companies found.</p>
            )}
        </div>
    );
};

function AllfilteredCompaniesPage(){
    return (
        <>
            <NavigationBar />
            <FilteredCompaniesPage />
        </>
    );
}

export default AllfilteredCompaniesPage;
