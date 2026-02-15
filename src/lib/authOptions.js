import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/lib/bdConnect";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";

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
        //find user
        // const user = userList.find((u) => u.username == username);
        const user = await dbConnect("users").findOne({ email });
        //if !user => err
        if (!user)
          return {
            massage: "No user found with this email",
          };

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

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const payload = {
          ...user,
          provider: account.provider,
          providerId: account.providerAccountId,
          role: "user",
          createdAt: new Date().toISOString(),
        };

        if (!user?.email) {
          return false;
        }

        const isExist = await dbConnect("users").findOne({
          email: user.email,
          providerId: account.providerAccountId,
        });
        if (!isExist) {
          const result = await dbConnect("users").insertOne(payload);
        }
        return true;
      } catch (error) {
        return false;
      }
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

      // google sign in check user role from database
      if (user?.email) {
        const dbUser = await dbConnect("users").findOne({
          email: user.email,
        });

        token.email = dbUser.email;
        token.role = dbUser.role || "user";
      }
      return token;
    },
  },
};
