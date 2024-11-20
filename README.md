
# Event Image Batch Processor

**Image Batch Processor** is a web-based tool that allows users to batch process images by overlaying custom logos. It is ideal for event organizers, developers, or designers who need to apply consistent branding to a large set of images.

## 🚀 Features

- Upload a **ZIP file** of event images (JPEG/PNG).
- Overlay two custom logos:
  - **University Logo** (top-left corner).
  - **Chapter Logo** (top-right corner).
- Batch processes all images in the ZIP file and generates a new ZIP file with the logos applied.
- Works entirely in the browser – no server or external processing required.
- Responsive design for desktop and mobile.

## 🛠️ Technologies Used

- **HTML5**: Markup for the web interface.
- **CSS3**: Styling with a responsive design.
- **JavaScript**: Client-side logic for file handling, image processing, and ZIP management.
- **Libraries**:
  - [JSZip](https://stuk.github.io/jszip/): For handling ZIP files.
  - [FileSaver.js](https://github.com/eligrey/FileSaver.js/): For downloading the processed ZIP file.
  - [Pica](https://github.com/nodeca/pica): For efficient image resizing.

## 📖 How to Use

1. Clone or download the repository to your local machine:
   ```bash
   git clone https://github.com/YourUsername/Image-Batch-Processor.git
   ```
2. Open the `index.html` file in your browser.
3. Upload:
   - A **ZIP file** containing the images to process.
   - A **University Logo** (PNG format).
   - A **Chapter Logo** (PNG format).
4. Click the **Process Images** button.
5. Download the processed ZIP file containing images with logos applied.

## 📂 File Structure

```
Image-Batch-Processor/
├── index.html      # Main HTML file
├── style.css       # Styling for the tool
├── script.js       # JavaScript logic
├── README.md       # Documentation
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/Shahzeb-Ali-Web-Developer/Image-Batch-Processor/issues).

## 🧑‍💻 About Me

**Shahzeb Ali**  
Microsoft Beta Student Ambassador  
Data Science Student at University of the Punjab  

- [GitHub](https://github.com/Shahzeb-Ali-Web-Developer)
- [LinkedIn](https://linkedin.com/in/shahzeb2001)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
