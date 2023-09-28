import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState(`
# Umair Welcome you
## feel free the editor is yours
 
[Link to Google](https://www.google.com/)
\`inline code\`

\`\`\`javascript
// Code block
function greet(name) {
  return 'Hello, ' + name + '!';
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

**Bold Text**

`);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Markdown Previewer By Umair</h1>
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">Markdown Editor</h2>
          <textarea
          id="editor"
            className="form-control"
            placeholder="Enter text , GitHub-flavored Markdown here..."
            value={markdown}
            onChange={handleInputChange}
            rows="12"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-center">Preview</h2>
          <div
            className="border p-3"
            style={{ minHeight: '300px', fontFamily: 'Arial, sans-serif' }}
          >
          
            <div id="preview">
            <ReactMarkdown>{markdown}
            </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;