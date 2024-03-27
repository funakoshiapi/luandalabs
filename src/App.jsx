import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import { Main } from "./Components/Main";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Main/>}>
      </Route>
      <Route path="privacypolicy" element={<PrivacyPolicy/>}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
