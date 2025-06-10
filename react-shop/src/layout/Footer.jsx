export function Footer() {
    return (
      <footer className="page-footer  teal lighten-2">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} anaesthesia
            <a className="grey-text  teal lighten-4 right" href="#!">
              Repository
            </a>
          </div>
        </div>
      </footer>
    );
  }