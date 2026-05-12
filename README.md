# 🏥 Clínica API

API REST para gerenciamento de consultas médicas, desenvolvida com Spring Boot 3.5 e PostgreSQL.

---

## 🚀 Tecnologias

- **Java 17**
- **Spring Boot 3.5**
- **Spring Data JPA**
- **Spring Validation** (Bean Validation)
- **PostgreSQL**
- **Lombok**
- **Maven**

---

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── main/
│   │   ├── java/com/clinicaapi/app/
│   │   │   ├── config/         # Configurações (CORS)
│   │   │   ├── controller/     # Endpoints REST
│   │   │   ├── dto/            # Objetos de transferência de dados
│   │   │   ├── entity/         # Entidades JPA
│   │   │   ├── exception/      # Tratamento global de erros
│   │   │   ├── repository/     # Interfaces JPA
│   │   │   └── service/        # Regras de negócio
│   │   └── resources/
│   │       └── application.properties
└── pom.xml
```

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Java 17+
- Maven
- PostgreSQL rodando localmente

### Configuração do banco

Crie um banco de dados PostgreSQL e configure o `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/clinicadb
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
```

### Rodando a aplicação

```bash
cd backend
./mvnw spring-boot:run
```

A API estará disponível em `http://localhost:8080`

---

## 📌 Endpoints

### Médicos
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/medicos` | Lista todos os médicos |
| GET | `/api/medicos/{id}` | Busca médico por ID |
| POST | `/api/medicos` | Cadastra novo médico |
| PUT | `/api/medicos/{id}` | Atualiza médico |
| DELETE | `/api/medicos/{id}` | Remove médico |

### Pacientes
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/pacientes` | Lista todos os pacientes |
| GET | `/api/pacientes/{id}` | Busca paciente por ID |
| POST | `/api/pacientes` | Cadastra novo paciente |
| PUT | `/api/pacientes/{id}` | Atualiza paciente |
| DELETE | `/api/pacientes/{id}` | Remove paciente |

### Consultas
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/consultas` | Lista todas as consultas |
| GET | `/api/consultas/{id}` | Busca consulta por ID |
| GET | `/api/consultas/paciente/{pacienteId}` | Lista consultas por paciente |
| GET | `/api/consultas/medico/{medicoId}` | Lista consultas por médico |
| POST | `/api/consultas` | Agenda nova consulta |
| PUT | `/api/consultas/{id}` | Atualiza consulta |
| DELETE | `/api/consultas/{id}` | Cancela consulta |

---

## 🛡️ Tratamento de Erros

A API retorna erros padronizados no formato:

```json
{
  "status": 404,
  "message": "Recurso não encontrado",
  "timestamp": "2026-05-12T01:00:00"
}
```

---


> Frontend em desenvolvimento.
