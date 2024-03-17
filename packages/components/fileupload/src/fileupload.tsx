// import Upload from "@spectrum-icons/illustrations/Upload";
import {Text, FileTrigger, Button} from "react-aria-components";
import {DropZone} from "@react-spectrum/dropzone";
import React, {useEffect} from "react";
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
  setValue?: React.Dispatch<React.SetStateAction<object[]>>;
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
  // multiple = true,
  fileType = ["image/jpeg", "image/png"],
  withDropZone = true,
  size = "md",
  radius = "lg",
  setValue,
  fileUploadContent,
}: // ...props
fileUploadProps) {
  const [filledSrc, setFilledSrc] = React.useState([]);

  useEffect(() => {
    if (setValue) {
      setValue(filledSrc);
    }
  }, [filledSrc]);

  if (!!withDropZone) {
    return (
      <>
        <DropZone
          UNSAFE_className={String(styles["base"])}
          getDropOperation={(types) =>
            types.has("image/png") || types.has("image/jpeg") ? "copy" : "cancel"
          }
          isFilled={!!filledSrc}
          replaceMessage=" "
          onDrop={(files) => {
            let fileList = files.items.map(async (item) => {
              if (item.kind === "file") {
                if (fileType.includes(item.type)) {
                  let file = await item.getFile();

                  // @ts-ignore
                  return {
                    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                    lastModified: file.lastModified,
                    size: file.size,
                    type: file.type,
                    name: file.name,
                    srcFile: URL.createObjectURL(await item.getFile()),
                  };
                }
              }

              const newFile = [...filledSrc, fileList];

              // console.log("onDrop", newFile);
              // @ts-ignore
              setFilledSrc(newFile);
            });
          }}
        >
          <div>
            <FileTrigger
              allowsMultiple
              acceptedFileTypes={fileType}
              onSelect={(files) => {
                if (files) {
                  let fileList = [...files].map((file) => ({
                    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    lastModified: file.lastModified,
                    // lastModifiedDate: file.lastModifiedDate,
                    srcFile: URL.createObjectURL(file),
                  }));
                  const newFile = [...filledSrc, ...fileList];

                  // @ts-ignore
                  setFilledSrc(newFile);
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
        {
          // !!filledSrc
          // !!filledSrc && <Preview filledSrc={filledSrc} />
          !previewContent
            ? filledSrc.map((file, index) => (
                <div
                  key={index}
                  className={`flex my-2 w-full items-center ${!!previewContent && "hidden"}`}
                >
                  <figure className="w-12 h-12 bg-neutral-200 rounded-xl relative max-w-sm overflow-hidden border-1 border-neutral-200">
                    <img alt="preview" className="object-cover w-full h-full" src={file?.srcFile} />
                  </figure>
                  <div className="flex flex-col p-2">
                    <span className="text-neutral-800 text-sm font-normal truncate w-max">
                      {file?.name}
                    </span>
                    <Button
                      className="w-max text-red-600 text-left text-xs font-semibold focus:border-0"
                      // onClick={() => console.log(file?.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            : previewContent
        }
      </>
    );
  } else {
    return (
      <FileTrigger
        acceptedFileTypes={["image/jpeg"]}
        onSelect={(files) => {
          if (files) {
            let fileList = [...files].map((file) => ({
              id: Date.now().toString(36) + Math.random().toString(36).substr(2),
              name: file.name,
              type: file.type,
              size: file.size,
              lastModified: file.lastModified,
              // lastModifiedDate: file.lastModifiedDate,
              srcFile: URL.createObjectURL(file),
            }));
            const newFile = [...filledSrc, ...fileList];

            // @ts-ignore
            setFilledSrc(newFile);
          }
        }}
      >
        <Button className="border-0 rounded-lg">
          <Input
            placeholder="No file chosen"
            radius={radius}
            size={size}
            startContent={
              <span className="text-sm font-semibold text-neutral-800">Pilih file</span>
            }
          />
        </Button>
      </FileTrigger>
    );
  }
}

// function Preview({
//   filledSrc,
// }: // setFilledSrc,
// {
//   filledSrc: [];
//   setFilledSrc: React.Dispatch<React.SetStateAction<never[]>>;
// }) {
//   useEffect(() => {
//     console.log("preview", filledSrc);
//   }, []);
//   return (
//     <>
//       {filledSrc.map(({item, index}: {index: number; item: {srcFile: string; name: string}}) => (
//         <div key={index} className={`flex my-2 w-full items-center`}>
//           <figure className="w-12 h-12 bg-neutral-200 rounded-xl relative max-w-sm overflow-hidden">
//             <img alt="preview" className="object-cover w-full h-full" src={item.srcFile} />
//           </figure>
//           <div className="flex flex-col p-2">
//             <span className="text-neutral-800 text-sm font-normal truncate w-max">
//               {/*{filledSrc.name}*/}
//             </span>
//             <Button
//               className="w-max text-red-600 text-left text-xs font-semibold"
//               // onClick={() => setFilledSrc(null)}
//             >
//               Delete
//             </Button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

FileUpload.displayName = "Banyu.FileUpload";

export default FileUpload;
