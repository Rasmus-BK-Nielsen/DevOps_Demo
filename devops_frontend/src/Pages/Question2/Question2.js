import React from 'react';
import gitImage from './Github.png';

export default function Question2() {
     return (
          <div>
            <h2>Git Overview</h2>
            
            <h3>Git in General</h3>
            <img src={gitImage} alt="Git Workflow" />
            <p>
              <strong>Topic 1: Git Locally vs. Globally</strong>
              <br />
              <em>Local Git:</em> Using Git locally on your PC involves creating a repository on your local filesystem,<br /> 
              making commits, and managing branches directly on your machine.<br /> 
              This setup is useful for personal projects and allows for fast operations since everything is local.<br /> 
              However, collaboration is limited without a central repository.
              <br />
              <em>Global Git:</em> Using a cloud-based service like GitHub provides a centralized repository<br /> 
              that multiple developers can access and collaborate on. GitHub offers features like pull requests,<br /> 
              issues, and integration with CI/CD tools, making it essential for team-based projects.<br /> 
              It ensures that all changes are synchronized and accessible from anywhere.
            </p>
            
            <h3>GitHub Actions</h3>
            <p>
              <strong>Topic 2: What are GitHub Actions?</strong>
              <br />
              GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment pipeline.<br /> 
              With GitHub Actions, you can create workflows that are triggered by events such as pushes,<br /> 
              pull requests, and releases.
              <br />
              <em>Using GitHub Actions in DevOps:</em> In a DevOps setup, GitHub Actions can be used to automate various<br /> 
              stages of the software development lifecycle. For example:
              <ul>
                <li>
                  <strong>Continuous Integration:</strong> Automatically run tests and build your application whenever<br /> 
                  code is pushed to the repository.
                </li>
                <li>
                  <strong>Continuous Deployment:</strong> Automatically deploy your application to a staging<br /> 
                  or production environment after passing the tests.
                </li>
                <li>
                  <strong>Automated Workflows:</strong> Automate tasks such as code linting, notifications,<br /> 
                  and version bumps based on repository events.
                </li>
              </ul>
              GitHub Actions integrates seamlessly with other tools and services,<br /> 
              providing a flexible and powerful solution for automating DevOps workflows.
            </p>
          </div>
        );
}