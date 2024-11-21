## SUI COIN MERGER

The Sui Coin Merger is a powerful tool designed for interacting with SUI networks. This bot automates merging processes of all coin making it an ideal solution for you to merge all coin assets.

## PREREQUISITE

- Git
- Node JS (v22)

## BOT FEATURE

- Multi Account 
- Use PK
- Auto Merge ALl Your COIN


## SETUP & CONFIGURE BOT

### LINUX

1. Clone project repository
   ```
   git clone https://github.com/Rambeboy/sui-coin-merger.git && cd sui-coin-merger
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Configure all folder
   ```
   cp -r accounts/accounts_tmp.js accounts/accounts.js
   ```
4. Configure your accounts
   ```
   nano accounts/accounts.js
   ```
5. Configure the bot config
    ```
   nano config/config.js
    ```
6. To run Auto TX
   ```
   npm run start
   ```
   
### WINDOWS

1. Open your `Command Prompt` or `Power Shell`.

2. Clone project repository
   ```
   git clone https://github.com/Rambeboy/sui-coin-merger.git
   ```
   and cd to project dir
   ```
   cd sui-coin-merger
   ```
3. Install dependencies
   ```
   npm install
   ```
5. Navigate to `sui-coin-merger` directory. 

6. Navigate to `accounts` folder and rename `accounts_tmp.js` to `accounts.js`.
7. Now open `acccounts.js` and setup your accounts. 

8. Now Back to `sui-coin-merger` directory and Navigate to `config` and adjust the `config.js` as needed.

9.  Back to `sui-coin-merger` directory.

10. To start the app open your `Command Prompt` or `Power Shell`

11. To run auto Tx Bot
    ```
    npm run start
    ```

## UPDATE BOT

To update bot follow this step :
1. Run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. Run
   ```
   npm update
   ```
2. Start the bot

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---