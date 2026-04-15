import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(158,255,31,0.08), transparent 30%), #0b0b0b",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #1f1f1f",
          backgroundColor: "rgba(11,11,11,0.9)",
          backdropFilter: "blur(8px)",
          position: "sticky",
          top: 0,
          zIndex: 10,
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <a href="/" style={{ display: "flex", alignItems: "center" }}>
  <img
    src="/logo.png"
    alt="Partha Logo"
    style={{
      height: "40px",
      objectFit: "contain",
    }}
  />
</a>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a href="#about" style={navLinkStyle}>
            About
          </a>
          <a href="#skills" style={navLinkStyle}>
            Skills
          </a>
          <a href="#projects" style={navLinkStyle}>
            Projects
          </a>
          <a href="#contact" style={navLinkStyle}>
            Contact
          </a>
        </div>
      </nav>

      <section
        style={{
          padding: "90px 20px 70px",
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div>
            <p
              style={{
                color: "#9eff1f",
                letterSpacing: "3px",
                textTransform: "uppercase",
                marginBottom: "12px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              Software Engineering Graduate
            </p>

            <h1
              style={{
                fontSize: "62px",
                margin: "0 0 20px",
                lineHeight: 1.05,
                color: "#ffffff",
                fontWeight: "bold",
                textShadow: "0 0 20px rgba(158,255,31,0.15)",
              }}
            >
              Hi, I’m Partha.
              <br />
              I build modern web experiences.
            </h1>

            <p
              style={{
                maxWidth: "650px",
                margin: "0 0 30px",
                color: "#d1d5db",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              I’m a Software Engineering graduate based in Wollongong,
              Australia, focused on building modern web applications using
              React, FastAPI, and Supabase. I enjoy creating clean UI, solving
              real problems, and developing practical, user-focused projects.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <a href="#projects" style={{ textDecoration: "none" }}>
                <button style={primaryButtonStyle}>View Projects</button>
              </a>

              <a href="#contact" style={{ textDecoration: "none" }}>
                <button style={secondaryButtonStyle}>Contact Me</button>
              </a>

              <a
                href="#"
                style={{ textDecoration: "none" }}
                onClick={(e) => e.preventDefault()}
              >
                <button style={secondaryButtonStyle}>Download Resume</button>
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "320px",
                height: "380px",
                borderRadius: "24px",
                background:
                  "linear-gradient(180deg, rgba(158,255,31,0.18), rgba(255,255,255,0.03))",
                border: "1px solid #2b2b2b",
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9eff1f",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Add Your Photo Here
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle} id="about">
        <h2 style={sectionTitleStyle}>About Me</h2>
        <div style={cardStyle}>
          <p style={bodyTextStyle}>
            I am a Software Engineering graduate with a strong interest in
            frontend and full-stack development. I have experience building
            projects using React, Python, FastAPI, and Supabase, focusing on
            usability, clean design, and practical outcomes.
          </p>
          <p style={{ ...bodyTextStyle, marginTop: "16px" }}>
            I am currently seeking opportunities where I can apply my technical
            skills, continue learning, and contribute to real-world software
            development projects in a collaborative environment.
          </p>
        </div>
      </section>

      <section style={sectionStyle} id="skills">
        <h2 style={sectionTitleStyle}>Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={skillTitleStyle}>Frontend</h3>
            <p style={bodyTextStyle}>React, JavaScript, HTML, CSS</p>
          </div>

          <div style={cardStyle}>
            <h3 style={skillTitleStyle}>Backend</h3>
            <p style={bodyTextStyle}>Python, FastAPI, REST APIs</p>
          </div>

          <div style={cardStyle}>
            <h3 style={skillTitleStyle}>Database & Tools</h3>
            <p style={bodyTextStyle}>Supabase, Git, GitHub</p>
          </div>

          <div style={cardStyle}>
            <h3 style={skillTitleStyle}>Design</h3>
            <p style={bodyTextStyle}>UI/UX Design, Responsive Layouts</p>
          </div>
        </div>
      </section>

      <section style={sectionStyle} id="projects">
        <h2 style={sectionTitleStyle}>Featured Project</h2>

        <div
          style={{
            ...cardStyle,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <div>
            <h3 style={{ ...projectTitleStyle, fontSize: "28px" }}>
              Smart Notes App
            </h3>
            <p style={bodyTextStyle}>
              A React-based notes application with note creation, deletion, and
              persistent storage using localStorage. Built to strengthen my
              frontend fundamentals and state management skills.
            </p>

            <p
              style={{
                color: "#9ca3af",
                marginTop: "16px",
                marginBottom: "18px",
              }}
            >
              Tech Stack: React, JavaScript, HTML, CSS, LocalStorage
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://github.com/ParthaUOW"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button style={primaryButtonStyle}>GitHub</button>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{ textDecoration: "none" }}
              >
                <button style={secondaryButtonStyle}>Live Demo</button>
              </a>
            </div>
          </div>

          <div
            style={{
              minHeight: "240px",
              borderRadius: "18px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(158,255,31,0.10))",
              border: "1px solid #2b2b2b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9eff1f",
              fontWeight: "bold",
            }}
          >
            Project Screenshot Here
          </div>
        </div>

        <h2 style={sectionTitleStyle}>More Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={projectTitleStyle}>Portfolio Website</h3>
            <p style={bodyTextStyle}>
              A personal portfolio website built with React to showcase my
              projects, technical skills, and professional profile in a clean
              and modern format.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={projectTitleStyle}>Full Stack Project (Upcoming)</h3>
            <p style={bodyTextStyle}>
              A planned full-stack web application integrating React frontend
              with Supabase backend for authentication, real-time data, and
              persistent storage.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={projectTitleStyle}>More Coming Soon</h3>
            <p style={bodyTextStyle}>
              I am actively building new projects to strengthen my portfolio and
              demonstrate practical development skills.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle} id="contact">
        <h2 style={sectionTitleStyle}>Contact</h2>

        <div style={cardStyle}>
          <p style={{ ...bodyTextStyle, marginBottom: "18px" }}>
            I’m open to internships, graduate opportunities, and collaborative
            software projects.
          </p>

          <div style={{ color: "#cfcfcf", lineHeight: 1.9 }}>
            <p>
              Email:{" "}
              <a
                href="mailto:official.neo.partha@gmail.com"
                style={{ color: "#9eff1f", textDecoration: "none" }}
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
                style={{ color: "#9eff1f", textDecoration: "none" }}
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
                style={{ color: "#9eff1f", textDecoration: "none" }}
              >
                linkedin.com/in/arabinda-saha-partha-72923b226
              </a>
            </p>

            <p>Location: Wollongong, NSW, Australia</p>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #1f1f1f",
          marginTop: "40px",
          padding: "24px 40px",
          textAlign: "center",
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        © 2026 Partha Saha · Built with React
      </footer>
    </div>
  );
}

const navLinkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  fontSize: "15px",
};

const sectionStyle = {
  padding: "30px 40px 70px",
  maxWidth: "1150px",
  margin: "0 auto",
};

const sectionTitleStyle = {
  fontSize: "34px",
  marginBottom: "20px",
  color: "#ffffff",
};

const cardStyle = {
  backgroundColor: "#121212",
  border: "1px solid #1f1f1f",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const bodyTextStyle = {
  color: "#cfcfcf",
  lineHeight: 1.8,
  fontSize: "16px",
  margin: 0,
};

const projectTitleStyle = {
  marginTop: 0,
  marginBottom: "12px",
  color: "#9eff1f",
  fontSize: "22px",
};

const skillTitleStyle = {
  marginTop: 0,
  marginBottom: "10px",
  color: "#9eff1f",
  fontSize: "20px",
};

const primaryButtonStyle = {
  backgroundColor: "#9eff1f",
  color: "#000",
  border: "none",
  padding: "14px 24px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
};

const secondaryButtonStyle = {
  backgroundColor: "transparent",
  color: "#fff",
  border: "1px solid #3a3a3a",
  padding: "14px 24px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
};

export default App;