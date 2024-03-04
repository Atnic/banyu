// import Upload from "@spectrum-icons/illustrations/Upload";
import {Text, FileTrigger, Button} from "react-aria-components";
import {DropZone} from "@react-spectrum/dropzone";
import React from "react";
import {FeatherUploadCloud} from "@jala-banyu/shared-icons";
import {tv} from "tailwind-variants";
import {Input} from "@jala-banyu/input";

const styles = tv({
  base: [
    "w-full",
    "!border-neutral-200",
    "!border-solid",
    "!rounded-lg",
    "data-[drop-target='true']:!bg-brand-50",
    "data-[drop-target='true']:!border-brand-400",
    "transition",
    "duration-300",
    "ease-in-out",
  ],
  variants: {
    contentWrapper: {
      fileTrigger: "p-4 w-full rounded-lg",
      radius: {
        none: "!rounded-none",
        sm: "!rounded-sm",
        lg: "!rounded-lg",
        full: "!rounded-full",
      },
    },
  },
});

export interface fileUploadProps {
  fileType: string[];
  value?: object;
  errorMessage?: string;
  size?: string;
  radius?: string;
  multiple: boolean;
  withDropZone: boolean;
  fileUploadContent?: React.ReactNode;
  previewContent?: React.ReactNode;
  onSelect?: (src: object | undefined) => void;
  onDrag?: (src: object | undefined) => void;
  onDelete?: (src: object | undefined) => void;
}

function FileUpload({
  previewContent,
  // onDrag,
  // onDelete,
  // multiple = false,
  onSelect,
  withDropZone = true,
  size,
  radius,
  value,
  fileUploadContent,
}: // ...props
fileUploadProps) {
  const [filledSrc, setFilledSrc] = React.useState(value);

  // useEffect(
  //   (src = filledSrc) => {
  //     onSelect?.(src);
  //   },
  //   [filledSrc],
  // );
  if (!!withDropZone) {
    return (
      <>
        <DropZone
          UNSAFE_className={styles("base")}
          getDropOperation={(types) =>
            types.has("image/png") || types.has("image/jpeg") ? "copy" : "cancel"
          }
          isFilled={!!filledSrc}
          replaceMessage=" "
          onDrop={async (e) => {
            e.items.map(async (item) => {
              if (item.kind === "file") {
                if (item.type === "image/jpeg" || item.type === "image/png") {
                  let file = await item.getFile();

                  setFilledSrc([
                    {...filledSrc},
                    {
                      type: file.type,
                      name: file.name,
                      srcFile: URL.createObjectURL(await item.getFile()),
                    },
                  ]);
                }
              } else if (item.kind === "text") {
                let file = await item.getText("image/jpeg");

                setFilledSrc([
                  {...filledSrc},
                  {
                    type: file.type,
                    name: file,
                    srcFile: undefined,
                  },
                ]);
              }
            });
          }}
        >
          <div>
            <FileTrigger
              acceptedFileTypes={["image/jpeg"]}
              onSelect={async (e) => {
                let file = Array.from(e).find((file) => file.type === "image/jpeg");

                if (file) {
                  setFilledSrc({
                    type: file.type,
                    name: file.name,
                    srcFile: URL.createObjectURL(file),
                  });
                }
              }}
            >
              <Button className={styles({contentWrapper: "fileTrigger"})}>
                <Text className="flex gap-3 flex-col w-full" slot="label">
                  {fileUploadContent || (
                    <>
                      <div className="flex justify-center">
                        <div className="p-[10px] rounded-md bg-neutral-100">
                          <FeatherUploadCloud className="text-neutral-800 text-xl" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[6px] text-xs">
                        <div>
                          <span className="text-brand font-semibold">Select</span> or drag and drop
                          here
                        </div>
                        <span className="text-xs">PNG, JPG or JPEG (max. 10 MB)</span>
                      </div>
                    </>
                  )}
                </Text>
              </Button>
            </FileTrigger>
          </div>
        </DropZone>
        {/*{!!filledSrc && previewContent}*/}
        {!!filledSrc &&
          (!previewContent ? (
            <div className={`flex my-2 w-full items-center ${!!previewContent && "hidden"}`}>
              <figure className="w-12 h-12 bg-neutral-200 rounded-xl relative max-w-sm overflow-hidden">
                <img
                  alt="preview"
                  className="object-cover w-full h-full"
                  src={filledSrc?.srcFile}
                />
              </figure>
              <div className="flex flex-col p-2">
                <span className="text-neutral-800 text-sm font-normal truncate w-max">
                  {filledSrc.name}
                </span>
                <Button
                  className="w-max text-red-600 text-left text-xs font-semibold"
                  onClick={() => setFilledSrc(null)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ) : (
            previewContent
          ))}
      </>
    );
  } else {
    return (
      <FileTrigger
        acceptedFileTypes={["image/jpeg"]}
        onSelect={async (e) => {
          let file = Array.from(e).find((file) => file.type === "image/jpeg");

          if (file) {
            setFilledSrc({
              type: file.type,
              name: file.name,
              srcFile: URL.createObjectURL(file),
            });
            onSelect({
              type: file.type,
              name: file.name,
              srcFile: URL.createObjectURL(file),
            });
          }
        }}
      >
        <Input
          placeholder="No file chosen"
          radius={radius}
          size={size}
          startContent={<span className="text-sm font-semibold text-neutral-800">Pilih file</span>}
        />
      </FileTrigger>
    );
  }
}

FileUpload.displayName = "Banyu.FileUpload";

export default FileUpload;
