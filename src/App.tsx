import React from "react";
import { StyleSheet, View, SafeAreaView, ActivityIndicator, StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <WebView
          containerStyle={{
            flex: 1,
            alignSelf: "stretch",
          }}
          source={{ uri: "https://web.whatsapp.com" }}
          userAgent={
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
          }
          startInLoadingState={true}
          hideKeyboardAccessoryView={true}
          autoManageStatusBarEnabled={false}
          renderLoading={() => (
            <View
              style={{
                flex: 1,
                alignSelf: "stretch",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <ActivityIndicator />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  webview: {
    backgroundColor: "red",
  },
});
