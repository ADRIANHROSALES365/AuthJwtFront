// We define an Interface for our "Constructor Arguments" (Props)
interface HeaderProps {
  title: string;
  subtitle?: string; // The '?' makes it optional
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header style={{ borderBottom: '1px solid #ccc', padding: '1rem', marginBottom: '20px' }}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>} 
    </header>
  );
};

export default Header;