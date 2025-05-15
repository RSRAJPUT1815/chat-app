import { currentUser } from '@clerk/nextjs/server';

import ChatForum from '@/components/ChatForum';

export default async function Page({ params }) {
  const { slug } = params;
  const user = await currentUser();

  

  const token = user.publicMetadata?.token;

  if (!token) {
    console.error('❌ No Stream token found in Clerk metadata.');
    // You can redirect or throw here
    throw new Error('Stream Chat token missing.');
  }

  return (
    <ChatForum
      slug={slug}
      clerkUser={{
        id: user.id,
        name: user.firstName,
        token,
      }}
    />
  );
}
