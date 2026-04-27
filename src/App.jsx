import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Database, BarChart3, Activity, Layers, ChevronRight, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css'; // Though empty, good practice to keep the import
import './index.css';

// Project Images
import proj1 from './assets/project1.png';
import proj2 from './assets/project2.png';
import proj3 from './assets/project3.png';
import proj4 from './assets/project4.png';
import profileImg from './assets/profile.jpg';

const projects = [
  {
    id: 1,
    title: "Restaurant Performance & Optimization",
    category: "Business Analytics",
    description: "Analyzed restaurant transactional sales data to evaluate revenue structure, operational efficiency, and customer satisfaction. Assessed revenue concentration risks and simulated sensitivity models.",
    image: proj1,
    tech: ["Google Sheets", "Pivot Tables", "Scenario Modeling"],
    link: "https://github.com/dakshbatra01/DVA_Capstone_G2"
  },
  {
    id: 2,
    title: "FinShield: Loan Risk Prediction",
    category: "Financial Analytics",
    description: "Developed a data-driven risk segmentation framework to identify key financial factors driving loan defaults. Validated LTV & DTI dual-band policies to optimize borrower screening and portfolio performance.",
    image: proj2,
    tech: ["Python", "Statistical Analysis", "Tableau"],
    link: "https://github.com/dakshbatra01/SectionD_G1_FinShield"
  },
  {
    id: 3,
    title: "Netflix Content Strategy Analysis",
    category: "Entertainment Analytics",
    description: "Built an interactive Tableau dashboard bridging SQL databases to visualize Netflix's content distribution. Features include genre trend analysis, geographic audience heatmaps, and rating distributions.",
    image: proj3,
    tech: ["Tableau", "MySQL", "Advanced Excel", "Seaborn"],
    link: "https://github.com/dakshbatra01/Netflix_Data_Analysis"
  },
  {
    id: 4,
    title: "HR Attrition Analytics",
    category: "People Analytics",
    description: "Designed an HR analytics dashboard to investigate organizational attrition patterns. Visualized key metrics across demographics, departments, and income levels using stacked histograms and density charts to enable targeted retention strategies.",
    image: proj4,
    tech: ["Data Visualisation", "Dashboard Design", "Statistical Modeling"],
    link: "https://github.com/dakshbatra01/HR_Attrition_Analysis"
  }
];

const Skills = [
  { 
    name: "Data Visualization & BI", 
    icon: Layers, 
    color: "var(--accent-cyan)",
    tools: ["Tableau", "PowerBI", "Seaborn", "Matplotlib"] 
  },
  { 
    name: "Data Processing & Analysis", 
    icon: Database, 
    color: "var(--accent-purple)",
    tools: ["Pandas", "NumPy", "SQL", "Excel"] 
  },
  { 
    name: "Predictive Analytics", 
    icon: BarChart3, 
    color: "var(--accent-emerald)",
    tools: ["Python", "Statistical Modeling", "Machine Learning"] 
  },
  { 
    name: "Business Strategy & Ops", 
    icon: Activity, 
    color: "#f59e0b",
    tools: ["Scenario Modeling", "KPI Tracking", "Risk Segmentation"] 
  }
];

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="portfolio-container">
      {/* Background Decor */}
      <div className="dva-background-container">
        <motion.div className="dva-grid" style={{ y }} />
        <motion.div style={{ y, width: '100%', height: '100%', position: 'absolute' }}>
          <div className="data-node node-1" />
          <div className="data-node node-2" />
          <div className="data-node node-3" />
        </motion.div>
      </div>

      {/* Navbar */}
      <nav style={styles.nav}>
        <div style={styles.logo}>DVA | <span className="accent-gradient">Daksh Batra</span></div>
        <div style={styles.navLinks}>
          <a href="#work" className="nav-item" style={styles.navItem}>Work</a>
          <a href="#expertise" className="nav-item" style={styles.navItem}>Expertise</a>
          <a href="#contact" className="nav-item" style={styles.navItem}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={styles.heroContent}
          >
            <h1 style={styles.heroTitle}>
              Transforming Complex Data into <br/>
              <span className="accent-gradient">Actionable Intelligence.</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Building high-performance data interfaces, predictive models, and immersive visual analytics tools that drive strategic decisions.
            </p>
            <div style={styles.heroActions}>
              <a href="#work" style={styles.primaryBtn}>
                Explore Projects <ChevronRight size={18} />
              </a>
              <a href="#contact" style={styles.secondaryBtn}>
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={styles.heroImageContainer}
          >
            <div style={styles.profileGlow}></div>
            <img src={profileImg} alt="Daksh Batra" style={styles.profileImage} />
          </motion.div>
        </div>
      </section>

      {/* Skills / Expertise */}
      <section id="expertise" style={styles.section}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={styles.sectionHeader}
        >
          <h2 style={styles.sectionTitle}>Technical Expertise</h2>
          <div style={styles.titleLine}></div>
        </motion.div>
        
        <div style={styles.skillsGrid}>
          {Skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel"
              style={styles.skillCard}
            >
              <skill.icon size={32} color={skill.color} style={{ marginBottom: '1rem' }} />
              <h3 style={{ ...styles.skillName, color: skill.color }}>{skill.name}</h3>
              <div style={styles.skillTools}>
                {skill.tools.map(tool => (
                  <span key={tool} style={{ 
                    ...styles.skillToolTag, 
                    borderBottom: `2px solid ${skill.color}` 
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="work" style={styles.section}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={styles.sectionHeader}
        >
          <h2 style={styles.sectionTitle}>Selected Work</h2>
          <div style={styles.titleLine}></div>
        </motion.div>

        <div style={styles.projectsContainer}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel"
              style={{
                ...styles.projectCard,
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}
            >
              <div style={styles.projectImageContainer}>
                <img src={project.image} alt={project.title} style={styles.projectImage} />
                <div style={styles.imageOverlay}></div>
              </div>
              
              <div style={styles.projectInfo}>
                <div style={styles.projectCategory}>{project.category}</div>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.description}</p>
                
                <div style={styles.techStack}>
                  {project.tech.map(tech => (
                    <span key={tech} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
                
                <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel="noopener noreferrer" style={styles.projectLink}>
                  View Case Study <ExternalLink size={16} style={{ marginLeft: 8 }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <div style={styles.footerContent}>
          <h2 style={styles.footerTitle}>Ready to leverage your data?</h2>
          <p style={styles.footerText}>Let's build intelligent solutions together.</p>
          
          <div style={styles.socialLinks}>
            <a href="mailto:daksh.batra2024@nst.rishihood.edu.in" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><Mail size={24} /></a>
            <a href="https://github.com/dakshbatra01" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/daksh-batra-124814317/" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaLinkedin size={24} /></a>
          </div>
        </div>
        <div style={styles.copyright}>
          © {new Date().getFullYear()} Daksh Batra. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// Inline styles for rapid custom layout (combined with index.css generic variables)
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 5%',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
    background: 'rgba(5, 8, 14, 0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.25rem',
    fontWeight: 700,
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navItem: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'color 0.3s ease',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5%',
    position: 'relative',
  },
  heroInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    gap: '4rem',
    zIndex: 10,
    flexWrap: 'wrap-reverse',
  },
  heroContent: {
    flex: '1',
    minWidth: '300px',
  },
  heroImageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    minWidth: '300px',
  },
  profileGlow: {
    position: 'absolute',
    width: '110%',
    height: '110%',
    background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 60%)',
    filter: 'blur(40px)',
    opacity: 0.3,
    zIndex: -1,
  },
  profileImage: {
    width: '100%',
    maxWidth: '380px',
    aspectRatio: '1',
    objectFit: 'cover',
    borderRadius: '30%',
    border: '2px solid rgba(255,255,255,0.1)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    marginBottom: '1.5rem',
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    maxWidth: '600px',
  },
  heroActions: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #4f46e5, #7e22ce)',
    color: '#fff',
    borderRadius: '30px',
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)',
  },
  secondaryBtn: {
    padding: '1rem 2rem',
    background: 'transparent',
    color: 'var(--text-primary)',
    borderRadius: '30px',
    fontFamily: 'var(--font-heading)',
    fontWeight: 500,
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'background 0.3s',
  },
  section: {
    padding: '4rem 5%',
  },
  sectionHeader: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  titleLine: {
    height: '4px',
    width: '60px',
    background: 'var(--accent-purple)',
    borderRadius: '2px',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  skillCard: {
    padding: '2.5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease, background 0.3s ease',
    cursor: 'default',
  },
  skillName: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: '0.8rem',
    letterSpacing: '0.5px',
  },
  skillTools: {
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
  },
  skillToolTag: {
    fontSize: '1rem',
    fontWeight: '600',
    padding: '0.5rem 1rem',
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--text-primary)',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  projectsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  projectCard: {
    display: 'flex',
    gap: '4rem',
    padding: '2rem',
    alignItems: 'center',
    // Responsive wrapping handled via media queries ideally, but simulated here via flexWrap
    flexWrap: 'wrap', 
  },
  projectImageContainer: {
    flex: '1.2',
    minWidth: '300px',
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)',
    pointerEvents: 'none',
  },
  projectInfo: {
    flex: '1',
    minWidth: '300px',
  },
  projectCategory: {
    color: 'var(--accent-cyan)',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-heading)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '2.2rem',
    marginBottom: '1rem',
  },
  projectDesc: {
    color: 'var(--text-secondary)',
    fontSize: '1.05rem',
    marginBottom: '2rem',
  },
  techStack: {
    display: 'flex',
    gap: '0.8rem',
    flexWrap: 'wrap',
    marginBottom: '2.5rem',
  },
  techTag: {
    padding: '0.4rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  projectLink: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-heading)',
    fontSize: '1rem',
    cursor: 'pointer',
    paddingBottom: '4px',
    borderBottom: '1px solid var(--accent-purple)',
    transition: 'color 0.3s ease',
  },
  footer: {
    marginTop: '3rem',
    padding: '4rem 5% 2rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    textAlign: 'center',
  },
  footerContent: {
    marginBottom: '4rem',
  },
  footerTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  footerText: {
    color: 'var(--text-secondary)',
    marginBottom: '2.5rem',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    transition: 'transform 0.3s ease, background 0.3s ease',
  },
  copyright: {
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
  }
};

export default App;
