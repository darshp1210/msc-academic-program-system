import React from 'react';
import './style.css';
function Permissions() {
  const permissions = {
    canViewDashboard: true,
    canViewReports: true,
    canViewQualityAssuranceTasks: true,
    canEditQualityAssuranceTasks: true,
    canDeleteQualityAssuranceTasks: true,
    canViewDocuments: true,
    canEditDocuments: true,
    canDeleteDocuments: true,
    canViewUsers: true,
    canEditUsers: false,
    canDeleteUsers: false,
    canEditSettings: false,
  };

  return (
    <div>
      <center><h3>QA Officer Permissions</h3></center>
      <div class="container">
      <table>
        <thead>
          <tr>
            <th>Permission</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(permissions).map((permission, index) => (
            <tr key={index}>
              <td>{permission}</td>
              <td>{permissions[permission] ? 'Allowed' : 'Denied'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div>
  );
}

export default Permissions;
