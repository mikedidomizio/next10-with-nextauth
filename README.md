NextJS 10 test with NextAuth, to be tested to see the bare bones if it works with AWS Amplify

This confirmed works on both EC2 and Amplify.  Although this is Next10, I suspect Next12 and greater will work.

Requires a bunch of env vars

```
GITHUB_ID: created in GitHub apps
GITHUB_SECRET: secret for GitHub app
NEXTAUTH_URL: this is callback url
NEXT_PUBLIC_SECRET: generate a random secret for this
``` 
