import { CreateUserPrams, SignInParams } from '@/types';
import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: 'com.ymdev.fastfood',
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: '68724217003abc970cc5',
  usersCollectionId: '687242940010bffadf1d'
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint!)
  .setProject(appwriteConfig.projectId!)
  .setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const db = new Databases(client);
const avatars = new Avatars(client);

export async function createNewUser({
  email,
  password,
  name
}: CreateUserPrams) {
  try {
    const newAcc = await account.create(ID.unique(), email, password, name);
    if (!newAcc) throw Error;

    await signIn({ email, password });

    const avatarUrl = avatars.getInitialsURL(name);

    return await db.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionId,
      ID.unique(),
      {
        accountId: newAcc.$id,
        email,
        name,
        avatar: avatarUrl
      }
    );
  } catch (e) {
    throw new Error(e as string);
  }
}

export async function signIn({ email, password }: SignInParams) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
  } catch (e) {
    throw new Error(e as string);
  }
}
