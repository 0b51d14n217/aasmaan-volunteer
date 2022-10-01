import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInScreen from "./routes/signin";
import SignedIn from "./routes/signedin";
import Home from "./routes/home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignInScreen />}></Route>
          <Route path="/signedin" element={<SignedIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
