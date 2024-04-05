
import './App.css';
import MyBar from './Components/MyBar';
import Heero from './Components/Heero';
import Card from './Components/Card';
import data from './Components/data';






function App() {
  const cards = data.map(item => {
    return (
        <Card 
            img={item.img}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})   


  return (
    <div>
    <MyBar />
    <Heero />
   <section className="cards-list">{cards}</section>
    

    </div>
  )
}

export default App;
