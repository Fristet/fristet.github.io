import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">포트폴리오</h1>
        <nav className="nav">
          <a href="#home">홈</a>
          <a href="#projects">프로젝트</a>
          <a href="#blog">블로그</a>
          <a href="#contact">연락처</a>
        </nav>
      </div>
    </header>
  );
}
