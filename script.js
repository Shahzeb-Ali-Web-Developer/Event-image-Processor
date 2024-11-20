document.getElementById("processBtn").addEventListener("click", async () => {
  const zipFile = document.getElementById("imageZip").files[0];
  const uniLogoFile = document.getElementById("uniLogo").files[0];
  const chapterLogoFile = document.getElementById("chapterLogo").files[0];
  const status = document.getElementById("status");

  if (!zipFile || !uniLogoFile || !chapterLogoFile) {
    status.textContent = "Please upload all files.";
    return;
  }

  status.textContent = "Processing...";

  const JSZip = window.JSZip;
  const zip = new JSZip();
  const outputZip = new JSZip();
  
  const uniLogo = await readFileAsImage(uniLogoFile);
  const chapterLogo = await readFileAsImage(chapterLogoFile);

  const zipContent = await JSZip.loadAsync(zipFile);

  const promises = [];
  zipContent.forEach((relativePath, file) => {
    if (!file.dir && /\.(png|jpe?g)$/i.test(relativePath)) {
      promises.push(
        file.async("blob").then(async (content) => {
          const image = await readFileAsImage(content);
          const canvas = overlayLogos(image, uniLogo, chapterLogo);
          const blob = await canvasToBlob(canvas);
          outputZip.file(relativePath, blob);
        })
      );
    }
  });

  await Promise.all(promises);

  const outputBlob = await outputZip.generateAsync({ type: "blob" });
  saveAs(outputBlob, "processed_images.zip");
  status.textContent = "Processing complete! Downloading ZIP...";
});

// Helper functions
function readFileAsImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function overlayLogos(image, uniLogo, chapterLogo) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;

  // Draw the base image
  ctx.drawImage(image, 0, 0, image.width, image.height);

  // Calculate logo sizes (10% of width)
  const logoWidth = image.width * 0.1;
  const uniLogoHeight = (uniLogo.height / uniLogo.width) * logoWidth;
  const chapterLogoHeight = (chapterLogo.height / chapterLogo.width) * logoWidth;

  // Define margin (2.5% of the image width)
  const margin = image.width * 0.025;

  // Draw university logo (top-left with reduced margin)
  ctx.drawImage(uniLogo, margin, margin, logoWidth, uniLogoHeight);

  // Draw chapter logo (top-right with reduced margin)
  ctx.drawImage(chapterLogo, image.width - logoWidth - margin, margin, logoWidth, chapterLogoHeight);

  return canvas;
}

function canvasToBlob(canvas) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, "image/png");
  });
}
