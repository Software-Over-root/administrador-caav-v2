import { ContextProvider } from "./Context/Context";
import Router from "./Routes/Router";

function App() {
  return (
    <ContextProvider>
      <Router/>
    </ContextProvider>
  );
}

export default App;
