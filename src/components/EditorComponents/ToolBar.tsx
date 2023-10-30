import React from "react";
import Tooltip from "@/components/EditorComponents/Tooltip";
import { MdPublish, MdShare, MdOutlineSave } from "react-icons/md";

interface Props {}

const MyComponent: React.FC<Props> = () => {
  const [editName, setEditName] = React.useState(false);
  const [fileName, setFileName] = React.useState("test.py");

  const onClickText = () => {
    setEditName(editName ? false : true);
  };

  return (
    <div className="bg-gray-500 text-white px-1 py-[.25rem]">
      <div className="flex flex-row justify-between">
        <div className="w-[50%]" onClick={onClickText}>
          {editName ? (
            <p className="text-left">{fileName}</p>
          ) : (
            <p className="text-left">
              <input
                className="bg-transparent border-none in"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                autoFocus
              />
            </p>
          )}
        </div>

        <div>
          <div className="text-right flex space-x-1">
            <Tooltip text="Save">
              <MdOutlineSave className="h-6 w-6" />
            </Tooltip>
            <Tooltip text="Publish">
              <MdPublish className="h-6 w-6" />
            </Tooltip>
            <Tooltip text="Share">
              <MdShare className="h-6 w-6" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
