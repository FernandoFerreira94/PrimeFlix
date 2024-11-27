import React, { useState, useEffect } from "react"; // Importa a biblioteca React.
import { get } from "lodash";
import { Link } from "react-router-dom";

// icons
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";

// lista dos alunos
import { listaAlunos } from "./listaAlunos";

//  style css
import { Container } from "../../styles/GlobalStyles"; // Importa o componente estilizado Container.
import { AlunoContainer, PerfilPicture, IconsLista } from "./styled";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    setAlunos(listaAlunos);
  }, []);
  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={aluno.id}>
            <PerfilPicture>
              {get(aluno, "foto", false) ? (
                <img src={aluno.foto} alt="" />
              ) : (
                <FaUserCircle size={25} />
              )}
            </PerfilPicture>
            <span>
              {aluno.id}: {aluno.nome}, {aluno.idade} anos
            </span>
            <IconsLista>
              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit size={16} color="black" />
              </Link>

              <Link to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} color="red" />
              </Link>
            </IconsLista>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
