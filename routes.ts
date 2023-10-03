routes.js
import { Routes, Route } from "react-router-dom";
<div id="main-section">
  <Routes>{/* Define your individual routes here */}</Routes>
    < /div>;
//Replace the content of your "main-section" div with the Routes component:

<Routes>
  <Route path="/blue" element={<h1>This is the Blue Page</h1>} />
  <Route path="/red" element={<h1>This is the Red Page</h1>} />
</Routes>


function App() {
  return (
    <div>
      {/* Your other components */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

//Replace <Home />, <About />, and <Contact /> with the components you want to render for each route.