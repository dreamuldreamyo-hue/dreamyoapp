if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/dreamyoapp/sw.js")
      .catch((err) => console.log("SW register failed:", err));
  });
}
