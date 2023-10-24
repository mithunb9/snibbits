"use client";

import React from "react";
import ToolBar from "@/components/EditorComponents/ToolBar";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { Toolbar } from "@mui/material";

const Editor: React.FC<{}> = () => {
  const [value, setValue] = React.useState<string>("");

  const onChange = React.useCallback(
    (val: React.SetStateAction<string>, viewUpdate: any) => {
      console.log("val:", val);
      setValue(val);
    },
    []
  );

  return (
    <>
      <div className="w-[85%] m-auto rounded-md overflow-hidden">
        <div className="rounded-t-lg bg-white">
          <ToolBar />
        </div>
        <div className="rounded-b-lg bg-white">
          <CodeMirror
            value={value}
            height="15rem"
            extensions={[javascript({ jsx: true }), python()]}
            theme={oneDark}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
