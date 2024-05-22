
import './App.css';
import EducationDetails from './components/EducationDetails';
import Footer from './components/Footer';
import ProfileSummery from './components/ProfileSummery';
import ResumeHeader from './components/ResumeHeader';
import Skill from './components/Skill';
import WorkExperiance from './components/WorkExperiance';

function App() {
  return (
    <div>
        <ResumeHeader/>
        <ProfileSummery />
        <EducationDetails />
        <WorkExperiance />
        <Skill />
        <Footer />
     
        
    </div>
  );
}

export default App;
