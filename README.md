## React Hooks Boilerplate

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Rodar o projeto](#rodar-o-projeto)
- [Desenvolvimento](#desenvolvimento)
  - [TypeScript](#typescript)
  - [Lint](#lint)
- [Boas práticas](#boas-práticas)
  - [Modelo](#modelo)
  - [React Hooks](#react-hooks)
  - [Considerações finais](#considerações-finais)
- [Visual Studio Code](#visual-studio-code)
- [Debug via vscode](#debug-via-vscode)
  - [Observações](#observações)
- [Testes com Jest](#testes-com-jest)
- [Referências](#referências)

### Instalação

```bash
yarn install
```

### Configuração

Clone este projeto preferencialmente na pasta `~/dev`.

```bash
cd ~/dev/react-boilerplace
```

### Rodar o projeto

**Rodar com React apenas**

```bash
yarn dev
# yarn build ; yarn start
```

### Desenvolvimento

Desenvolva usando `React Hooks` e `Functional Component` sempre que possível. Evite `Class Component`.

#### TypeScript

Use-o de forma a não trazer lentidão para o desenvolvimento. Use principalmente as `interfaces` de forma a refletir as propriedades de uma tabela do seu banco de dados.

#### Lint

Será rodado a cada commit com a configuração do `Husky`.

### Boas práticas

#### Modelo

```js
import React from 'react'

export default function () {
  return (
    <>
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  )
}
```

#### React Hooks

Procure aplicar os hooks nesta ordem:

```js
import React, { useState, useMemo, useCallback, useEffect } from 'react'

export default function () {
  const [numbers, setNumbers] = useState([1, 2, 3])

  const lastNumber = useMemo(() => numbers[numbers.length - 1], [numbers])

  const setNewNumber = useCallback((newNumber) => setNumbers([...numbers, newNumber]), [numbers])

  useEffect(() => {
    setNewNumber(4)

    return () => {
      setNumbers([])
    }
  })

  return (
    <>
      <h1>Example</h1>
      <p>
        <strong>Last number:</strong> {lastNumber}
      </p>
    </>
  )
}
```

#### Considerações finais

- Evite fazer alterações nos arquivos de configuração ou avise outros times para que todos possam desenvolver num mesmo padrão.
  - `.editorconfig`, `.eslintrc.js`, `prettierrc.js`, `stylelint.config.js`, `tslint.json` e `tspaths.json`.
- Use sempre que possível `React Hooks` e `Functional Component`.

### Visual Studio Code

Recomendamos as configurações abaixo para melhor uso deste boilerplate.

```json
{
  "workbench.colorTheme": "Dracula",
  "window.zoomLevel": 0,
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 13,
  "workbench.iconTheme": "material-icon-theme",
  "editor.renderLineHighlight": "gutter",
  "editor.tabSize": 2,
  "terminal.integrated.fontSize": 12,
  "editor.parameterHints.enabled": false,
  "breadcrumbs.enabled": true,
  "workbench.startupEditor": "."
}
```

Principalmente estes. Alguns são obrigatórios para arquivos `.tsx`.

```json
{
  "javascript.suggest.autoImports": false,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "editor.rulers": [100, 120],
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "javascript": "css"
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "typescript": "jsx",
    "typescriptreact": "jsx"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

### Debug via vscode

Crie o arquivo `/.vscode/launch.json`.

Lembre de trocar `<user-name>` pelo nome do usuário do seu ambiente e verifique se você está usando `nvm` como o aplicado no `runtimeExecutable`.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:9000",
      "webRoot": "${workspaceFolder}",
      "userDataDir": true
    },
    {
      "name": "Jest Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "/Users/<your-user-name>/.nvm/versions/node/v14.15.0/bin/yarn",
      "runtimeArgs": ["test", "--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "port": 9230
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Current File",
      "runtimeExecutable": "/Users/<your-user-name>/.nvm/versions/node/v14.15.0/bin/yarn",
      "args": ["test", "${fileBasenameNoExtension}", "--detectOpenHandles"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true
    }
  ],
  "compounds": [
    {
      "name": "All",
      "configurations": ["Launch Chrome", "Jest Tests"]
    }
  ]
}
```

##### Observações

O debug do jest via vscode só é possível graças aos `presets` e `plugins` presente no `.babelrc.js`, usado pelo `jest.config.json`.

Se mudar a forma como importa `svg` (veja `src/pages/main/index.tsx`), o debug do jest via vscode não funcionará. Hoje, ele funciona via `babel-plugin-inline-react-svg`.

### Testes com Jest

Tem algumas formas de testar projetos React.

Alguns usam Enzyme, mas no futuro ele se torna lento e inviável. Não tanto como Cypress, mas um dia a conta chega.

Aqui tem um conjunto de tecnologias para teste que pode parecer básicas, mas além de rápidas, solucionam todas as necessidades.

Me refiro as `react-dom/test-utils` e `@testing-library/react`.

Uma dica legal é com uso do `act` que aguarda "efeitos do React", seja `Reconciliation` ao trocar de página e renderizações, ou `useEffect` por exemplo. Sempre que algo assim acontecer, o uso do `act` será bem-vindo.

Evite usar mocks até mesmo para `Redux` ou `Saga`. Assim, seus testes terão um comportamento mais próximo do real aplicado. Agora, para o `axios`, faz muito sentido.

### Referências

- https://create-react-app.dev/docs/getting-started/
