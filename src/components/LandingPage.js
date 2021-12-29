import Navbar from './Navbar';
import Footer from './Footer';
//import TaskPost from './TaskPost'; // TODO: actually show all the posts
import '../styles/LandingPage.css';

// TODO: map over an array of tasks pulled from backend ... feed the key / values as props into task post
// TODO: paginated -> news feed style 
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