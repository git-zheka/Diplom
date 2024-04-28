import style from "./main.module.scss"
import { BrowserRouter, Route } from "react-router-dom";
import AppRouter from "next/dist/client/components/app-router";
import AppRoutes from "./Routes";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homepage/HomePage";

export default function Home() {
  return (

    <main  className={style.App}>
      
      {/* <AppRoutes /> */}
      <HomePage />
      <Footer />
       
    </main> 

  );
}
