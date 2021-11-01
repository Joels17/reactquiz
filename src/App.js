import './App.css';
import ListRooms from './components/ListRooms.js'
import MyFunc from './components/MyFunc';
const rooms = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 }
]
function App() {

  return (

    <div>
      <ListRooms rooms={rooms} /> 
      <MyFunc />
    </div>
  );
}

export default App;
