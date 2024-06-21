import logo from './logo.svg';
import './App.css';
import CustomerAdd from './TaskAdd';
import CustomerView from './TaskView';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
	<Provider store={store}>
		<div className="App">
			<h1>React Redux TO-DO Example</h1>
			<CustomerAdd/>
			<CustomerView/>
		</div>
	</Provider>
  );
}

export default App;
