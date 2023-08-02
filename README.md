### TokenVerse

# Introduction: 

This is a Decentralized Faucet by which a user can initially claim 10,000 free CSP Tokens (Each user id can only claim it once) and use them for different purposes. User can transfer the CSP tokens from one account to another and also check the balance of the tokens.

# Screenshot

1) Homepage
   
   ![image](https://github.com/ShubhamG2311/TokenVerse/assets/76262127/27a96a5a-dbda-4909-8065-ae44965ce4b3)

   
2) Free tokens claimed

   ![image](https://github.com/ShubhamG2311/TokenVerse/assets/76262127/8ef580a2-54dd-4974-b437-dbf966a95d5c)

3) Checking the Balance

  ![image](https://github.com/ShubhamG2311/TokenVerse/assets/76262127/894d294b-8f30-4ed7-8112-607edf55d248)

4) Transferring the Tokens to another account

  ![image](https://github.com/ShubhamG2311/TokenVerse/assets/76262127/2872319b-6021-4c27-9417-13c7d0cbd5a9)

  ![image](https://github.com/ShubhamG2311/TokenVerse/assets/76262127/d87d4dd4-8dc9-4002-9319-8653501980e7)


# Check your Balance

1. Find out your principal id:

```
dfx identity get-principal
```

2. Save it somewhere.

e.g. My principal id is: gbdev-tyqsv-hnvqv-7mgz4-4kcfl-wbv6x-6khez-y56gq-uohqs-quomc-uqe


3. Format and store it in a command line variable:
```
OWNER_PUBLIC_KEY="principal \"$( \dfx identity get-principal )\""
```

4. Check that step 3 worked by printing it out:
```
echo $OWNER_PUBLIC_KEY
```

5. Check the owner's balance:
```
dfx canister call token balanceOf "( $OWNER_PUBLIC_KEY )"
```

# Charge the Canister


1. Check canister ID:
```
dfx canister id token
```

2. Save canister ID into a command line variable:
```
CANISTER_PUBLIC_KEY="principal \"$( \dfx canister id token )\""
```

3. Check canister ID has been successfully saved:
```
echo $CANISTER_PUBLIC_KEY
```

4. Transfer half a billion tokens to the canister Principal ID:
```
dfx canister call token transfer "($CANISTER_PUBLIC_KEY, 500_000_000)"
```

# Deploy the Project to the Live IC Network

1. Create and deploy canisters:

```
dfx deploy --network ic
```

2. Check the live canister ID:
```
dfx canister --network ic id token
```

3. Save the live canister ID to a command line variable:
```
LIVE_CANISTER_KEY="principal \"$( \dfx canister --network ic id token )\""
```

4. Check that it worked:
```
echo $LIVE_CANISTER_KEY
```

5. Transfer some tokens to the live canister:
```
dfx canister --network ic call token transfer "($LIVE_CANISTER_KEY, 50_000_000)"
```

6. Get live canister front-end id:
```
dfx canister --network ic id token_assets
```
7. Copy the id from step 6 and add .raw.ic0.app to the end to form a URL.
e.g. zdv65-7qaaa-aaaai-qibdq-cai.raw.ic0.app
