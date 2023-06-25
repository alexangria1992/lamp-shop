import Header from "./Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="left">
          <p className="description">
            Collection of lighting is inspired by the geometric works of the
            great Suprematist artists Kissitzky and Kazimir Malevich. <br />
            <br />
            Suprematism is a modernist movement in the art of the early
            twentieth century, focused on the basic geometric forms, such as
            circles, squares, lines and rectangles. The geometric structure of
            the lamps will always look like a small art objects in your house.
          </p>
          <div className="metas"></div>
        </div>
        <div
          className="right"
          style={{ backgroundImage: "url('/Mask Group.png')" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
