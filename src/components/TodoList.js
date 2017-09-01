import React, {Component} from 'react';
import '../styles/TodoList.css';
import TodoListItem from './TodoListItem';
import PropsTypes from 'prop-types';

class TodoList extends Component{

constructor(props){
  super(props);
}


//resiva una lista y q la muestre
  render(){
    let items = this.props.items.map((actual, posicion, array)=>{
      console.log(actual, posicion);
      return (
        <TodoListItem name={actual} key={posicion} />
      )
    });
    return(//  {items}
      <div className="TodoList">
          <ul>
            {items}
          </ul>
      </div>
    );
  }

}

TodoList.propsTypes ={
  items:PropsTypes.array.isRequired
}

export default TodoList;
