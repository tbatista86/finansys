import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, name: "Moradia", description: "pagamentos de contas da casa" },
      { id: 2, name: "Saúde", description: "Plano de Saúde e remédios" },
      { id: 1, name: "Lazer", description: "Cinema, parquem praia, etc.." },
      { id: 1, name: "Salário", description: "Recebimento de Salário" },
      { id: 1, name: "Frelas", description: "Trabalhos como freelancer" },
    ];

    return { categories }
  }
}
