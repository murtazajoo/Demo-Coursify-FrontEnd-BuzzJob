import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="max-w-[1300px] font-roboto p-4 md:px-10 m-auto my-5">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
