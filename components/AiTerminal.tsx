
import React, { useState, useRef, useEffect } from 'react';
import { Dossier } from '../types';
import { runQuery } from '../services/geminiService';
import { BrainIcon } from './Icons';

interface AiTerminalProps {
    dossierContext: Dossier | null;
}

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const AiTerminal: React.FC<AiTerminalProps> = ({ dossierContext }) => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);
    
    useEffect(() => {
        setMessages([]);
    }, [dossierContext])

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const aiResponseText = await runQuery(input, dossierContext);

        const aiMessage: Message = { sender: 'ai', text: aiResponseText };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-xl mb-2 text-green-400 flex items-center">
                <BrainIcon className="w-5 h-5 mr-2" />
                CONSULT ARCHIVE A.I.
            </h2>
            <div className="flex-grow overflow-y-auto pr-2">
                {messages.map((msg, index) => (
                    <div key={index} className="mb-2">
                        {msg.sender === 'user' ? (
                            <p><span className="text-green-400/70">{'> '}</span>{msg.text}</p>
                        ) : (
                            <p className="text-green-300 whitespace-pre-wrap">{msg.text}</p>
                        )}
                    </div>
                ))}
                 {isLoading && <p className="text-green-300 animate-pulse">ANALYZING...</p>}
                <div ref={endOfMessagesRef} />
            </div>
            <div className="mt-2 flex">
                <span className="pl-2 pr-2 text-green-400">{'>'}</span>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    className="flex-grow bg-transparent border-none focus:ring-0 text-green-400 placeholder-green-700"
                    placeholder="Enter query..."
                />
            </div>
        </div>
    );
};

export default AiTerminal;
