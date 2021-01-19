const { KmsProvider } = require("aws-kms-provider");
require("dotenv").config();

module.exports = {
  plugins: ["truffle-security"],

  networks: {
    ropsten: {
      network_id: "*",
      provider: () => {
        const provider = new KmsProvider(process.env.ENDPOINT, {
          region: process.env.REGION,
          keyIds: [process.env.KEY_ID],
        });

        return provider;
      },
    },
  },
  compilers: {
    solc: {
      version: "0.6.2",
    },
  },
};
require("ts-node").register({ files: true });
