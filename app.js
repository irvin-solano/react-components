// TODO


class GroceryListItem extends React.Component {
  constructor(props) {
  }

  render (props) {
  console.log('in grocery list', props.todos)
  props.todos.map((todo) => {
    console.log('inside map')
    return (<GroceryListItem newItem = {todo} />)
  })
}
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() { //method at this point
    console.log(props)
    return (
        <li onClick={onListItemClick}>{props.newItem}</li>
    )
  }
}

var onListItemClick = (event) => {
  console.log('I got clicked');
};

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/>
  </div>
);

// var Form = () => {
//   function change (e) {
//     console.log('change')
//     e.preventDefault();
//   }


//   function handleSubmit(e) {
//     AdddToList()
//     e.preventDefault();

//   }

//   var theStuff;

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Item to be added to list:<br/>
//         <input type="text" id="list-item" required/>
//       </label><br/>
//       <input type="submit" />
//     </form>
//   )
// }



ReactDOM.render(<App />, document.getElementById("app"));


