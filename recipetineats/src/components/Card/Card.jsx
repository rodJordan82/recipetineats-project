

const Card = ({ foodImage, title, desc }) => {


	return (
		<div >
      <img src={foodImage} alt="food"/>
			<h2>
				{title}
			</h2>
			<p>{desc}</p>
		</div>
	);
};

export default Card;