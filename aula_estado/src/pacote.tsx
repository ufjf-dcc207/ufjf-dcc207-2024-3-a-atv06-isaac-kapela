import { useState } from "react"
import "./pacote.css"

export function Pacote() {
    const [pacote, setPacote] = useState({
   
        
    });
   // const [altura, setAltura] = useState(7);
   // const [Profundidade, setProfundidade] = useState(8);
  //  const [peso, setPeso] = useState(200);

    function onchange(e: React.ChangeEvent<HTMLInputElement>){
        if((e.target.name = "largura")){
            const novoPacote = structuredClone(pacote);
            novoPacote.largura = e.target.valueAsNumber;
            setPacote({
                ...pacote,
                largura: e.target.valueAsNumber
            });
        else if((e.target.name == "altura")){
            const p2 = structuredClone(pacote);
            p2.altura = e.target.valueAsNumber
            setPacote({
                ...pacote,
                altura: e.target.valueAsNumber
            })
            pacote.largura = e.target.valueAsNumber;
            setPacote(pacote);        }
        else if((e.target.name == "profundidade")){
            pacote.largura = e.target.valueAsNumber;
            setPacote(pacote);        }
        else if((e.target.name == "peso")){
            pacote.largura = e.target.valueAsNumber;
            setPacote(pacote);
        }
    }
    return (

        <dl className="pacote">
            <dt>Largura (cm)</dt>
            <dd ><input type="number" value={largura} min="5" step="1" onChange={onchange}></input></dd>
            <dt>Altura (cm)</dt>
            <dd><input type="number" value={altura} min="5" step="1" onChange={onchange}></input></dd>
            <dt>Profundidade (cm)</dt>
            <dd><input type="number" value={Profundidade} min="5" step="1" onChange={onchange}></input></dd>
            <dt>peso (g)</dt>
            <dd><input type="number" value={peso} min={200} step="1" onChange={onchange}></input></dd>
            <dt>custo</dt>
            <dd>{(largura * altura * Profundidade * peso * 0.0005).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</dd>
        </dl>



    )


}

export default Pacote
