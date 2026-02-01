import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/lib/bdConnect";
import bcrypt from "bcryptjs";
const userList = [
  { id: 1, username: "admin", password: "1234", name: "Admin User" },
];

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // from input form
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "••••••••",
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        console.log(password);
        //find user
        // const user = userList.find((u) => u.username == username);
        const user = await dbConnect("users").findOne({ email });
        //if !user => err
        if (!user)
          return {
            massage: "No user found with this email",
          };
        console.log(user);

        //match password
        const isPassWordOk = await bcrypt.compare(password, user?.password);
        // console.log(isPassWordOk);
        // const isPassWordOk =  (password === user.password);

        if (isPassWordOk) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      if (token) {
        session.role = token.role;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
