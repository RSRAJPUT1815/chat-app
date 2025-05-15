"use client";

import { useState, useEffect } from 'react';
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = '4svvygdsdquu';
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };

  const [channel, setChannel] = useState(null);
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const initChannel = async () => {
      const channel = client.channel('messaging', slug, {
        image: `https://getstream.io/random_png/?name=${slug}`,
        name: capitalizeFirstLetter(slug) + ' Discussion',
        members: [userId],
      });

      await channel.watch();
      await channel.addMembers([userId]);
      setChannel(channel);
    };

    initChannel();
  }, [client, slug, userId]);

  if (!client || !channel) return <div>Setting up chat...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatForum;
