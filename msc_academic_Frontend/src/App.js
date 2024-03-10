import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// import streamHttp from 'stream-http';

import About from './components/About.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import Blog from './components/Blog.jsx';
import Feedback from './components/Feedback';
import ForgotPassword from './components/ForgotPassword.jsx';
import Header from './components/Header.jsx';
import Help from './components/Help.jsx';
import ImageGrid from './components/ImageGrid.jsx';
import InstructManageStu from './components/InstructManageStu.jsx';
import InstructorAdmin from './components/InstructorAdmin.jsx';
import InstructorDashboard from './components/InstructorDashboard.jsx';
import InstructorInformation from './components/InstructorInformation.jsx';
import Login from './components/Login.jsx';
import ManageCourses from './components/ManageCourse';
import ManageInstructors from './components/ManageInstructors';
import ManageQA from './components/ManageQA';
import ManageStudents from './components/ManageStudents';
import ProgramCoordinatorDashboard from './components/ProgramCoordinatorDashboard.jsx';
import QAOfficerDashboard from './components/QAOfficerDashboard.jsx';
import Reports from './components/Reports'; // Import other components
import Services from './components/Services.jsx';
import Signup from './components/Signup.jsx';
import StudentDashboard from './components/StudentDashboard.jsx';
import StudentInformation from './components/StudentInformation.jsx';
import Home from './components/index.jsx';
import './style.css';


import FacultyDevelopmentPage from './components/FacultyDevelopmentPage'; // Create a component for Faculty Development page
import FeedbackPage from './components/FeedbackPage'; // Create a component for Feedback page
import ImprovementPage from './components/ImprovementPage'; // Create a component for Improvement page
import ProgramReviewPage from './components/ProgramReviewPage';
import QualityStandardsPage from './components/QualityStandardsPage';
import ReportsPage from './components/ReportsPage';
import StudentSupportPage from './components/StudentSupportPage';
import ToolsForAssessmentPage from './components/ToolsForAssessmentPage'; // Create a component for Tools for Assessment page

import Analytics from './components/Analytics';
import AssignedStudents from './components/AssignedStudents';
import Chat from './components/Chat';
import Exam from './components/Exam';
import ExamCreation from './components/ExamCreation';
import Performance from './components/Performance';
import Permissions from './components/Permissions';
import ReportQA from './components/ReportQA';
import ReportStudent from './components/ReportStudent';
import Report_S from './components/Report_S';
import TakeAssessment from './components/TakeAssessment';
import Course from './components/course';
import GradePeers from './components/gradepeers';



function App() {

  // const express = require("express");
  // const path = require("path");
  // const http = require("http");
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
          <Route path="/chat" component={Chat} />



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
