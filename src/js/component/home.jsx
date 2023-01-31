//import React from 'react';
import React, {useState} from 'react';

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState(" ");
	const [toDoes, setToDoes] = useState([]);
	return (
		<div className="container">
			<h1>todos</h1>
		  <ul className='listas'>
			<li className='completar'><input 
			type="text" 
		
			onChange={(e)=> setInputValue (e.target.value)}
			value={inputValue}
			onKeyPress ={(e) =>  {
				if (e.key === "Enter") {
				setToDoes (toDoes.concat(inputValue));
				setInputValue(" ");
			       }
				}}
			placeholder="What do yo need to do?"></input>	
			</li>
			{toDoes.map((t,index) => (
			<li className='cosas'>
            {t}{" "}

				<i class="fas fa-trash-alt"
				onClick={() =>
				setToDoes(
					toDoes.filter(
						(t,currentIndex) =>
						index != currentIndex
					)
				)
				 }></i>
				</li>

			))}
			
		  </ul>
		  <div>{toDoes.length} task</div>
		  <div className='container2'></div>
		  <div className='container3'></div>
		</div>
	);
};

export default Home;
