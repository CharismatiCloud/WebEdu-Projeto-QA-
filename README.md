🎓 WebEduc — Plataforma de Cursos com E-books

<p align="center">
  <img src="https://img.shields.io/badge/Flask-v2.x-blue?style=for-the-badge&logo=flask" alt="Flask">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/QA_Testing-🚀-green?style=for-the-badge" alt="QA">
</p>

O **WebEduc** é um MVP (Minimum Viable Product) acadêmico desenvolvido em Flask com front-end em HTML/CSS/JS nativos. O objetivo principal desta aplicação é servir como ambiente de sandbox para **testes de QA (Garantia de Qualidade)**, permitindo a validação de regras de negócio, testes de API e fluxos de autenticação.

---

## 🛠️ Tecnologias Utilizadas

* **Backend:** Python e Flask (API e roteamento)
* **Frontend:** HTML5, CSS3 (Design responsivo) e JavaScript (Scripts utilitários)

---

## 📂 Estrutura do Projeto

```text
edustark/
├── app.py                 # Backend Flask (API + rotas de página)
├── requirements.txt       # Dependências do projeto
├── README.md              # Documentação
├── templates/             # Visões (Views) em HTML
│   ├── base.html          # Layout compartilhado (navbar/footer)
│   ├── index.html         # Home + listagem pública de cursos
│   ├── cadastro.html      # Formulário de cadastro de usuário
│   ├── login.html         # Formulário de login
│   ├── dashboard.html     # Área logada do instrutor
│   └── novo_curso.html    # Formulário de publicação de curso
└── static/                # Arquivos estáticos
    ├── css/
    │   └── style.css      # Estilização completa da aplicação
    └── js/
        └── main.js        # Regras de comportamento e chamadas de API
 ```
🚀 Como Rodar a Aplicação
Pré-requisitos
Certifique-se de ter o Python 3.x instalado em sua máquina.

Passo a Passo
Clone o repositório:
```
git clone [https://github.com/seu-usuario/webeduc.git](https://github.com/seu-usuario/webeduc.git)
   cd webeduc
```
Instale as dependências:
```
pip install -r requirements.txt
```
Execute o servidor:
```
python app.py
```
Acesse no navegador:
Abra o endereço http://localhost:5000
