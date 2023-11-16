import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useEffect, useState } from "react";

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

  const [ criptos, setCriptos ] = useState([]);
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
  const [ criptoMoneda, SelectCriptoMoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos);

  useEffect( () => {
    const consultarAPI = async() => {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD';
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      const arrayCriptos = resultado.Data.map( cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        }

        return objeto;
      })

      setCriptos(arrayCriptos);
    }
    consultarAPI();
  },[])
   

  return (
    <form>
        <SelectMonedas />
        <SelectCriptoMoneda />
                
        <InputSubmit 
            type="submit" 
            value="Cotizar" 
          />
    </form>
  )
}

export default Formulario
