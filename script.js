
const input = document.querySelector("#inputbox");
const genRatebtn = document.querySelector(".genrate");
const img = document.querySelector(".img");

const downLoad = document.querySelector(".download");
downLoad.classList.add("genrate");
downLoad.addEventListener("click", () => {
  let myinput = input.value;
  console.log(myinput);
  if (myinput === "") {
    alert("Please enter something");
  } else {
    img.onload = () => {
      downloadQRCode();
    };
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${myinput}`;
  }
});

function downloadQRCode() {
  const downloadLink = document.createElement("a");
  downloadLink.href = img.src;
  downloadLink.download = "qrcode.png";
  downloadLink.click();
}
