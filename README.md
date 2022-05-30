## 1. Introdução
Você está prestes a entrar para o time de Desenvolvedores da DevInHouse Solar Energy. Para concretizar a sua contratação, você deverá resolver um desafio utilizando React. O time de recrutamento necessita que você crie uma aplicação protótipo para o gerenciamento de energia , chamada Solar Energy.

## 2. Requisitos da Aplicação
A aplicação que deverá ser realizada individualmente, deve contemplar os seguintes requisitos:

Uma Tela de Login contendo um formulário com campos de email e senha. Os campos de email e senha são obrigatórios ( Validar ao disparar o evento de onSubmit). Ao clicar no botão de Entrar e passar pela validação, redirecionar para tela de Dashboard. Seguir layout conforme o mockup disponibilizado.

Um menu lateral, contendo as opções Dashboard, Unidade Consumidora e Cadastro de energia gerada. O menu deve ser configurado usando a lib react-router-dom. Seguir layout conforme o mockup disponibilizado.

Uma tela de Dashboard contendo 4 cards: Total de unidades (Exibir o total de unidades cadastradas no json-server) , unidades ativas (Exibir total de unidades com status ativo(true) , unidades inativas (Exibir total de unidades com status inativo(false)  e média de energia (Soma de todos os total / total de unidades).

 A tela  de Dashboard deve conter um gráfico de linha exibindo os meses do ano. O gráfico deverá exibir o total de energia gerado por mês, sendo assim deve-se realizar a soma por mês do total gerado de todas as unidades e exibir no gráfico o total de cada mẽs, o eixo x deve-se exibir os últimos 12 meses e no eixo y o total por mês  Usar a lib https://github.com/reactchartjs/react-chartjs-2. Seguir layout conforme o mockup disponibilizado.

Uma tela de Listagem de unidades (consumir rota /unidades do json-server) contendo uma tabela com as colunas ID, apelido, Local, Marca e modelo, além dos botões Editar e Remover. Além disso, a tela deve conter um botão Nova unidade (Ao clicar, enviar usuário para tela de cadastro de unidade). Seguir layout conforme o mockup disponibilizado.

Uma tela de cadastro de unidade, contendo um formulário com os campos apelido, Local, Marca, modelo e status (Checkbox) . Ao clicar no botão salvar, chamar evento de onSubmit e cadastrar unidade via POST na rota /unidades do json-server. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.

Implementar botão de remover unidade na tela de Listagem de unidades. Ao clicar no botão remover, chamar evento de onClick e remover unidade clicada via DELETE na rota /unidades/:id do json-server.

Implementar botão de editar unidade, ao clicar no botão de editar, enviar usuário para tela de edição de unidade. Ao renderizar a tela, trazer os campos preenchidos com as informações da unidade clicada, ao clicar em salvar, salvar os valores via PUT na rota /unidades/:id do json-server. Seguir layout conforme o mockup disponibilizado.

Implementar tela de Lançamento de geração mensal contendo um formulário com um <Select/> (listando como opção as unidades já cadastradas), um campo de data e um campo de total kw gerado (aceita somente números). Ao clicar em salvar, chamar evento de onSubmit e cadastrar valores via POST na rota /geracoes do json-server. 
