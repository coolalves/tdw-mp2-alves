import React from "react";
import Header from "../components/Header/Header";
import "./pageStyles/Feed.scss";



const About = () => {
    return (
        <>
            <Header />
            <div className={"container"}>
                <div className={"quatrain-container"}>
                    <div className={"quatrain"}>
                        <div className={"verse-container"}>
                            <h1 className={"quatrain-header-huge"}> about </h1>
                            <p>O presente website tem como principal objetivo responder ao miniprojeto M2A proposto na unidade curricular de Tecnologias e Desenvolvimento Web. O desafio lançado consistiu no desenvolvimento de uma aplicação de front-end em React para consumir e visualizar informação proveniente de uma qualquer fonte pública de dados.</p>

                            <p>Para tal, a fonte selecionada de modo a obter estes dados foi a API kanye.rest, com o auxílio da biblioteca Axios. A cada pedido, esta API retorna uma citação do cantor e compositor estadunidense Kanye West, que nos últimos anos, este artista ganhou a reputação de ser inflamatório e controverso, muitas vezes fazendo declarações públicas consideradas ofensivas ou polarizadoras. A temática escolhida tem como principal objetivo demonstrar a natureza inflamatória das palavras de Kanye West de uma forma divertida e envolvente.</p>

                            <p>Na página inicial é possível fazer um pedido GET com Axios, que retorna quatro citações aleatórias do autor. Essa informação é posteriormente exibida no ecrã de uma forma visualmente atraente, utilizando componentes de ReactJS respeitando os seus princípios de design, e gerida com recurso aos hooks desta biblioteca.  De seguida, o utilizador poderá alterar os "versos" criados para novas citações, fazendo novos pedidos GET. Este processo pode ser repetido várias vezes até ser obtida uma quadra que satisfaça o utilizador. A quadra resultante pode ser submetida posteriormente para a Firestore de modo a ser exposta no componente feed, que mostra todas as quadras criadas na aplicação.</p>

                            <p>Em suma, este projeto visa demonstrar o poder do ReactJS e dos seus hooks, assim como a integração com outras ferramentas, além de fornecer uma visão satírica da figura frequentemente polarizadora de Kanye West.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
