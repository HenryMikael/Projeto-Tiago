import { Injectable } from '@angular/core';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private responses = {
    //infos
    'horario': 'Nossa biblioteca online funciona 24 horas por dia, todos os dias!',
    'horário': 'Nossa biblioteca online funciona 24 horas por dia, todos os dias!',
    'funcionamento': 'Estamos disponíveis 24h para busca e leitura de livros digitais!',

    //contato
    'contato': 'Você pode falar com nossa equipe pelo email: suporte@biblioteca.com',
    'telefone': 'Atendimento via telefone não está disponível, mas você pode usar o email suporte@biblioteca.com',
    'email': 'Você pode nos contatar pelo email: suporte@biblioteca.com',

    //livros e serviços
    'produtos': 'Disponibilizamos reserva de salas, leitura online e recomendações personalizadas!',
    'serviços': 'Disponibilizamos reserva de salas, leitura online e recomendações personalizadas!',
    'servicos': 'Disponibilizamos reserva de salas, leitura online e recomendações personalizadas!',
    'preços': 'O acesso aos livros depende do plano. Deseja saber mais sobre assinaturas?',
    'precos': 'O acesso aos livros depende do plano. Deseja saber mais sobre assinaturas?',
    
    //suporte
    'suporte': 'Nosso suporte funciona todos os dias via email!',
    'ajuda': 'Claro! Sobre qual livro ou função posso te ajudar?',

    //despedida
    'tchau': 'Até logo! Boa leitura',
    'obrigado': 'De nada! Boa leitura!',
    'obrigada': 'Por nada! Aproveite sua leitura!',

    //comprimentos
    'oi':'Olá! Seja bem-vindo(a) à Biblioteca Online! Como posso ajudar?',
    'olá': 'Oi! Bem-vindo(a) à nossa biblioteca virtual!',
    'ola': 'Oi! Bem-vindo(a) à nossa biblioteca virtual!',
    'e aí': 'E aí! Procurando algum livro hoje?',
  };


  getBotResponse(userMessage: string): string {
    if (!userMessage || userMessage.trim() === '') {
      return 'Por favor, digite uma mensagem.';
    }

    const message = userMessage.toLowerCase().trim();
    // ANALISANDO MENSAGEM

    // Procura por palavras individuais na mensagem
    const palavras = message.split(/\s+/);
    // PALAVRAS SEPARADAS

    // Primeiro: procura por correspondências exatas de frases
    for (const [key, response] of Object.entries(this.responses)) {
      if (message === key) {
        // CORRESPONDÊNCIA EXATA
        return response;
      }
    }

    // Segundo: procura se alguma palavra da mensagem está nas chaves
    for (const palavra of palavras) {
      for (const [key, response] of Object.entries(this.responses)) {
        if (key.includes(palavra) || palavra.includes(key)) {
          // PALAVRA ENCONTRADA
          return response;
        }
      }
    }

    // Terceiro: procura por partes das chaves na mensagem completa
    for (const [key, response] of Object.entries(this.responses)) {
      if (message.includes(key)) {
        // CHAVE ENCONTRADA NA MENSAGEM
        return response;
      }
    }

    // NENHUMA RESPOSTA ENCONTRADA
    return 'Desculpe, não entendi. Pode reformular? Posso ajudar com: horários, contato, livros, suporte.';
  }

  addMessage(messages: ChatMessage[], text: string, sender: 'user' | 'bot'): ChatMessage[] {
    return [...messages, { text, sender, timestamp: new Date() }];
  }
}