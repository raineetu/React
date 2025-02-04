import ExpenseTracker from "./Components/ExpenseTracker";
import { GlobalProvider } from "./Context/Globalcontext";

function App() {
  return (
    <>
      <GlobalProvider>
        <ExpenseTracker />
      </GlobalProvider>
    </>
  );
}

export default App;
