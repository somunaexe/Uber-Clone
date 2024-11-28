import * as SecureStore from "expo-secure-store";
// export interface TokenCache {
//   getToken: (key: string) => Promise<string | undefined | null>;
//   saveToken: (key: string, token: string) => Promise<void>;
//   clearToken?: (key: string) => void;
// }

/**
 * Retrieves a token from the secure store and logs if it was used or not.
 * If there is an error, it deletes the item and returns null.
 * @param {string} key The key to retrieve the token from.
 * @returns {Promise<string | null>} The token or null if no token was found.
 */
export const tokenCache = {
  async getToken(key: string) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
