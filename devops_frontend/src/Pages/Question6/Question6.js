import React from 'react';
import containerImage from './Kubernetes-Architecture.webp';

export default function Question6() {
     return (
          <div>
            <h2>Containers and Container Management</h2>
            
            <h3>What is a Container?</h3>
            <img src={containerImage} alt="Containers" style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
            <p>
              <strong>Topic 1: What is a Container?</strong>
              <br />
              A container is a lightweight, standalone executable package that includes everything needed<br /> 
              to run a piece of software, including the code, runtime, libraries, and system tools.<br /> 
              Containers isolate applications from their environment, ensuring that they work uniformly regardless<br /> 
              of where they are deployed.
              <br />
              <em>Containers in CI/CD Workflows:</em> Containers are integral to setting up efficient CI/CD workflows.<br /> 
              In Continuous Integration (CI), containers provide a consistent environment for running automated tests,<br /> 
              ensuring that code behaves the same way in different stages of the pipeline.<br /> 
              In Continuous Delivery/Deployment (CD), containers simplify the deployment process by<br /> 
              encapsulating all dependencies, allowing for consistent and reliable releases across different environments.
            </p>
            
            <h3>Container Management Tools</h3>
            <p>
              <strong>Topic 2: Docker Compose and Kubernetes</strong>
              <br />
              <em>Docker Compose:</em> Docker Compose is a tool for defining and running multi-container<br /> 
              Docker applications. It allows you to use a YAML file to configure your application's services,<br /> 
              making it easy to manage and run complex applications with multiple containers.
              <ul>
                <li>
                  <strong>Purpose:</strong> Simplifies the process of managing multi-container applications.<br /> 
                  Ideal for local development and testing environments.
                </li>
                <li>
                  <strong>Use Case:</strong> Use Docker Compose when you need to run multiple services<br /> 
                  that depend on each other (e.g., a web application with a database) and want to manage<br /> 
                  them with a single command.
                </li>
              </ul>
              <br />
              <em>Kubernetes (K8s):</em> Kubernetes is an open-source platform for automating the deployment,<br /> 
              scaling, and management of containerized applications. Minikube is a tool that lets you run Kubernetes locally.
              <ul>
                <li>
                  <strong>Purpose:</strong> Provides a robust and scalable framework for managing containerized<br /> 
                  applications in production. It automates deployment, scaling, and operations of application<br /> 
                  containers across clusters of hosts.
                </li>
                <li>
                  <strong>Use Case:</strong> Use Kubernetes for production environments where you need to<br /> 
                  ensure high availability, scalability, and automated management of your applications.
                </li>
              </ul>
              By using these tools, we can streamline the management of containerized applications,<br /> 
              ensuring that they run efficiently and reliably across different environments.
            </p>
          </div>
        );
}