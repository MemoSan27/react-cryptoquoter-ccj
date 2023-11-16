import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color 300ms ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Formulario = () => {

   const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
   

  return (
    <form>
        <SelectMonedas />
                
        <InputSubmit 
            type="submit" 
            value="Cotizar" 
          />
    </form>
  )
}

export default Formulario
