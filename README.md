# nextauth-token-error
A Next.js + Express.js + NextAuth setup that results in a "no access token provided" error 

### To Reproduce:
1. `git clone https://github.com/BorisTheTripper/nextauth-token-error.git`
2. (Optionally) change the existing oauth credentials in `.env` with your own. If you do, make sure to configure your app as follows:

   ![image](https://github.com/BorisTheTripper/nextauth-token-error/assets/62946861/5c4d333a-a6d2-431d-a2f5-09b3c8041a9a)

4. `pnpm install`
3. `pnpm run dev`
4. Go to `localhost:3000` while watching the terminal logs. If you see an `ECONNREFUSED` error, just go to `apps/server/src/main.ts`, edit the file slightly & save to trigger nodemon one more time. After this, refresh the broser page & you should see NextAuth logs in the server app.
5. **Click "sign in" button** & watch what happens in the logs as you attempt to sign in.
