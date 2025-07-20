import styles from '@/app/page.module.css';

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <nav className={styles.mainNav}>
        <ul>
          <li><a href="#datas">Datas</a></li>
          <li><a href="#palestras">Palestras</a></li>
          <li><a href="#minicursos">Minicursos</a></li>
          <li><a href="#inscricoes">Inscrições</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;