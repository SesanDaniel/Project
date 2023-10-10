import Header from "./components/header";
import Nav from "./components/navbar";
// import background from "./assets/images/pexels-oliver-sjöström-1078983.jpg";
import "./App.css";

function App() {
  return (
    <div
      className="main-section">
      <Nav />
      <Header />
      <main>
        <h1>Welcome to Yemz Apparels</h1>
      </main>
    </div>
  );
}

export default App;
