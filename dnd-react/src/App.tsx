import AppRoute from "./routes/AppRoute";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AppRoute />
      </main>
    </>
  );
};

export default App;
