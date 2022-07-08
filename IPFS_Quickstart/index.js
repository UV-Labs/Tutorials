let PinataJWT = 'YOUR_PINATA_JWT';

const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");

const ipfsLink = document.querySelector(".ipfs-link");
let file;
var fileName;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  fileName = e.target.files[0].name;
  file = e.target.files[0];
  let filedata = `
    <div class="form">
    <h4>${fileName}</h4>
    <button class="btn">Upload</button>
    </div>`;
  dropArea.innerHTML = filedata;
  const uploadBtn = document.querySelector(".btn");
  uploadBtn.onclick = uploadFile;
});

async function uploadFile() {
    const data = new FormData();
    const metadata = JSON.stringify({
        name: fileName
    });
    data.append('pinataMetadata', metadata);
    data.append('file', file, file.name);
    const res = await fetch(`https://api.pinata.cloud/pinning/pinFileToIPFS`,{
        method: 'POST',
        headers: {
            Authorization: `Bearer ${PinataJWT}`,
        },
        body: data
    });

    let fileHash = (await res.json()).IpfsHash;
    let fileUrl = `https://ipfs.io/ipfs/${fileHash}`
    ipfsLink.innerHTML = `
    <p>Your file was uploaded to <a target='_blank' href=${fileUrl}>Link to file!</a></p>
    `;

}
