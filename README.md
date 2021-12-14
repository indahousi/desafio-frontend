# Desafio Frontend - Housi

Neste desafio você ira realizar uma refatoração de um componente.

> Esse desafio deve ser resolvido em live coding, onde jugaremos os seguintes pontos:

- Todo o processo de troubleshooting
- Como escreve commits
- Como tira duvidas
- code splitting
- Testes unitários
- Context API

## Desafio

Um estagiário estava desenvolvendo uma task de calendário para um novo projeto interno, sobe instruções de um desenvolvedor mais experiente.
Em conjunto com o seu colega, ele desenvolveu alguns testes para o componente e para algumas funções utilitárias que ele iria utilizar.

Com os testes prontos foi passado para ele a seguinte estrutura a ser desenvolvida:

```bash
├── src
│   ├── components
│   │   └── calendar # componente a ser desenvolvido
│   │       ├── atomic
│   │       │   ├── index.ts # export de todos componentes
│   │       │   ├── action-button.tsx # realizar ações
│   │       │   ├── header.tsx # renderiza as actions e o mes/ano atual
│   │       │   └── week.tsx # renderiza os dias da semana dom/seg/ter...
│   │       │   ├── month-list.tsx # renderiza em meses o calendario
│   │       │   ├── day-list.tsx # renderiza os dias do calendario
│   │       │   ├── content.tsx # renderiza componente da lista de dias ou a lista de meses
│   │       └── index.tsx # componente de calendario
│   ├── App.tsx # renderiza o calendario
│   └── index.tsx # renderiza o App
└── ...
```

Porem o estagiário está com dificuldades de seguir com a task, ele precisa de ajuda para refatorar o que foi desenvolvido para um modelo que permita uma manutenção mais assertiva.

Segue a lista dos afazeres:

- code splitting do calendário
  - [ ] componente para os botoes
  - [ ] componente para o header (botoes + componente que mostra o mes/ano selecionado)
  - [ ] componente que mostra os dias da semana
  - [ ] componente que mostra a listagem dos dias do mes
  - [ ] componente que mostra a listagem dos meses do ano
  - [ ] componente que gerencia quem se vai mostrar os meses ou os dias
- [ ] migrar o uso excessivo de props para context api

# Testes unitarios

Foi desenvolvido alguns testes unitarios para cobrir o funcionamento do componente e das funções utilitarias.

Então no final do teste esperasse que todos os teste continuem passando com 100% de coverage.

# Iniciar

## instalar dependencias do projeto

```bash
yarn # ou npm install
```

## iniciar o servidor

```bash
yarn start # ou npm start
```

## rodar os testes

```bash
yarn test # npm run test
```

## rodar os testes de coverage

```bash
yarn test:cov # ou npm run test:cov
```

## rodar os testes em watch mode

```bash
yarn test:watch # ou npm run test:watch
```
