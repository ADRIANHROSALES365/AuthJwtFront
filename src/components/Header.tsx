// We define an Interface for our "Constructor Arguments" (Props)
interface HeaderProps {
  title: string;
  subtitle?: string; // The '?' makes it optional
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header style={{ borderBottom: '100px solid #ccc', padding: '1rem' }}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>} 
    </header>
  );
};

export default Header;