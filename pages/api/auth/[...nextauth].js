import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET.substring(0, 5));
console.log(process.env.NEXTAUTH_URL);

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
    ],
})
