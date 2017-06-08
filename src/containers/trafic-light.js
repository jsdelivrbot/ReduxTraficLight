import React, { Component } from 'react';
import { connect } from 'react-redux';
import { manageTrafic } from '../actions/index';
import { bindActionCreators } from 'redux';

class TraficLight extends Component {
  //For Asit
  constructor(props) {
    super(props);
		this.state = {color : this.props.lightColor,
									appStateColor : this.props.lightColor};
		
		this.timer();
  }
 /* renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className = "list-group-item"
          key = {book.title}
          onClick = {() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      )
    })
  }*/

timer =()=>
	{
		if(this.state.appStateColor !== this.props.lightColor){
			console.log('appColor - '+ this.props.lightColor);
			this.setState({appStateColor:this.props.lightColor},function(){
			
			if(this.props.lightColor == 'red'){
			this.setState({color:'green'},function(){
				console.log('appStateColor - '+ this.props.lightColor);
				this.timer();			
			}); 
			
		}else{
			this.setState({color:'red'},function(){
			console.log('appStateColor - '+ this.props.lightColor);
			this.timer();
		});
			
		}

		});
		
							
		}
		if(this.state.color == 'red'){
			this.setState({color:'green'}); 
		}else{
			this.setState({color:'red'});
		}
		setTimeout(()=>{this.timer(this.state.color)}, 5000);
		
	}

  render() {

let background = {
			
			background: this.state.color
		}
    return (
      /*<ul className="list-group col-md-4">
        {this.renderList()}
      </ul>*/


		<div>
				<div  className = "circle-light" style = {background}>
				</div>		
        <button  className = "button-red"
          onClick={() => {this.props.selectColor('red')}} >
			  </button>

				 <button  className = "button-green"
          onClick={()=> {this.props.selectColor('green')}}>
				</button>
      </div>
    )
  }
}

//whatever is returned from this function will be available as
// a prop to the book-list container
function mapStateToProps(state) {
  return {
    lightColor:state.color
  }
}

//Whatever gets returned from this function will be available as
// a prop to the book-list container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, we need to pass down the action
  //to all the reducers in the application
  return bindActionCreators({selectColor : manageTrafic }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TraficLight);
