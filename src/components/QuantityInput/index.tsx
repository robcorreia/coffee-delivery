import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface QuantityInputProps {
  size?: "medium" | "small";
  onIncrease: () => void;
  onDrecrease: () => void;
  quantity: number;
}

export function QuantityInput({
  size = "medium",
  onIncrease,
  onDrecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDrecrease} disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
