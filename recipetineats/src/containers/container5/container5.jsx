import Card from "../../components/Card";
import style from "./container5.module.scss"

const Container5 = ({ recipes }) => {

	return (
		<div className={style.container5}>
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

export default Container5;