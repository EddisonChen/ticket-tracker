import "./Card.scss";
import Counter from "../Counter/Counter";

const Card = (props) => {
    const {team} = props;

    const cardList = team.map((member) => {
        return (
            <div className="perCard">
                <h1>{member.name}</h1>
                <h2>{member.role}</h2>
                <Counter/>
            </div>
        )

    })
    return (
        <>
            {cardList}
        </>
    )
 
}

export default Card;