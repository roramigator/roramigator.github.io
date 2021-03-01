import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    // do: change Body to Container
    <Body>
      <Header />
      <div className="contact">
        <p className="contact-button">
          <i className="bx bx-mail-send"></i>
          <a href="mailto:roberto@morado.dev" className="contact-email">
            email
          </a>
        </p>
      </div>

      <div className="footer">
        <p className="social">
          <i className="bx bxl-github"></i>
          <i className="bx bxl-twitter"></i>
          <span>@roramigator</span>
        </p>
      </div>
    </Body>
  );
}

export default App;
