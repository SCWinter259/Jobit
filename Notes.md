Since this app is developed using Linux, but aim for both iOS and Android, we use Expo. Start with doing `npx create-expo-app@latest -e with-router ./` (`./` is to create the project right in our current repo/directory)

To install some addition dependencies that we need, use `npm install expo-font axios react-native-dotenv`.

To start app, use `npm start`.

To test app on phone, use Expo Go app (on your phone). Then, use phone to scan the QR code generated when you run `npm start`.

A possible case is that your wifi may block the Expo Go app from actually testing your app. A solution is to `npm install -g expo-cli`. We are gonna use this package to run our application on laptop.

After that, you can run `expo-cli start --tunnel` instead of `npm start`, then use your phone to scan the QR code just like how you did before. The app will work on your phone now.