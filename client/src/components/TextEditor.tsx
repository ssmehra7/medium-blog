import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import Header from "@editorjs/header";
import Quote from '@editorjs/quote';
import List from "@editorjs/list";
import Checklist from '@editorjs/checklist';
import Table from '@editorjs/table';




export const TextEditor = () =>{
  const ejInstance = useRef();

  const initEditor = () =>{
    const editor = new EditorJS({
      holder:'editorjs',
      onReady:()=>{
        ejInstance.current = editor;
      },
      autofocus:true,
      placeholder:"Tell your story ....",
      onChange: async ()=>{
        let content = await editor.saver.save();
        console.log(content);
      },
      tools:{
        header: Header,
        quote: Quote,
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          }
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        
        

        
      }
    })
  }
  useEffect(()=>{
    if(ejInstance.current === null){
      initEditor();
    }

  return ()=>{
    ejInstance?.current?.destroy();
    ejInstance.current= null;

  }
  },[]);


  return(
    <div id="editorjs" className="font-serif px-5 py-2 text-xl"></div>
  )

}

