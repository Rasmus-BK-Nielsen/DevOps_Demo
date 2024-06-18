import React from 'react';
import ciImage from './cicd_pipeline_infograph.png';

export default function Question1() {
     return (
          <div>
            <h2>Continuous Integration (CI)</h2>
            
            <h3>The Concept of CI</h3>
            <img src={ciImage} alt="CI Workflow" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            <p>
              <strong>Topic 1: What is Continuous Integration (CI)?</strong>
              <br />
              Continuous Integration (CI) is a software development practice where developers frequently<br /> 
              integrate their code changes into a shared repository.<br /> 
              Each integration triggers an automated build and testing process,<br /> 
              allowing teams to detect and address issues early.
              <br />
              <em>CI in the DevOps Universe:</em> CI is a fundamental practice within the larger DevOps framework.<br /> 
              It promotes a culture of collaboration and shared responsibility, where developers<br /> 
              continuously merge their code changes, ensuring that the codebase remains stable and functional.<br /> 
              CI helps streamline the development process, reducing the time it takes to deliver new features and fixes.
            </p>
            
            <h3>Tools for Efficient CI Workflow</h3>
            <p>
              <strong>Topic 2: Tools from DOC1 Course</strong>
              <br />
              Several tools introduced during the DOC1 course help us create an efficient CI workflow:
              <ul>
                <li>
                  <strong>GitHub:</strong> Acts as a central repository where code is stored,<br /> 
                  and integrations are managed. It supports collaboration and version control.
                </li>
                <li>
                  <strong>GitHub Actions:</strong> A CI/CD platform integrated with GitHub that allows<br /> 
                  us to automate the CI process. Workflows can be defined to run tests, builds,<br /> 
                  and other tasks automatically on code changes.
                </li>
              </ul>
              These tools enable us to automate the integration process, ensuring that our code is continuously<br /> 
              tested and validated, leading to higher quality software and faster delivery cycles.
            </p>
          </div>
        );
}