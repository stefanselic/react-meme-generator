import styles from './App.css';
import { useState } from 'react';
import { saveAs } from 'file-saver';
import Example from './components/Select.js';
const baseUrl =
  'https://api.memegen.link/images/buzz/top/bottom.png?token=wxgjeu3jll4dt9q6fihy&amp;width=800&amp;frames=50';

export default function App() {
  // These state variables will be used to store the text input by the user for the top and bottom of the meme and the selected template for the meme.
  const [topInputText, setTopInputText] = useState('');
  const [bottomInputText, setBottomInputText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('');
  const [src, setSrc] = useState(baseUrl);

  const modifiedUrl = `https://api.memegen.link/images/${
    memeTemplate === '' ? 'doge' : memeTemplate
  }/${topInputText === '' ? 'doge' : topInputText}/${
    bottomInputText === '' ? 'doge' : bottomInputText
  }.png?token=wxgjeu3jll4dt9q6fihy&amp;width=800&amp;frames=50`;
  console.log(modifiedUrl);

  // Prevents the event to do whatever it is doing and now we can modify our src code with template literals
  const handleDownload = (event) => {
    event.preventDefault();
    setSrc(modifiedUrl);
    saveAs(modifiedUrl);
    // if (handleDownload) {
    //   return handleDownload;
    // } else {
    //   prompt('No valid Input');
    // }
  };

  return (
    <div className="container">
      <div className="App">
        <form>
          <div>
            <label htmlFor="Top-text">Top text</label>
            <input
              value={topInputText}
              onChange={(event) => setTopInputText(event.currentTarget.value)}
            />
          </div>
          <div>
            {/* <Example /> */}
            <label htmlFor="Meme-template">Meme template</label>
            <input
              value={memeTemplate}
              onChange={(event) => setMemeTemplate(event.currentTarget.value)}
            />
          </div>
          <img data-test-id="meme-image" src={src} alt="Generated Meme" />
          <div>
            <label htmlFor="Bottom-text">Bottom text</label>
            <input
              value={bottomInputText}
              onChange={(event) =>
                setBottomInputText(event.currentTarget.value)
              }
            />
          </div>
          {/* <MyComponent /> */}
          <button onClick={handleDownload}>Download</button>
        </form>
      </div>
    </div>
  );
}
