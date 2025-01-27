import { useState } from "react"
import "./pacote.css"

export function Pacote() {
    const [largura, setLargura] = useState(5);
  return (

    <dl className="pacote">
        <dt>Largura (cm)</dt>
        <dd onClick={(e) =>{
            setLargura(largura+1);
        }}>{largura}</dd>
        <dt>Altura (cm)</dt>
        <dd>10</dd>
        <dt>Profundidade (cm)</dt>
        <dd>10</dd>
        <dt>peso (g)</dt>
        <dd>10</dd>
        <dt>custo</dt>
        <dd>{(largura*0.50). toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</dd>
    </dl>

    

  )


}

export default Pacote
