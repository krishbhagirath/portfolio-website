import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { Send, User, Loader2 } from 'lucide-react';
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react';

const assistantAvatarSrc = '/IMG_2819 (2).jpeg';
const chatTransport = new DefaultChatTransport({
  api: '/api/chat',
});

const initialMessages: UIMessage[] = [
  {
    id: 'welcome',
    role: 'assistant',
    parts: [
      {
        type: 'text',
        text: 'Hi! Ask me anything about my work or background.',
      },
    ],
  },
];

const getMessageText = (message: UIMessage) =>
  message.parts.map((part) => (part.type === 'text' ? part.text : '')).join('');

const renderInlineMarkdown = (text: string) => {
  const parts: ReactNode[] = [];
  const markdownPattern = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = markdownPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const content = match[2] ?? match[3] ?? match[4];
    parts.push(
      <strong key={`${match.index}-${content}`} className="font-medium text-foreground">
        {content}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length ? parts : text;
};

const FormattedMessage = ({ text }: { text: string }) => {
  const lines = text.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let listType: 'ordered' | 'unordered' | null = null;

  const flushList = () => {
    if (!listItems.length) {
      return;
    }

    const ListTag = listType === 'ordered' ? 'ol' : 'ul';

    blocks.push(
      <ListTag
        key={`list-${blocks.length}`}
        className={`my-2 ml-4 space-y-1 ${
          listType === 'ordered' ? 'list-decimal' : 'list-disc'
        }`}
      >
        {listItems.map((item, index) => (
          <li key={`${item}-${index}`}>{renderInlineMarkdown(item)}</li>
        ))}
      </ListTag>
    );
    listItems = [];
    listType = null;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/);
    if (bulletMatch) {
      if (listType === 'ordered') {
        flushList();
      }
      listType = 'unordered';
      listItems.push(bulletMatch[1]);
      return;
    }

    const numberedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (numberedMatch) {
      if (listType === 'unordered') {
        flushList();
      }
      listType = 'ordered';
      listItems.push(numberedMatch[1]);
      return;
    }

    flushList();

    const headingMatch = trimmed.match(/^#{1,3}\s+(.+)$/);
    if (headingMatch) {
      blocks.push(
        <p key={`heading-${index}`} className="mt-2 font-medium text-foreground">
          {renderInlineMarkdown(headingMatch[1])}
        </p>
      );
      return;
    }

    blocks.push(
      <p key={`paragraph-${index}`} className="my-1">
        {renderInlineMarkdown(trimmed)}
      </p>
    );
  });

  flushList();

  return <>{blocks}</>;
};

const AssistantAvatar = () => {
  return (
    <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border/70 bg-secondary shadow-sm">
      <img
        src={assistantAvatarSrc}
        alt="Krish Bhagirath"
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
};

const UserAvatar = () => {
  return (
    <div className="h-9 w-9 shrink-0 rounded-full bg-foreground flex items-center justify-center">
      <User className="w-4 h-4 text-background" />
    </div>
  );
};

export const ChatBot = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, error, clearError } = useChat({
    transport: chatTransport,
    messages: initialMessages,
  });

  const isLoading = status === 'submitted' || status === 'streaming';
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Keep scrolling inside the chat panel so the page itself does not jump.
  useEffect(() => {
    const messagesContainer = messagesContainerRef.current;
    if (!messagesContainer) {
      return;
    }

    messagesContainer.scrollTo({
      top: messagesContainer.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = input.trim();
    if (!text || isLoading) {
      return;
    }

    clearError();
    setInput('');
    await sendMessage({ text });
  };

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 bg-secondary/20 border-y border-border/50">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center space-y-2">
          <h2 className="text-3xl font-light text-foreground">AI Assistant</h2>
          <p className="text-foreground/60 font-light">
            Have a question? Chat with my AI representation.
          </p>
        </div>

        <div className="bg-card/95 border border-border/60 rounded-lg shadow-card overflow-hidden flex flex-col h-[540px] min-h-0">
          <div className="flex items-center justify-between gap-3 border-b border-border/50 bg-card px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <AssistantAvatar />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">Krish's AI Assistant</p>
                <p className="truncate text-xs text-foreground/50">Portfolio context enabled</p>
              </div>
            </div>
          </div>

          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto bg-background/30 p-4 sm:p-6 space-y-5"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && <AssistantAvatar />}
                
                <div
                  className={`px-4 py-3 rounded-lg max-w-[82%] font-light shadow-sm ${
                    message.role === 'user'
                      ? 'bg-foreground text-background rounded-tr-sm shadow-none'
                      : 'bg-card text-foreground rounded-tl-sm border border-border/50'
                  }`}
                >
                  <div className="text-sm sm:text-base leading-relaxed">
                    {message.role === 'assistant' ? (
                      <FormattedMessage text={getMessageText(message)} />
                    ) : (
                      <p className="whitespace-pre-wrap">{getMessageText(message)}</p>
                    )}
                  </div>
                </div>

                {message.role === 'user' && <UserAvatar />}
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div className="flex gap-4 justify-start">
                <AssistantAvatar />
                <div className="px-4 py-3 rounded-lg bg-card text-foreground rounded-tl-sm border border-border/50 font-light flex items-center gap-2 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-foreground/50" />
                  <span className="text-sm text-foreground/60">Thinking...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="flex gap-4 justify-start">
                <AssistantAvatar />
                <div className="px-4 py-3 rounded-lg bg-destructive/10 text-destructive rounded-tl-sm border border-destructive/20 font-light text-sm sm:text-base">
                  I'm currently receiving too many requests or my daily limit has been reached. Please try again later!
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-card border-t border-border/50">
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 max-w-full relative"
            >
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-background border border-border/60 rounded-lg px-4 py-3 text-sm sm:text-base font-light text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-border transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input?.trim()}
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
