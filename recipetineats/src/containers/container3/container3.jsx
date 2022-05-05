import Card from "../../components/Card";
import style from "./container3.module.scss"

const Container3 = ({ recipes }) => {

	return (
		<div className={style.container3}>
				{recipes.map((recipe, index) => {
					return (
						<Card
							foodImage={recipe.foodImage}
							desc={recipe.desc}
							title={recipe.title}
							key={index}
						/>
					);
				})}
		</div>
	);
};

export default Container3;