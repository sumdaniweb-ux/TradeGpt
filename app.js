async function askAI() {
  const prompt = document.getElementById("userInput").value;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + (window.OPENAI_API_KEY || "")
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      input: prompt
    })
  });

  const data = await response.json();
  document.getElementById("chat").innerText = data.output[0].content[0].text;
}

async function enhanceImage() {
  const file = document.getElementById("imageUpload").files[0];
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch("https://api.openai.com/v1/images/edits", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + (window.OPENAI_API_KEY || "")
    },
    body: formData
  });

  const data = await response.json();
  document.getElementById("imageResult").innerText = data.data[0].text;
}