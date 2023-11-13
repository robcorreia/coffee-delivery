import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input className="cep" placeholder="CEP" type="number" />
      <Input className="street" placeholder="Rua" />
      <Input placeholder="Número" type="number" />
      <Input className="complement" placeholder="Complemento" />
      <Input placeholder="Cidade" />
      <Input placeholder="Bairro" />
      <Input placeholder="UF" />
    </AddressFormContainer>
  );
}
