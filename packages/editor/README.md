# @junhobaik/editor

### Example

```javascript
import EditorContainer, { EditorRef } from './EditorContainer';

const defaultValue = '# 제목\n\n이곳에 내용을 작성하세요.';

const MyComponent = () => {
  const editorRef = useRef < EditorRef > null;

  const handleChange = (markdown: string) => {
    console.log(markdown);
  };

  const toolbarItems = [
    { icon: 'edit', onClick: () => console.log('Edit clicked') },
    { icon: 'format_bold', onClick: () => console.log('Bold clicked') },
  ];

  const handleInsert = () => {
    if (editorRef.current) {
      editorRef.current.insert('\n\n### 새로운 내용이 삽입되었습니다.');
    }
  };

  const handleUpdate = () => {
    if (editorRef.current) {
      editorRef.current.update('# 업데이트된 제목\n\n새롭게 업데이트된 내용입니다.');
    }
  };

  const getMarkdown = () => {
    if (editorRef.current) {
      const md = editorRef.current.getMarkdown();
      console.log(md);
    }
  };

  return (
    <div>
      <EditorContainer defaultValue={defaultValue} onChange={handleChange} toolbarItems={toolbarItems} ref={editorRef} />
      <button onClick={handleInsert}>Insert</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={getMarkdown}>Get Markdown</button>
    </div>
  );
};
```
