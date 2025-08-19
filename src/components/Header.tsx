"use client";

import styles from "@/styles/header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && <div className={styles.backdrop} onClick={() => setMenuOpen(false)}></div>}

      <header className={styles.siteHeader}>
        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <nav className={`${styles.mainNav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul>
            <li>
              <a href="#datas" onClick={handleLinkClick}>
                Datas
              </a>
            </li>
            <li>
              <a href="#palestras" onClick={handleLinkClick}>
                Palestras
              </a>
            </li>
            <li>
              <a href="#minicursos" onClick={handleLinkClick}>
                Minicursos
              </a>
            </li>
            <li>
              <a href="#inscricoes" onClick={handleLinkClick}>
                Inscrições
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
