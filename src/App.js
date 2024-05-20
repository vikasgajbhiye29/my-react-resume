
import './App.css';
import EducationDetails from './components/EducationDetails';
import ProfileSummery from './components/ProfileSummery';
import ResumeHeader from './components/ResumeHeader';
import WorkExperiance from './components/WorkExperiance';

function App() {
  return (
    <div>
        <ResumeHeader/>
        <ProfileSummery />
        <EducationDetails/>
        <WorkExperiance />
     
        
    </div>
  );
}

export default App;
