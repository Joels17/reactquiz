
function MyFunc(props) {

    return (
      <div>
        {MyFuncCall(29)}
      </div>
    );
  }

function MyFuncCall(number){
    let listOfElements = []
    if(number%2 === 0)
        listOfElements.push(<p key="foo">foo</p>)
    if(number%7 === 0)
        listOfElements.push(<p key="bar">bar</p>)
    if(number%14 === 0)
        listOfElements.push(<p key="foobar">foobar</p>)
    if(listOfElements.length === 0)
        listOfElements.push(<p key="number">{number}</p>)
    return(listOfElements)
}

export default MyFunc;