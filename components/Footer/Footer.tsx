import css from './Footer.module.css';

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Huminiuk Vladyslav</p>
          <p>
            Contact me:
            <a href="mailto:vldgum@gmail.com">vldgum@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
