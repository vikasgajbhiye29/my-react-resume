
import './App.css';
import EducationDetails from './components/EducationDetails';
import ProfileSummery from './components/ProfileSummery';
import ResumeHeader from './components/ResumeHeader';

function App() {
  return (
    <div>
        <ResumeHeader/>
        
          <ProfileSummery />
          <EducationDetails/>
     
        
    </div>
  );
}

export default App;
