# Dfinity-React-Typescript-tailwind2

## Quick Start

A recipe,template that includes Vite, Dfinity, Typescript, ReactJS, React-Router, Tailwind2.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

To learn more before you start working with icptree, see the following documentation available online:

- [Quick Start](https://sdk.dfinity.org/docs/quickstart/quickstart-intro.html)
- [SDK Developer Tools](https://sdk.dfinity.org/docs/developers-guide/sdk-guide.html)
- [Motoko Programming Language Guide](https://sdk.dfinity.org/docs/language-guide/motoko.html)
- [Motoko Language Quick Reference](https://sdk.dfinity.org/docs/language-guide/language-manual.html)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.ic0.app)

### Step1

```bash
npm install or npm install --legacy-peer-deps
```

### Step2

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:8000?canisterId={asset_canister_id}`.

Additionally, if you are making frontend changes, you can start a development server with

### Step3

```bash
npm run dev
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 8000.

### Error fix

+ Address already in use (os error 48)
  + sudo killall dfx replica nodemanager

+ Error: EACCES: permission denied, scandir '/Users/xxxxx/work/Dfinity-React-Typescript-tailwind2/.dfx/state/replicated_state/node-100/crypto'
  + If the dfx directory permission does not work, please set the directory permission.

# [Reference]

+ https://github.com/MioQuispe/create-ic-app

+ https://github.com/FloorLamp/dfinity-react-ts-tailwind-starter