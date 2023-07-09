import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ChatAvatar from '../components/ChatAvatar'
import ChatApiField from '../components/ChatApiField'
import ChatMessageInput from '../components/ChatMessageInput'
import ChatMessage from '../components/ChatMessage'
import './Chat.css'
import Scroll from '../components/Scroll'
import chatkitten from '../api/chatkitten'

const Chat = () => {

    const [searchParams] = useSearchParams();
    const [messages, setMessages] = useState([]);
    const [messageInputEnabled, setMessageInputEnabled] = useState(true);

    const name = searchParams.get('name');
    const id = searchParams.get('id');
    const email = searchParams.get('email');

    useEffect(() => {
        async function fetchMsg(){

            if(!messages.length) return;
            if(messages[messages.length - 1].isKitten) return;
    
            const response = await chatkitten({ id, name, email, messages });

            if(response.status === 200){
                setMessages((prev) => [...prev, { ...response.result, isKitten: true }]);
            }else{
                console.error(response.error);
            }
            setMessageInputEnabled(true);
        }

        fetchMsg();
    }, [messages]);

    const addMessage = async ({ content, isKitten }) => {
        setMessageInputEnabled(false);
        setMessages((prev) => [...prev, { content, role: 'user', isKitten }]);
    };

    return (
        <>
            <div>
                <a className="f3 ma3 georgia light-pink" href="/">Homepage</a>
            </div>
            <div className="tc br3 pa3 ma2 db flex justify-between bw2">
                <div className="flex justify-center items-center">
                    <ChatAvatar id={id} />
                    <h1 className="f2 georgia hot-pink">{name}</h1>
                </div>
                <ChatApiField />

            </div>
            <Scroll className="flex flex-column">
                {
                    messages.map((message, i) => (
                        <ChatMessage 
                         key={i} 
                         content={message.content} 
                         isKitten={message.isKitten} />
                    ))
                }
            </Scroll>
            <ChatMessageInput onClick={addMessage} enabled={messageInputEnabled} />
        </>
    )
}

export default Chat