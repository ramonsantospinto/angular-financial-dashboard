# 💰 Dashboard Financeiro - Angular 21

Aplicação desenvolvida com **Angular 21** utilizando arquitetura modular, componentes standalone e boas práticas modernas de front-end.

O projeto simula um dashboard financeiro com exibição de:

- saldo total
- lucro mensal
- tabela de investimentos

---

# 🚀 Tecnologias utilizadas

- Angular 21
- TypeScript
- RxJS
- SCSS
- Standalone Components
- Arquitetura Feature-Based

---

# 🧠 Arquitetura aplicada

O projeto foi organizado seguindo o padrão:

## Feature-First Architecture

Separando responsabilidades em:

- Components
- Pages
- Services
- Models

Essa estrutura melhora:

- Escalabilidade
- Reutilização
- Organização
- Manutenção
- Legibilidade do código

---

# ⚡ Componentes Standalone

Toda a aplicação foi construída utilizando:

```ts
standalone: true;
```

Eliminando dependência de módulos tradicionais (`NgModules`) e seguindo o padrão moderno recomendado pelo Angular.

---

# 📦 Mock de dados

Os dados estão sendo simulados localmente através do RxJS:

```ts
of([...])
```

Isso permite:

- desenvolvimento desacoplado de backend
- testes rápidos
- previsibilidade
- demonstração de arquitetura

---

# 📂 Estrutura do projeto

```bash
src/
 └── app/
      └── features/
           └── dashboards/
                ├── components/
                │    ├── balance-card/
                │    ├── profit-card/
                │    └── investments-table/
                │
                ├── models/
                │    ├── wallet.model.ts
                │    └── investment.model.ts
                │
                ├── pages/
                │    └── dashboard-page/
                │
                └── services/
                     └── dashboard.service.ts
```

---

# 🖥️ Preview do Projeto

<div align="center">

<img
  src="https://i.ibb.co/vCtsdjsq/dashboard.png"
  width="1000"
/>

</div>

---

# ▶️ Como executar o projeto

## Instalar dependências

```bash
npm install
```

---

## Executar aplicação

```bash
ng serve
```

---

## Acessar no navegador

```bash
http://localhost:4200
```

---

# 🎨 Layout

O dashboard possui:

- tema dark
- responsividade básica
- cards financeiros
- tabela estilizada
- design clean focado em legibilidade

---

# 🔮 Melhorias futuras

- Integração com API real
- Loading states
- Tratamento global de erros
- State Management
- Testes unitários
- Responsividade mobile
- Autenticação
- Gráficos financeiros

---

# 🎯 Objetivo do projeto

Este projeto foi desenvolvido com foco em:

- boas práticas Angular
- componentização
- arquitetura escalável
- organização de código
- demonstração técnica para processos seletivos

---

# 👨‍💻 Autor

## Ramon Santos

Desenvolvedor Flutter Sênior
