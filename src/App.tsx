import { useState } from "react"

interface Endereco {
  id: number
  rua: string
  numero: string
  cidade: string
  estado: string
}

export function App() {
  const [enderecos, setEnderecos] = useState<Endereco[]>([])

  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [erros, setErros] = useState({
  rua: false,
  numero: false,
  cidade: false,
  estado: false,
})


  function adicionarEndereco() {
  const novosErros = {
    rua: rua.trim() === "",
    numero: numero.trim() === "",
    cidade: cidade.trim() === "",
    estado: estado.trim() === "",
  }

  setErros(novosErros)

  if (Object.values(novosErros).includes(true)) {
    return
  }

  const novoEndereco: Endereco = {
    id: Date.now(),
    rua,
    numero,
    cidade,
    estado,
  }

  setEnderecos([...enderecos, novoEndereco])

  setRua("")
  setNumero("")
  setCidade("")
  setEstado("")

  setErros({
    rua: false,
    numero: false,
    cidade: false,
    estado: false,
  })
}


  return (
    <div className="principal-card">
      <h1>📍 Lista de Endereços</h1>

      <div className="form-endereco">
        <input
          placeholder="Rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />
        {erros.rua && <span className="erro">Campo obrigatório</span>}

        <input
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        {erros.numero && <span className="erro">Campo obrigatório</span>}

        <input
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />
        {erros.cidade && <span className="erro">Campo obrigatório</span>}

        <input
          placeholder="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        {erros.estado && <span className="erro">Campo obrigatório</span>}

        <button onClick={adicionarEndereco}>
          Adicionar
        </button>
      </div>

      {enderecos.map((endereco) => (
        <div key={endereco.id} className="card-endereco">
          <p><strong>Rua:</strong> {endereco.rua}</p>
          <p><strong>Número:</strong> {endereco.numero}</p>
          <p><strong>Cidade:</strong> {endereco.cidade}</p>
          <p><strong>Estado:</strong> {endereco.estado}</p>
        </div>
      ))}
    </div>
  )
}

