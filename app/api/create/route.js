import { StreamChat } from 'stream-chat';
import { clerkClient } from '@clerk/nextjs/server';

const api_key = '4svvygdsdquu';
const api_secret = '35vt34vytfwet3m569h3cutsexxjp4xyjufefaqysgbb6ku9n2qmpt28necxmmj4';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function POST(req) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);

  const body = await req.json();
  const userId = body?.data?.id;

  if (!userId) {
    return Response.json({ error: 'Missing user ID' }, { status: 400 });
  }

  const token = serverClient.createToken(userId);
  console.log('✅ Generated token:', token);

  // Upsert user on Stream Chat server
  await serverClient.upsertUser({ id: userId });

  // ✅ Save token to Clerk metadata
  try {
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        token,
      },
    });
    console.log('✅ Token saved to Clerk metadata.');
  } catch (err) {
    console.error('❌ Failed to update Clerk user metadata:', err);
    return Response.json({ error: 'Clerk metadata update failed' }, { status: 500 });
  }

  // (Optional) Add user to channels
  const slugs = ['python', 'javascript', 'java', 'c', 'csharp', 'php', 'html', 'css'];
  for (const slug of slugs) {
    const channel = serverClient.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalizeFirstLetter(slug) + ' Discussion',
      created_by_id: userId,
    });
    await channel.create();
    await channel.addMembers([userId]);
  }

  return Response.json({ message: 'User setup complete' });
}
