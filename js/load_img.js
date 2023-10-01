const fileInput = document.getElementById("file-input");
const load_window = document.getElementById("load_window");

fileInput.addEventListener("change", function () {
    load_window.innerHTML = "";
  const files = this.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        load_window.appendChild(img);
      };

      reader.readAsDataURL(file);
    } else {
        load_window.innerHTML += `<p>${file.name} (Тип файлу: ${file.type})</p>`;
    }
  }
});