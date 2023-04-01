export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Home
      </a>
      <ul>
        <li className="active">
          <a href="/podcast">Podcast</a>
        </li>
        <li className="active">
          <a href="/movieList">Movie List</a>
        </li>
      </ul>
    </nav>
  );
}
