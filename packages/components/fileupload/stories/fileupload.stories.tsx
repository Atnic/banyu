import React from "react";
// eslint-disable-next-line import/order
import {Meta} from "@storybook/react";
// import { fileupload } from "@jala-banyu/theme";

import {FeatherUploadCloud} from "@jala-banyu/shared-icons";
import {Button} from "react-aria-components";

import {FileUpload} from "../src";

export default {
  title: "Components/FileUpload",
  component: FileUpload,
  argTypes: {
    // color: {
    //   control: {type: "select"},
    //   options: ["default", "primary", "secondary", "success", "warning", "danger"],
    // },
    radius: {
      control: {type: "select"},
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
    },
    // isDisabled: {
    //   control: {
    //     type: "boolean",
    //   },
    // },
    withDropZone: {
      control: {type: "boolean"},
    },
  },
} as Meta<typeof FileUpload>;

const defaultProps = {
  // ...fileupload.defaultVariants,
  withDropZone: true,
  radius: "lg",
  size: "md",
};

const Template = (args: any) => {
  const [value, setValue] = React.useState();

  return (
    <div className="w-[400px]">
      <FileUpload
        {...args}
        fileUploadContent={
          <>
            <div className="flex justify-center">
              <div className="p-[10px] rounded-md bg-neutral-100">
                <FeatherUploadCloud className="text-neutral-800 text-xl" />
              </div>
            </div>
            <div className="flex flex-col gap-[6px] text-xs">
              <div>
                <span className="text-brand font-semibold">Pilih</span> atau drag dan drop disini
              </div>
              <span className="text-xs">PNG, JPG atau JPEG (max. 10 MB)</span>
            </div>
          </>
        }
        previewContent={
          !!value && (
            <div className="flex my-2 w-full items-center">
              <figure className="w-12 h-12 bg-neutral-200 rounded-xl relative max-w-sm overflow-hidden">
                <img alt="preview" className="object-cover w-full h-full" src={value?.srcFile} />
              </figure>
              <div className="flex flex-col p-2">
                <span className="text-neutral-800 text-sm font-normal truncate w-max">
                  {value?.name}
                </span>
                <Button
                  className="w-max text-red-600 text-left text-xs font-semibold"
                  onClick={setValue(null)}
                >
                  Hapus
                </Button>
              </div>
            </div>
          )
        }
        value={value}
      />
    </div>
  );
};

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
