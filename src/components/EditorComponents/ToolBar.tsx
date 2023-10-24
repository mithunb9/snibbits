import React from "react";
import Tooltip from "@/components/EditorComponents/Tooltip";
import { MdPublish, MdShare, MdOutlineSave } from "react-icons/md";

interface Props {}

const MyComponent: React.FC<Props> = () => {
  return (
    <div className="bg-gray-500 text-white px-1 py-[.25rem]">
      <div className="flex flex-row justify-between">
        <p className="text-left">test.py</p>

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
