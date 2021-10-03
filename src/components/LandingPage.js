import Navbar from './Navbar';
import Footer from './Footer';
import TaskPost from './TaskPost';
import '../styles/LandingPage.css';

// paginated -> news feed style 
// map over an array of objects ... feed the key / values as props into task post
const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Navbar />
            <Footer />
        </div>
    );
}

export default LandingPage;