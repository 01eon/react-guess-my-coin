import { StatusCardContainer, StatusContainer, StatusLabel, StatusNumber } from "./status-card.style"
import { useContext } from "react";
import { GameContext } from "../../context/game.context";
const StatusCard = () => {
    const { correct, total } = useContext(GameContext)

    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    return (
        <StatusContainer>
            <StatusCardContainer>
                <StatusNumber id="countCorrect">{correct}</StatusNumber>
                <StatusLabel>Correct</StatusLabel>
            </StatusCardContainer>
            <StatusCardContainer>
                <StatusNumber id="countTotal">{total}</StatusNumber>
                <StatusLabel>Total</StatusLabel>
            </StatusCardContainer>
            <StatusCardContainer>
                <StatusNumber id="accuracy">{accuracy}</StatusNumber>
                <StatusLabel>Accuracy</StatusLabel>
            </StatusCardContainer>
        </StatusContainer>
    )
}

export default StatusCard;