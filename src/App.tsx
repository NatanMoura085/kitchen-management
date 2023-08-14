import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import "primeflex/primeflex.css";

import Ways from "./routes";

const App = () => {
  return (
    <main className="bg-black">
      <Ways />
    </main>
  );
};

export default App;
