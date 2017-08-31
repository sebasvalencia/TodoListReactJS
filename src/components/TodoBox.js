import React, {Component} from 'react';
import '../styles/TodoBox.css';

class TodoBox extends Component{

  constructor(){
    super();
    this.state={
      todoText: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({
      todoText: e.target.value
    });
  }

  render(){
    return(
      <div className="TodoBox">
        <form>
          <input
              type="text"
              value={this.state.todoText}
              onChange={this.onChange}/>
          <input
              type="submit"
              value="Agregar"/>
        </form>
      </div>
    );
  }

}

export default TodoBox;
