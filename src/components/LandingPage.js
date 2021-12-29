import Navbar from './Navbar';
import Footer from './Footer';
//import TaskPost from './TaskPost';
import '../styles/LandingPage.css';

// paginated -> news feed style 
// map over an array of objects ... feed the key / values as props into task post
const LandingPage = () => {
    console.log('hello')
    return (
        <div className="LandingPage-wrapper">
            <Navbar />
            <main className="page-body">
                <p>Main page content here, add more if you want to see the footer push down.</p>
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;