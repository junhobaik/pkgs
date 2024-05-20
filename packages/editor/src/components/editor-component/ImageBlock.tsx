import { useNodeViewContext } from '@prosemirror-adapter/react';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import debounce from 'lodash.debounce';

interface ImageBlockProps {}

const ImageBlock = (props: ImageBlockProps) => {
  const nodeViewContext = useNodeViewContext();
  const { contentRef, selected, node, setAttrs } = nodeViewContext;

  const [editMode, setEditMode] = useState(false);
  const [srcValue, setSrcValue] = useState(node.attrs.src);
  const [altValue, setAltValue] = useState(node.attrs.alt);

  useEffect(() => {
    console.log('ImageBlock', props, nodeViewContext);
  }, [props, nodeViewContext]);

  const setAttrsHandler = (key: 'src' | 'alt', value: string) => {
    setAttrs({ [key]: value });
  };

  return (
    <>
      <div className="flex flex-col relative">
        <img {...node.attrs} />
        <div className="flex self-end rounded bg-slate-200 px-2 py-1 text-xs text-gray-400 mt-px">
          <button
            className=""
            onClick={() => {
              setEditMode((prev) => !prev);
            }}
          >
            {editMode ? 'Close' : 'Edit'}
          </button>
        </div>
      </div>
      <Modal opened={editMode} onClose={() => setEditMode(false)}>
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="src">
              Link
            </label>
            <input
              id="src"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={srcValue}
              onChange={(e) => {
                setSrcValue(e.target.value);
                debounce(() => setAttrsHandler('src', e.target.value), 1000);
              }}
              onBlur={(e) => {
                setAttrsHandler('src', e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="alt">
              Alt
            </label>
            <input
              id="alt"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={altValue}
              onChange={(e) => {
                setAltValue(e.target.value);
                debounce(() => setAttrsHandler('alt', e.target.value), 1000);
              }}
              onBlur={(e) => {
                setAttrsHandler('alt', e.target.value);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImageBlock;
