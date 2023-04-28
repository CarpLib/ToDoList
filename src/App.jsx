import "./App.css";

// FontAwasome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRectangleList,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
library.add(faRectangleList, faTrashCan);

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
