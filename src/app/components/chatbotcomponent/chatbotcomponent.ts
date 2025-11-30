import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage, ChatbotService } from '../../services/chatbot';

@Component({
  selector: 'app-chatbotcomponent',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './chatbotcomponent.html',
  styleUrls: ['./chatbotcomponent.css'] 
})
export class ChatbotComponent implements OnInit {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  messages = signal<ChatMessage[]>([]);
  userInput = '';
  isChatOpen = false;

  suggestedQuestions = signal([
    'qual o horario de funcionamento?',
    'Como posso entrar em contato?',
    'Quais serviços vocês oferecem?',
    'Preciso de suporte técnico'
  ]);

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.addBotMessage('Olá! Sou seu assistente virtual. Como posso ajudar?');
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
  if (!this.userInput.trim()) return;

  console.log('=== NOVA MENSAGEM ===');
  console.log('👤 USUÁRIO DIGITOU:', this.userInput);

  const userMessage = this.userInput;
  
  // Adiciona mensagem do usuário
  this.messages.update(messages => 
    this.chatbotService.addMessage(messages, userMessage, 'user')
  );

  this.userInput = '';
  this.scrollToBottom();

  // Simula delay e busca resposta
  setTimeout(() => {
    console.log('🔄 BUSCANDO RESPOSTA...');
    const botResponse = this.chatbotService.getBotResponse(userMessage);
    console.log('🤖 RESPOSTA DO BOT:', botResponse);
    this.addBotMessage(botResponse);
  }, 800);
}

  sendSuggestedQuestion(question: string) {
    this.userInput = question;
    this.sendMessage();
  }

  private addBotMessage(text: string) {

    this.messages.update(messages =>
      this.chatbotService.addMessage(messages, text, 'bot')
    );
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = 
          this.chatContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey){
      event.preventDefault();
      this.sendMessage();
    }
  }
  clearChat() {
    this.messages.set([]);
    this.addBotMessage('Conversa reiniciada! Como posso ajudar?');
  }
}