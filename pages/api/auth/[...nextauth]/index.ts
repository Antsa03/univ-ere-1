import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProviders({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password }: any = credentials;

        if (!credentials) return null;

        const user = await prisma.utilisateur.findUnique({
          where: { email: email },
        });

        if (!user) {
          return null;
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;

        return {
          id: user.matricule,
          email: user.email,
          name: user.nom + " " + user.prenoms,
          userRole: user.isAdmin ? "Administrateur" : "",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return { ...session, ...token };
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
