import React from 'react';
import './App.css';
import ListRooms from './components/ListRooms.js'
import MyFunc from './components/MyFunc';
import WeatherSearch from './components/WeatherSearch';
const rooms = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 }
]

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.sum));
  }, []);

  return (

    <div>
      <h2>Q1</h2>
      <ListRooms rooms={rooms} /> 
      <h2>Q2</h2>
      <MyFunc />
      <h2>Q3</h2>
      <p>{!data ? "Loading..." : data}</p>
      <h2>Q5</h2>
      <WeatherSearch />
    </div>
  );
}

export default App;
