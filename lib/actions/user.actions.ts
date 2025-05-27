'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";
import { CountryCode, Products } from "plaid";
import { plaidClient } from "../plaid";

export const signIn = async ({ email, password } : signInProps) => {
    try {
      const { account } = await createAdminClient();

      const response = await account.createEmailPasswordSession(email, password);
      const session = await account.createEmailPasswordSession(email, password);
      (await cookies()).set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
      return parseStringify(response)
    } catch(err) {
        console.error(err)
    }
}

export const signUp = async (userData: SignUpParams) => {
    try {
        const { account } = await createAdminClient();

        const { email, password, firstName, lastName } = userData;

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`);
        const session = await account.createEmailPasswordSession(email, password);
      
        (await cookies()).set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        
        return parseStringify(newUserAccount)
    } catch(err) {
        console.error(err)
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      const user = await account.get()
      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }
  
  export const logoutAccount = async () => {
    try {
      const { account } = await createSessionClient();

      (await cookies()).delete('appwrite-session');
      await account.deleteSession('current');
    } catch(error) {
      console.error(error)
    }
  }

  export const createLinkToken = async (user: User) => {
    try {
      const tokenParams = {
        user: {
          client_user_id: user.$id
        },
        client_name: user.name,
        products: ['auth'] as Products[],
        language: 'en',
        country_codes: ['US'] as CountryCode[]
      }

      const response = await plaidClient.linkTokenCreate(tokenParams);

      return parseStringify({ linkToken: response.data.link_token })
    } catch(err) {
      console.error(err)
    }
  }

