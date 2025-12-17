import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="tech-hero">
      {/* Animated Particles Background */}
      <div className="particles-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Diagonal Split Background */}
      <div className="diagonal-bg">
        <div className="diagonal-left"></div>
        <div className="diagonal-right"></div>
      </div>

      {/* Hero Content */}
      <div className="tech-hero__content">
        <div className="hero-badge">🚀 Master the Future of Robotics</div>
        <Heading as="h1" className="tech-hero__title">
          Physical AI &<br />Humanoid Robotics
        </Heading>
        <p className="tech-hero__subtitle">
          Bridge the gap between digital simulation and physical reality.<br />
          Your comprehensive guide to building intelligent robots.
        </p>
        
        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-value">6</div>
            <div className="stat-label">Core Modules</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">40+</div>
            <div className="stat-label">Hours Content</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">Real</div>
            <div className="stat-label">World Projects</div>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link className="cta-button-primary" to="/docs/intro">
            Begin Your Journey →
          </Link>
        </div>
      </div>
    </header>
  );
}

type LearningItem = {
  title: string;
  description: string;
  icon: string;
};

function LearningCard({ title, description, icon }: LearningItem) {
  return (
    <div className="learning-card">
      <div className="learning-icon">{icon}</div>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

type RoadmapItem = {
  phase: string;
  title: string;
  description: string;
};

function RoadmapStep({ phase, title, description }: RoadmapItem) {
  return (
    <div className="roadmap-step">
      <div className="roadmap-phase">{phase}</div>
      <div className="roadmap-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Physical AI & Humanoid Robotics Textbook">
      <HomepageHeader />
      
      {/* What You'll Learn Section */}
      <section className="learning-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What You'll Master</h2>
            <p className="section-subtitle">Six core competencies for building intelligent physical systems</p>
          </div>
          <div className="learning-grid">
            <LearningCard
              title="ROS 2 Control"
              description="Master the Robot Operating System 2. The nervous system of modern robotics."
              icon="🤖"
            />
            <LearningCard
              title="Gazebo Simulation"
              description="Test in the digital twin before deploying to the real world. Physics-accurate simulation."
              icon="🌐"
            />
            <LearningCard
              title="NVIDIA Isaac Sim"
              description="Leverage photorealistic simulation and synthetic data generation for AI training."
              icon="🧠"
            />
            <LearningCard
              title="Vision-Language-Action"
              description="Integrate LLMs with robotics. From voice commands to complex physical actions."
              icon="👁️"
            />
            <LearningCard
              title="Unity Rendering"
              description="High-fidelity visualization and human-robot interaction using the Unity engine."
              icon="🎮"
            />
            <LearningCard
              title="Sim-to-Real Transfer"
              description="Transfer learned policies from simulation to physical hardware with confidence."
              icon="🔄"
            />
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="roadmap-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Your Learning Path</h2>
            <p className="section-subtitle">A structured journey from fundamentals to deployment</p>
          </div>
          <div className="roadmap-timeline">
            <RoadmapStep
              phase="Phase 1"
              title="Foundation & Simulation"
              description="Learn ROS 2 fundamentals and master Gazebo simulation environment"
            />
            <RoadmapStep
              phase="Phase 2"
              title="Advanced Simulation"
              description="Deep dive into NVIDIA Isaac Sim and Unity rendering pipelines"
            />
            <RoadmapStep
              phase="Phase 3"
              title="AI Integration"
              description="Implement Vision-Language-Action models for intelligent control"
            />
            <RoadmapStep
              phase="Phase 4"
              title="Real-World Deployment"
              description="Master sim-to-real transfer and deploy on physical hardware"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Powered By Industry Standards</h2>
            <p className="section-subtitle">Learn the tools used by leading robotics companies</p>
          </div>
          <div className="tech-logos">
            <div className="tech-logo-item">
              <div className="tech-logo">ROS 2</div>
              <span>Robot OS</span>
            </div>
            <div className="tech-logo-item">
              <div className="tech-logo">Gazebo</div>
              <span>Simulation</span>
            </div>
            <div className="tech-logo-item">
              <div className="tech-logo">NVIDIA</div>
              <span>Isaac Sim</span>
            </div>
            <div className="tech-logo-item">
              <div className="tech-logo">Unity</div>
              <span>Rendering</span>
            </div>
            <div className="tech-logo-item">
              <div className="tech-logo">Python</div>
              <span>AI/ML</span>
            </div>
            <div className="tech-logo-item">
              <div className="tech-logo">C++</div>
              <span>Performance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build the Future?</h2>
            <p className="cta-description">
              Start your journey into Physical AI and Humanoid Robotics today.<br />
              No prerequisites required — just curiosity and determination.
            </p>
            <div className="cta-buttons">
              <Link className="cta-button-primary large" to="/docs/intro">
                Start Learning Now →
              </Link>
              <Link className="cta-button-secondary large" to="/docs/overview">
                View Course Outline
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
