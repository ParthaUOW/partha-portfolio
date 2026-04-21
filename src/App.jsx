import portlogo from "./assets/portlogo.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="/" className="logo-link">
          <img src={portlogo} alt="Partha Logo" className="logo" />
        </a>

        <div className="nav-links">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-grid">
          <div>
            <p className="hero-tag">Software Engineering Graduate</p>

            <h1 className="hero-title">
              Hi, I’m Partha.
              <br />
              I build modern web experiences.
            </h1>

            <p className="hero-text">
              I’m a Software Engineering graduate based in Wollongong,
              Australia, focused on building modern web applications using
              React, FastAPI, and Supabase. I enjoy creating clean UI, solving
              real problems, and developing practical, user-focused projects.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button-link">
                <button className="primary-button">View Projects</button>
              </a>

              <a href="#contact" className="button-link">
                <button className="secondary-button">Contact Me</button>
              </a>

              <a href="/Arabinda_Saha_Resume.pdf" download className="button-link">
                <button className="secondary-button">Download Resume</button>
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="hero-photo-card">Add Your Photo Here</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p className="body-text">
            I am a Software Engineering graduate with a strong interest in
            frontend and full-stack development. I have experience building
            projects using React, Python, FastAPI, and Supabase, focusing on
            usability, clean design, and practical outcomes.
          </p>
          <p className="body-text about-spacing">
            I am currently seeking opportunities where I can apply my technical
            skills, continue learning, and contribute to real-world software
            development projects in a collaborative environment.
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          <div className="card">
            <h3 className="skill-title">Frontend</h3>
            <p className="body-text">React, JavaScript, HTML, CSS</p>
          </div>

          <div className="card">
            <h3 className="skill-title">Backend</h3>
            <p className="body-text">Python, FastAPI, REST APIs</p>
          </div>

          <div className="card">
            <h3 className="skill-title">Database & Tools</h3>
            <p className="body-text">Supabase, Git, GitHub</p>
          </div>

          <div className="card">
            <h3 className="skill-title">Design</h3>
            <p className="body-text">UI/UX Design, Responsive Layouts</p>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <h2 className="section-title">Featured Project</h2>

        <div className="card featured-project">
          <div>
            <h3 className="project-title featured-project-title">
              Smart Notes App
            </h3>
            <p className="body-text">
              A React-based notes application with note creation, deletion, and
              persistent storage using localStorage. Built to strengthen my
              frontend fundamentals and state management skills.
            </p>

            <p className="tech-stack">
              Tech Stack: React, JavaScript, HTML, CSS, LocalStorage
            </p>

            <div className="project-buttons">
              <a
                href="https://github.com/ParthaUOW"
                target="_blank"
                rel="noreferrer"
                className="button-link"
              >
                <button className="primary-button">GitHub</button>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="button-link"
              >
                <button className="secondary-button">Live Demo</button>
              </a>
            </div>
          </div>

          <div className="project-screenshot">Project Screenshot Here</div>
        </div>

        <h2 className="section-title">More Projects</h2>

        <div className="projects-grid">
          <div className="card">
            <h3 className="project-title">Portfolio Website</h3>
            <p className="body-text">
              A personal portfolio website built with React to showcase my
              projects, technical skills, and professional profile in a clean
              and modern format.
            </p>
          </div>

          <div className="card">
            <h3 className="project-title">Full Stack Project (Upcoming)</h3>
            <p className="body-text">
              A planned full-stack web application integrating React frontend
              with Supabase backend for authentication, real-time data, and
              persistent storage.
            </p>
          </div>

          <div className="card">
            <h3 className="project-title">More Coming Soon</h3>
            <p className="body-text">
              I am actively building new projects to strengthen my portfolio and
              demonstrate practical development skills.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2 className="section-title">Contact</h2>

        <div className="card">
          <p className="body-text contact-intro">
            I’m open to internships, graduate opportunities, and collaborative
            software projects.
          </p>

          <div className="contact-details">
            <p>
              Email:{" "}
              <a
                href="mailto:official.neo.partha@gmail.com"
                className="contact-link"
              >
                official.neo.partha@gmail.com
              </a>
            </p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/ParthaUOW"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                github.com/ParthaUOW
              </a>
            </p>

            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/arabinda-saha-partha-72923b226"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                linkedin.com/in/arabinda-saha-partha-72923b226
              </a>
            </p>

            <p>Location: Wollongong, NSW, Australia</p>
          </div>
        </div>
      </section>

      <footer className="footer">© 2026 Partha Saha · Built with React</footer>
    </div>
  );
}

export default App;