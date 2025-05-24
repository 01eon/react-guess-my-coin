import { SelectContainer } from "./coin-select.style";
import { ButtonPrimary } from "../button/button.styled";


const CoinSelect = () => {
    return (
        <SelectContainer>
            <ButtonPrimary id="btnHeads">
                <span> ⭐ Heads</span>
            </ButtonPrimary>
            <ButtonPrimary id="btnTails">
                <span> ⚖️ Tails</span>
            </ButtonPrimary>
        </SelectContainer>
    )
}

export default CoinSelect;