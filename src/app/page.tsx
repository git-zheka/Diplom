import style from "./main.module.scss"
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homepage/HomePage";

export default function Home() {
  return (
    <main  className={style.App}>

      <HomePage />
       
    </main> 

  );
}
