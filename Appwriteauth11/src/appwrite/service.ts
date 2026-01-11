import {ID, Account, Client} from 'react-native-appwrite';
import Config from 'react-native-config';
import Snackbar from 'react-native-snackbar';

// Remove "const appwriteClient = new Client()" from here.
// Only keep strings here.
// const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!;
// const APPWRITE_PROJECT_ID: string = Config.APPWRITE_PROJECT_ID!;
const APP_PACKAGE_NAME = 'com.appwriteauth11';


const APPWRTIE_ENDPOINT = 'https://fra.cloud.appwrite.io/v1'
const APPWRITE_PROJECT_ID='695387330018a4506a3f'
type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

class AppwriteService {
  account: Account;
  client: Client; // Add a property for the client

  constructor() {
    // ✅ Initialize Client INSIDE the constructor
    this.client = new Client();

    this.client
      .setEndpoint(APPWRTIE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID)
      .setPlatform(APP_PACKAGE_NAME);

    // Pass the local client instance to Account
    this.account = new Account(this.client);
  }

  // create a new record of user inside appwrite
  async createAccount({email, password, name}: CreateUserAccount) {
    try {
      const userAccount = await this.account.create(
        ID.unique(), // Note: Syntax fixed (ID.unique() is usually the first arg, not inside object)
        email,
        password,
        name,
      );

      if (userAccount) {
        // todo:create login
        return this.login({email, password});
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });

      console.log('Appwrite service::createAccount()::', error);
    }
  }

  async login({email, password}: LoginUserAccount) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      Snackbar.show({
        text: String(error),
        duration: Snackbar.LENGTH_LONG,
      });

      console.log('Appwrite service::loginAccount()::', error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log('Appwrite service::geting current user()::', error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession('current');
    } catch (error) {
      console.log('Appwrite service::logout()::', error);
    }
  }
}

export default AppwriteService;