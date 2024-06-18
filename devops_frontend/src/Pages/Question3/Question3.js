import React from 'react';
import testingImage from './auto-pyramind.webp';

export default function Question3() {
     return (
          <div>
            <h2>Testing in DevOps Workflow</h2>
            
            <h3>Testing in CI</h3>
            <img src={testingImage} alt="Testing in DevOps" />
            <p>
              <strong>Topic 1: How Test Fits into CI</strong>
              <br />
              Testing is a crucial part of the Continuous Integration (CI) process.<br /> 
              CI is a development practice where developers integrate code into a shared repository frequently.<br /> 
              Each integration is verified by an automated build, allowing teams to detect problems early.
              <br />
              <em>Automating Testing:</em> Automated testing ensures that new code changes do not break<br /> 
              existing functionality. Tests are run automatically whenever code is pushed to the repository,<br /> 
              providing immediate feedback to developers. This includes unit tests, integration tests, and end-to-end tests.
            </p>
            
            <h3>Tools for Efficient Testing</h3>
            <p>
              <strong>Topic 2: Tools from DOC1 Course</strong>
              <br />
              Several tools introduced during the DOC1 course help us work efficiently with testing our code:
              <ul>
                <li>
                  <strong>Jest:</strong> A JavaScript testing framework used for unit and integration testing<br /> 
                  in React applications. Jest is known for its simplicity and ease of use.
                </li>
                <li>
                  <strong>NUnit:</strong> A popular testing framework for .NET applications.<br /> 
                  It allows developers to write and run tests in C#.
                </li>
                <li>
                  <strong>Selenium:</strong> A tool for automating web browsers. It is used for end-to-end testing<br /> 
                  of web applications, ensuring that the UI works as expected.
                </li>
                <li>
                  <strong>GitHub Actions:</strong> A CI/CD platform that allows us to automate testing as part of the CI process.<br /> 
                  We can define workflows that run tests automatically whenever code is pushed to the repository.
                </li>
              </ul>
              These tools integrate seamlessly to support a comprehensive testing strategy, ensuring that our code is reliable and of high quality.
            </p>
          </div>
        );
}