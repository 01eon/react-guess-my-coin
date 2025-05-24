import { StatusCardContainer, StatusContainer, StatusLabel, StatusNumber } from "./status-card.style"

const StatusCard = () => {
    return (
        <StatusContainer>
            <StatusCardContainer>
                <StatusNumber id="countCorrect">0</StatusNumber>
                <StatusLabel>Correct</StatusLabel>
            </StatusCardContainer>
            <StatusCardContainer>
                <StatusNumber id="countTotal">0</StatusNumber>
                <StatusLabel>Total</StatusLabel>
            </StatusCardContainer>
            <StatusCardContainer>
                <StatusNumber id="accuracy">0%</StatusNumber>
                <StatusLabel>Accuracy</StatusLabel>
            </StatusCardContainer>
        </StatusContainer>
    )
}

export default StatusCard;