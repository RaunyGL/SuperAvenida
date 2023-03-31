import { useState } from "react";
import "./styles.css";

export default function App() {
  const [mensa1, setMensa1] = useState("");
  const [mensa2, setMensa2] = useState("");
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");

  function mostraPromocao(e) {
    e.preventDefault();
    //  alert("Oi");
    //  setMensa1("Bem-vindo");
    const precoPromocional = preco * 2.5;
    const desconto = preco * 0.5;
    setMensa1(
      `${produto} em promoção: Leve 3 por R$ ${precoPromocional.toFixed(2)}`
    );
    setMensa2(`O 3° produto custa apenas R$ ${desconto.toFixed(2)}`);
  }

  function limparForm() {
    setProduto("");
    setPreco("");
    setMensa1("");
    setMensa2("");
  }

  return (
    <div>
      <h1>Supermercado Avenida</h1>
      <form onSubmit={mostraPromocao}>
        <p>
          Produto:{" "}
          <input
            type="text"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
        </p>
        <p>
          Preço R$:{" "}
          <input
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </p>
        <input type="submit" value="Ver Promoção" />
        <input type="button" value="Limpar" onClick={limparForm} />
      </form>
      <h3>{mensa1}</h3>
      <h3>{mensa2}</h3>
    </div>
  );
}
