import React from 'react';
import ReactDOM from 'react-dom';


// Components
import Hello from './components/Hello'

// Source component
class Main extends React.Component {
	render(){
		return (
			<div>
				<Hello />
			</div>
		)
	}
}

// Start rendering
ReactDOM.render( <Main />, document.getElementById("main") )