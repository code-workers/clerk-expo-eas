import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/clerk-expo";
import { Text } from "react-native";
import * as SecureStore from "expo-secure-store";

const tokenCache = {
  getToken(key: string) {
    return SecureStore.getItemAsync(key);
  },
  saveToken(key: string, value: string) {
    return SecureStore.setItemAsync(key, value);
  },
};

export default function App() {
  return (
    <ClerkProvider
      frontendApi="clerk.dfco3.qxunt.lcl.dev"
      tokenCache={tokenCache}
    >
      <ClerkLoading>
        <Text style={{ marginTop: 44, marginLeft: 8 }}>
          Clerk is loading...
        </Text>
      </ClerkLoading>
      <ClerkLoaded>
        <Text style={{ marginTop: 44, marginLeft: 8 }}>Clerk ready</Text>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
