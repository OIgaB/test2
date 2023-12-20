import { useState } from 'react';
// import { useRef, createRef } from "react";
import { api } from '../../services/api';


export const FilesUpload = () => {
  // const fileInput = useRef();
  // const fileInput = createRef();
  const [file, setFile] = useState(); //  заг. опис - перевірити чи це '' чи {}
  const [currentFile, setCurrentFile] = useState(); // детальні закодовані дані - за замовчуванням має бути результат get-запиту


  const handleFileChange = e => {
    // const inputFile = e.currentTarget.files; // FileList {0: File, length: 1}
    const inputFile = e.currentTarget.files[0];
    // console.log(inputFile);
    // File {
    // name: 'image (30).png', 
    // lastModified: 1702742682739, 
    // lastModifiedDate: Sat Dec 16 2023 18:04:42 GMT+0200 (за східноєвропейським стандартним часом), 
    // webkitRelativePath: '', 
    // size: 556394,
    // type: "image/png"
    // [[Prototype]]: File
    // }

    if (!inputFile) {
      return;
    }
    // Перевірка розміру файлу (в байтах)
    const maxSize = 5 * 1024 * 1024; // 5 МБ
    if (inputFile.size > maxSize) {
      alert('File size exceeds 5 MB. Select another file.');
      return;
    }
    
    const allowedFormats = [ // Допустимі формати - mimeTypes 
      'application/pdf',
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
    ]; 

    if (!allowedFormats.includes(inputFile.type)) { // Перевірка формату файлу
      alert(
        'Unsupported file format. Choose a file with the extension .pdf, .jpg, .png, .gif or .webp.'
      );
      return;
    }

    setFile(inputFile);

    const reader = new FileReader();
    reader.onload = function (event) {
      setCurrentFile(event.target.result);
      console.log(event.target.result); 
    };

    // ці методи читають зміст окремого Blob
    // reader.readAsDataURL(file); // => console.log(event.target.result); безкінченний рядок (data: URL, що представляє дані файлу): data:application/pdf;base64,JVBERi0xLjQKJfbk/N8KMSAwIG9iago8PAovV 
    // reader.readAsText(file); // результат у форматі рядка
    // reader.readAsBinaryString(file); // результат у форматі як і readAsText - необроблені двійкові дані у вигляді рядка
    reader.readAsArrayBuffer(file); // формат: 
    // ArrayBuffer(163856)
    // byteLength: 163856
    // detached: false
    // maxByteLength: 163856
    // resizable: false
    // [[Prototype]]: ArrayBuffer
    // [[Int8Array]]: Int8Array(163856)
    // [[Uint8Array]]: Uint8Array(163856)
    // [[Int16Array]]: Int16Array(81928)
    // [[Int32Array]]: Int32Array(40964)
    // [[ArrayBufferByteLength]]: 163856
    // [[ArrayBufferData]]: 118
  };

  const handleUploadFile = async (formData) => {
    try {
        const data = await api.addFile(formData); 
        console.log('data from back:', data);
        // setTasks(prevState => [...prevState, data]);
        return data;
    } catch(error) {
        console.error(error.message); 
    }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // const inputFilee = e.target.elements.file.value;
    // console.log(inputFilee);               // C:\fakepath\image (20).png
    // console.log(fileInput.current); // <input>
    // console.log(fileInput.current.value); // C:\fakepath\image (20).png  - useRef()
    // console.log(fileInput.current.value); // C:\fakepath\image (20).png  - createRef()

    const formData = new FormData(); // FormData {} об'єкт з методами

    if (file) formData.set('file', file); // метод set - зміна існуючого елемента 
    // formData.append('file', file); - метод append - додавання нового текстового поля в форму

    handleUploadFile(formData); // відправляємо на бек formData 
  };


  // const uploadFile = () => {
    // const fileInput = document.getElementById('fileInput');
    // // console.log('fileInput', fileInput); // <input ... />
    // const file = fileInput.files[0];

    // console.log('file', file);
    //File {name: 'CV - Olga Bagrii.pdf', 
    //      lastModified: 1697122567585, 
    //      lastModifiedDate: Thu Oct 12 2023 17:56:07 GMT+0300 (за східноєвропейським літнім часом), 
    //      webkitRelativePath: '', 
    //      size: 155287,
    //      type: "application/pdf"
    //}

    // if(fileInput.current) {
    //   const formData = new FormData();
    //   // formData.append('file', file);
    //   formData('file', fileInput.current.value);
    //   console.log('formData', formData); // FormData {} об'єкт з методами

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="file" 
            name="file" 
            // id="fileInput" 
            // ref={fileInput} 
            onChange={handleFileChange}
            accept="application/pdf, image/*,.png,.jpg,.gif,.web" // інші формати файлів не будуть видимі при виборі
          />
        </label>
        <button type="submit">Upload file</button> 
      </form>
      <div style={{ width: '500px', height: '500px', backgroundColor: 'yellowgreen'}}>
        <p>Тут буде відображатись те, що завантажимо (image/pdf ...)</p>
        {currentFile !== '/' ? (
          <img
            src={currentFile}
            alt="file"
            // className={scss.file}
          />
        ) : (
          <p>Щось інше</p>
        )}
      </div>
    </div>
  );
};
