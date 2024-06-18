import React from 'react';
import cdImage from '../Question4/cicd_pipeline_infograph.png';

export default function Question5() {
     return (
          <div>
            <h2>Continuous Delivery/Deployment (CD)</h2>
            
            <h3>The Concept of CD</h3>
            <img src={cdImage} alt="CD Workflow" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            <p>
              <strong>Topic 1: What is Continuous Delivery/Deployment (CD)?</strong>
              <br />
              Continuous Delivery (CD) is a software development practice where code changes are automatically<br /> 
              prepared for a release to production. It extends Continuous Integration by ensuring that the<br /> 
              integrated code can be deployed quickly and safely to production at any time.
              <br />
              Continuous Deployment (CD) goes a step further by automatically deploying every change<br /> 
              that passes the automated tests to production. This eliminates the manual approval<br /> 
              process and ensures that new features and fixes are delivered to users as soon as they are ready.
              <br />
              <em>CD in the DevOps Universe:</em> CD is a key practice in DevOps,<br /> 
              promoting a culture of continuous improvement and collaboration.<br /> 
              By automating the deployment process, CD reduces the risk of human error,<br /> 
              speeds up the release cycle, and allows for faster feedback and iteration.
            </p>
            
            <h3>Tools for Efficient CD Workflow</h3>
            <p>
              <strong>Topic 2: Tools from DOC1 Course</strong>
              <br />
              Several tools introduced during the DOC1 course help us create an efficient CD workflow:
              <ul>
                <li>
                  <strong>GitHub Actions:</strong> A CI/CD platform integrated with GitHub that allows<br /> 
                  us to automate the entire build, test, and deployment process.<br /> 
                  It supports complex workflows and integrates seamlessly with other tools.
                </li>
                <li>
                  <strong>Kubernetes:</strong> An orchestration platform that automates the deployment,<br /> 
                  scaling, and management of containerized applications.<br /> 
                  It ensures that applications are deployed consistently across different environments.
                </li>
                <li>
                  <strong>Docker:</strong> A platform for containerizing applications,<br /> 
                  making them portable and ensuring they run consistently in different environments.<br /> 
                  Docker simplifies the deployment process and integrates well with CD tools.
                </li>
              </ul>
              These tools enable us to automate the deployment process, ensuring that our code is continuously<br /> 
              delivered and deployed, leading to faster release cycles and higher quality software.
            </p>
          </div>
        );
}