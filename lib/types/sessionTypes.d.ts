import * as IronSessionData from "iron-session"
declare module "iron-session" {
    interface IronSessionData {
      user?: {
        number: string;
      };
    }
  }