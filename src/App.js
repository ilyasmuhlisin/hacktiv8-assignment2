import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentPage from "./page/ContentPage";

function App() {
  return (
    <BrowserRouter>
      <ContentPage />
      {/* <Routes>
          <Route path="/" element={<HomeScreen />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
