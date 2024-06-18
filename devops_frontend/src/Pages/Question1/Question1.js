import React from 'react';
import devopsImage from './devops_loop.png';

export default function Question1() {
     return (
          <div>
            <h2>DevOps Overview</h2>
            
            <h3>DevOps in General</h3>
            <img src={devopsImage} alt="DevOps Loop" />
            <p>
              <strong>Topic 1: What is DevOps?</strong>
              <br />
              DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). <br />
              It aims to shorten the development lifecycle and provide continuous delivery with high software quality.
              <br />
              <em>Effect on Individual Developer:</em> Initially, projects may have involved long development cycles with infrequent integrations,<br />
               leading to challenges in identifying and fixing issues early.<br />
                With DevOps, developers now work in a more collaborative and automated environment,<br /> 
                enabling faster releases, continuous integration, and immediate feedback.
            </p>
            
            <h3>Tools from DOC1 Course</h3>
            <p>
              <strong>Topic 2: How Tools Fit Together in DevOps</strong>
              <br />
              The tools introduced during the DOC1 course work together to create an efficient DevOps environment:
              <ul>
                <li>
                  <strong>GitHub:</strong> Provides version control and collaborative features,<br /> 
                  essential for managing source code and tracking changes.
                </li>
                <li>
                  <strong>Docker:</strong> Containerizes applications, ensuring consistency across different<br /> 
                  environments and simplifying deployment processes.
                </li>
                <li>
                  <strong>Kubernetes:</strong> Orchestrates containerized applications, automating deployment,<br /> 
                  scaling, and management of containers.
                </li>
                <li>
                  <strong>GitHub Actions:</strong> Automates workflows, enabling continuous integration and continuous deployment (CI/CD)<br /> 
                  pipelines directly within GitHub.
                </li>
                <li>
                  <strong>Jest and NUnit:</strong> Testing frameworks for JavaScript and C# respectively,<br /> 
                  ensuring code quality and reliability through automated testing.
                </li>
              </ul>
              These tools integrate seamlessly to support a DevOps culture, enhancing collaboration, automation,<br /> 
              and continuous improvement in software projects.
            </p>
          </div>
        );
      };
