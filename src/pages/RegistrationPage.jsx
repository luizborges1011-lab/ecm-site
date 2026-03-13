import { useEffect } from 'react';
import Registration from '../components/Registration';

const RegistrationPage = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
            <Registration />
        </div>
    );
};

export default RegistrationPage;
