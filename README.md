NextJS (10) working with NextAuth boilerplate - deployable to AWS EC2 and Amplify

This confirmed works on both EC2 and Amplify.  This is Next10 as there were issues getting Next12/Auth working.

Requires a bunch of env vars

```
GITHUB_ID: created in GitHub apps
GITHUB_SECRET: secret for GitHub app
NEXTAUTH_URL: this is callback url
NEXT_PUBLIC_SECRET: generate a random secret for this
``` 
