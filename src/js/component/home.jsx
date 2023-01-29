import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState(" ");
	const [toDoes, settoDoes] = useState(" ");
	return (
		<div className="container">
			<h1>my Todoes</h1>
		  <ul>
			<li><input 
			type="text" 
		
			onChange={()=> setInputValue (e.target.value)}
			value={inputValue}
			onKeyUp ={(e) =>  {
				if (e.key === "Enter") {
				settoDoes (toDoes.concat(inputValue));
				setInputValue(" ");
			       }
				}}
			placeholder="What do yo need to do?"></input>	
			</li>
			{toDoes.map((t,index) => (
			<li>
            {t}{" "}

				<i class="fas fa-trash-alt"
				onClick={() =>
				settoDoes(
					toDoes.filter(
						(t,currentInex) =>
						index != currentInex
					)
				)
				 }></i>
				</li>

			))}
			
		  </ul>
		  <div>23 task</div>
		</div>
	);
};

export default Home;
