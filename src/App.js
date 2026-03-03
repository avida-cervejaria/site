import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content">

        {/* Blazon — secondary visual, displayed above the typographic logo */}
        <picture>
          <source
            srcSet="/images/blazon-200.png 2x, /images/blazon-100.png 1x"
            type="image/png"
          />
          <img
            src="/images/blazon-100.png"
            srcSet="/images/blazon-200.png 2x"
            alt=""
            className="brand-blazon"
          />
        </picture>

        {/* Typographic logo — main brand identity */}
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet="/images/logo-560.png 2x, /images/logo-280.png 1x"
            type="image/png"
          />
          <source
            srcSet="/images/logo-920.png 2x, /images/logo-460.png 1x"
            type="image/png"
          />
          <img
            src="/images/logo-460.png"
            alt="Ávida"
            className="brand-logo"
          />
        </picture>

        <p>Um brinde a nada menos que tudo.</p>

        <a href="https://www.instagram.com/bebaavida" target="_blank" rel="noopener noreferrer" className="instagram-link">
          Siga @bebaavida no Instagram
        </a>

        <footer className="footer">
          SETA INDUSTRIA DE BEBIDAS LTDA | CNPJ: 63.943.201/0001-42
        </footer>
      </div>
    </div>
  );
}

export default App;
