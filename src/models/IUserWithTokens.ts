export default interface IUserWithTokens { //model for user with token
   id?: number;
   username?: string;
   email?: string;
   firstName?: string;
   lastName?: string;
   gender?: string;
   image?: string;
   accessToken?: string;
   refreshToken?: string;
}