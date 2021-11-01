
function ListRooms(props) {
    // The count is to allow for each list item to have a unique key
    // If each object within the list contained a key then we could use that
    var count = -1;
    const roomList = props.rooms.map(room => {
        count++;
        return(<li key={count}>{room.room_type}, 
            {room.vacant_rooms}, 
            {room.price}</li>)   
    })
    return (
      <div>
      <ol>
        {roomList}
      </ol>
      </div>
    );
  }

export default ListRooms;