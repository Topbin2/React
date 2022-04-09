import React, { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { UserContext } from './store/UserStore';

function App() {
	const [user, setUser] = useState({ name: 'sangbin', count: 0 });

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Header />
			<Content />
		</UserContext.Provider>
	);
}

export default App;
