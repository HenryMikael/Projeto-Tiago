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
    //comprimentos
    'oi':'Olá! Seja bem-vindo(a) à Biblioteca Online! Como posso ajudar?',
    'olá': 'Oi! Bem-vindo(a) à nossa biblioteca virtual!',
    'ola': 'Oi! Bem-vindo(a) à nossa biblioteca virtual!',
    'e aí': 'E aí! Procurando algum livro hoje?',

    //infos
    'horario': 'Nossa biblioteca online funciona 24 horas por dia, todos os dias!',
    'horário': 'Nossa biblioteca online funciona 24 horas por dia, todos os dias!',
    'funcionamento': 'Estamos disponíveis 24h para busca e leitura de livros digitais!',

    //contato
    'contato': 'Você pode falar com nossa equipe pelo email: suporte@biblioteca.com',
    'telefone': 'Atendimento via telefone não está disponível, mas você pode usar o email suporte@biblioteca.com',
    'email': 'Você pode nos contatar pelo email: suporte@biblioteca.com',

    //livros e serviços
    'produtos': 'Disponibilizamos empréstimo digital, leitura online e recomendações personalizadas!',
    'serviços': 'Disponibilizamos empréstimo digital, leitura online e recomendações personalizadas!',
    'servicos': 'Disponibilizamos empréstimo digital, leitura online e recomendações personalizadas!',
    'preços': 'O acesso aos livros depende do plano. Deseja saber mais sobre assinaturas?',
    'precos': 'O acesso aos livros depende do plano. Deseja saber mais sobre assinaturas?',
    
    //suporte
    'suporte': 'Nosso suporte funciona todos os dias via email!',
    'ajuda': 'Claro! Sobre qual livro ou função posso te ajudar?',

    //despedida
    'tchau': 'Até logo! Boa leitura',
    'obrigado': 'De nada! Boa leitura!',
    'obrigada': 'Por nada! Aproveite sua leitura!'
  };


  getBotResponse(userMessage: string): string {
    if (!userMessage || userMessage.trim() === '') {
      return 'Por favor, digite uma mensagem.';
    }

    const message = userMessage.toLowerCase().trim();
    console.log('🔍 ANALISANDO MENSAGEM:', message);

    // Procura por palavras individuais na mensagem
    const palavras = message.split(/\s+/);
    console.log('📝 PALAVRAS SEPARADAS:', palavras);

    // Primeiro: procura por correspondências exatas de frases
    for (const [key, response] of Object.entries(this.responses)) {
      if (message === key) {
        console.log('✅ CORRESPONDÊNCIA EXATA:', key);
        return response;
      }
    }

    // Segundo: procura se alguma palavra da mensagem está nas chaves
    for (const palavra of palavras) {
      for (const [key, response] of Object.entries(this.responses)) {
        if (key.includes(palavra) || palavra.includes(key)) {
          console.log('✅ PALAVRA ENCONTRADA:', palavra, 'na chave:', key);
          return response;
        }
      }
    }

    // Terceiro: procura por partes das chaves na mensagem completa
    for (const [key, response] of Object.entries(this.responses)) {
      if (message.includes(key)) {
        console.log('✅ CHAVE ENCONTRADA NA MENSAGEM:', key);
        return response;
      }
    }

    console.log('❌ NENHUMA RESPOSTA ENCONTRADA');
    return 'Desculpe, não entendi. Pode reformular? Posso ajudar com: horários, contato, livros, suporte e planos.';
  }

  addMessage(messages: ChatMessage[], text: string, sender: 'user' | 'bot'): ChatMessage[] {
    return [...messages, { text, sender, timestamp: new Date() }];
  }
}