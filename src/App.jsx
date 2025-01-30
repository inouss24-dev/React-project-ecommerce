import BrowseStyle from "./components/BrowseStyle"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NewArrivals from "./components/NewArrivals"
import Newsletter from "./components/Newsletter"
import TopSelling from "./components/TopSelling"
import UserReactions from "./components/UserReactions"


// function App() {

//   return (
//     <>
//       <div>
//         <Navbar />
//         <Hero />
//         <NewArrivals />
//         <TopSelling />
//         <BrowseStyle />
//         <UserReactions />
//         <Newsletter />
//         <Footer />
//       </div>
//     </>
//   )
// }

function App() {
  return (
    <>
      <div className="mx-2">
        <Navbar />
        <Hero />
        <NewArrivals />
        <TopSelling />
        <BrowseStyle />
        <UserReactions />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App
