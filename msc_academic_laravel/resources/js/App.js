import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './style.css';
import Home from './components/index.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Help from './components/Help.jsx';
import Services from './components/Services.jsx';
import AddInstructor from './components/AddInstructor.jsx';
import EditInstructor from './components/EditInstructor.jsx';
import AddStudent from './components/AddStudent.jsx';
import EditStudent from './components/EditStudent.jsx';
import AddQA from './components/Addqa.jsx';
import EditQA from './components/Editqa.jsx';
import AddCourse from './components/AddCourse.jsx';
import EditCourse from './components/EditCourse.jsx';
import Login from './components/Login.jsx';
import Blog from './components/Blog.jsx';
import Signup from './components/Signup.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';
import StudentInformation from './components/StudentInformation.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import ProgramCoordinatorDashboard from './components/ProgramCoordinatorDashboard.jsx';
import InstructorDashboard from './components/InstructorDashboard.jsx';
import InstructorInformation from './components/InstructorInformation.jsx';
import InstructorAdmin from './components/InstructorAdmin.jsx';
import QAOfficerDashboard from './components/QAOfficerDashboard.jsx';
import ImageGrid from './components/ImageGrid.jsx';
import Reports from './components/Reports'; // Import other components
import ManageInstructors from './components/ManageInstructors';
import ManageStudents from './components/ManageStudents';
import ManageCourses from './components/ManageCourse';
import ManageQA from './components/ManageQA';
import Feedback from './components/Feedback';
import InstructManageStu from './components/InstructManageStu.jsx';


import ReportsPage from './components/ReportsPage';
import ProgramReviewPage from './components/ProgramReviewPage';
import StudentSupportPage from './components/StudentSupportPage';
import FeedbackPage from './components/FeedbackPage'; // Create a component for Feedback page
import ToolsForAssessmentPage from './components/ToolsForAssessmentPage'; // Create a component for Tools for Assessment page
import ImprovementPage from './components/ImprovementPage'; // Create a component for Improvement page
import FacultyDevelopmentPage from './components/FacultyDevelopmentPage'; // Create a component for Faculty Development page
import QualityStandardsPage from './components/QualityStandardsPage'; 

import GradePeers from './components/gradepeers';
import Course from './components/course';
import ExamCreation from './components/ExamCreation';
import Exam from './components/Exam';
import TakeAssessment from './components/TakeAssessment';
import Report_S from './components/Report_S';
import Analytics from './components/Analytics';
import AssignedStudents from './components/AssignedStudents';
import Permissions from './components/Permissions';
import ReportQA from './components/ReportQA';
import ReportStudent from './components/ReportStudent';
import Performance from './components/Performance';





function App() {
  return (
    <Router>
      <div>
        
        <Header/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/help" component={Help} />
          <Route path="/login" component={Login} />
          <Route path="/Blog" component={Blog} />
          <Route path="/signup" component={Signup} />
          <Route path="/ImageGrid" component={ImageGrid} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/studentdashboard" component={StudentDashboard} />
          <Route path="/studentinformation" component={StudentInformation} />
          <Route path="/admindashboard" component={AdminDashboard} />
          <Route path="/programcoordinatordashboard" component={ProgramCoordinatorDashboard} />
          <Route path="/instructordashboard" component={InstructorDashboard} />
          <Route path="/instructorinformation" component={InstructorInformation} />
          <Route path="/instructoradmin" component={InstructorAdmin} />
          <Route path="/qaofficerdashboard" component={QAOfficerDashboard} />

<Route path="/reports" component={Reports} />
  <Route path="/manage-instructors" component={ManageInstructors} />
  <Route path="/manage-students" component={ManageStudents} />
<Route path="/manage-course" component={ManageCourses} />
  <Route path="/manage-qa-officer" component={ManageQA} />
  <Route path="/feedback" component={Feedback} />
<Route path="/reportspage" component={ReportsPage} />
              <Route path="/program-review" component={ProgramReviewPage} />
              <Route path="/student-support" component={StudentSupportPage} />
              <Route path="/feedback" component={FeedbackPage} />
              <Route path="/tools-for-assessment" component={ToolsForAssessmentPage} />
              <Route path="/improvement" component={ImprovementPage} />
              <Route path="/faculty-development" component={FacultyDevelopmentPage} />
              <Route path="/quality-standards" component={QualityStandardsPage} />

<Route path="/gradepeers" component={GradePeers} />
          <Route path="/course" component={Course} />
          <Route path="/examcreation" component={ExamCreation} />
          <Route path="/Exam" component={Exam} />
          <Route path="/takeassessment" component={TakeAssessment} />
          <Route path="/reports_s" component={Report_S} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/assigned-students" component={AssignedStudents} />
          <Route path="/permissions" component={Permissions} />
          <Route path="/qa-reports" component={ReportQA} />
          <Route path="/reportstudent" component={ReportStudent} />
          <Route path="/InstructManageStu" component={InstructManageStu} />
          <Route path="/instructor-performance" component={Performance} />

            <Route path="/" component={Home} />

            
        </Switch>

        <footer>
          <center>
            <p>&copy; Copyright Msc Performance System</p>
          </center>
        </footer>
      </div>
    </Router>
  );
}

export default App;