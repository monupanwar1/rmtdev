import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
    <BackgroundHeading/>
    <main>
      <Header/>
      <ItemsList/>
      <Sidebar/>
    </main>
    <Footer/>
    </>
  )
}