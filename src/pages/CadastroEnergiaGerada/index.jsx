import Menu from "../../components/Menu";
import { PageDiv, PageTitle } from "../../components/PageDiv/style";
import Select from "../../components/Select";
import { PrimaryButton } from "../../components/Buttons/styles";
import { useContext, useState } from "react";
import { UnidadeConsumidoraContext } from "../../contexts/UnidadeConsumidora/index.js";
import InputDate from "../../components/InputDate";
import FormInput from "../../components/Inputs";

const CadastroEnergiaGerada = () => {
  const energiaGerada = useContext(UnidadeConsumidoraContext);

  const [unidadeGeradora, setUndiadeGeradora] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [totalKw, setTotalKw] = useState(0);

  const handleSubmitEnergiaGerada = async (evt) => {
    evt.preventDefault();

    try{
        await fetch('http://localhost:3333/geracao',
        {
            method: 'POST',
            body: JSON.stringify({
                apelido: unidadeGeradora,
                mes: mes,
                ano: ano,
                totalKw: totalKw,
            }),
            headers: {'Content-Type': 'application/json'},
        },
        )
    } catch (error) {
        

    }

  }


  return (
    <>

      <PageDiv>
        <PageTitle>Lançamento de Geração Mensal</PageTitle>

        <form 
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        onSubmit={handleSubmitEnergiaGerada}
        >
          <Select
            placeholder={"Selecione uma opção:"}
            opcoes={energiaGerada.unidades}
            setValue={setUndiadeGeradora}
          />

          <InputDate 
          setAno={setAno}
          setMes={setMes}
          />

          <FormInput
            label={"Total Kw Gerado"}
            value={totalKw}
            setValue={setTotalKw}
            type={"number"}
          />

          <PrimaryButton type={"submit"}>Salvar</PrimaryButton>
        </form>
      </PageDiv>
    </>
  );
};

export default CadastroEnergiaGerada;
