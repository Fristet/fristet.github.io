import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import BlogCard from './components/BlogCard'
import projectsData from './data/projects.json'
import blogData from './data/blog.json'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <>
      <Header />
      
      <main className="container">
        {/* 홈 섹션 */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>안녕하세요! 👋</h1>
            <p>나는 웹 개발자이자 창의적인 문제 해결사입니다.</p>
            <p className="hero-subtitle">React, JavaScript, 그리고 현대적인 웹 기술을 사랑합니다.</p>
            <button className="cta-button" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              내 작업 보기
            </button>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className="projects-section">
          <h2>🚀 내 프로젝트</h2>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 블로그 섹션 */}
        <section id="blog" className="blog-section">
          <h2>📝 블로그</h2>
          <div className="blog-grid">
            {blogData.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="contact-section">
          <h2>💬 연락처</h2>
          <div className="contact-content">
            <p>함께 일할 기회가 있다면 언제든 연락주세요!</p>
            <div className="contact-links">
              <a href="mailto:your@email.com" className="contact-link">Email</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App

