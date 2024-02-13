import {Meta} from "@storybook/react";

import {Skeleton} from "../src";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    children: {
      hidden: true,
    },
    isLoaded: {
      control: {
        type: "boolean",
      },
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Skeleton>;

// const defaultProps = {
//   ...skeleton.defaultVariants,
//   isLoaded: false,
//   children: <div className="w-[200px] h-[100px]">Banyu</div>,
// };
//
// const DefaultTemplate = (args: SkeletonProps) => (
//   <Card className="w-[200px] space-y-5 p-4" radius="lg">
//     <Skeleton className="rounded-lg" {...args}>
//       <div className="h-24 rounded-lg bg-neutral-300" />
//     </Skeleton>
//     <div className="space-y-3">
//       <Skeleton className="w-3/5 rounded-lg" {...args}>
//         <div className="h-3 w-3/5 rounded-lg bg-neutral-200" />
//       </Skeleton>
//       <Skeleton className="w-4/5 rounded-lg" {...args}>
//         <div className="h-3 w-4/5 rounded-lg bg-neutral-200" />
//       </Skeleton>
//       <Skeleton className="w-2/5 rounded-lg" {...args}>
//         <div className="h-3 w-2/5 rounded-lg bg-neutral-300" />
//       </Skeleton>
//     </div>
//   </Card>
// );
//
// const StandaloneTemplate = (args: SkeletonProps) => (
//   <div className="max-w-[300px] w-full flex items-center gap-3">
//     <div>
//       <Skeleton className="flex rounded-full w-12 h-12" />
//     </div>
//     <div className="w-full flex flex-col gap-2">
//       <Skeleton className="h-3 w-3/5 rounded-lg" {...args} />
//       <Skeleton className="h-3 w-4/5 rounded-lg" {...args} />
//     </div>
//   </div>
// );
//
// const LoadedStateTemplate = (args: SkeletonProps) => {
//   const [isLoaded, setIsLoaded] = React.useState(false);
//
//   const toggleLoad = () => {
//     setIsLoaded(!isLoaded);
//   };
//
//   return (
//     <div className="flex flex-col gap-3">
//       <Card className="w-[200px] space-y-5 p-4" radius="lg">
//         <Skeleton className="rounded-lg" {...args} isLoaded={isLoaded}>
//           <div className="h-24 rounded-lg bg-brand" />
//         </Skeleton>
//         <div className="space-y-3">
//           <Skeleton className="w-3/5 rounded-lg" {...args} isLoaded={isLoaded}>
//             <div className="h-3 w-full rounded-lg bg-brand" />
//           </Skeleton>
//           <Skeleton className="w-4/5 rounded-lg" {...args} isLoaded={isLoaded}>
//             <div className="h-3 w-full rounded-lg bg-brand-300" />
//           </Skeleton>
//           <Skeleton className="w-2/5 rounded-lg" {...args} isLoaded={isLoaded}>
//             <div className="h-3 w-full rounded-lg bg-brand-200" />
//           </Skeleton>
//         </div>
//       </Card>
//       <Button
//         className="max-w-[200px]"
//         color="primary"
//         size="sm"
//         variant="ghost"
//         onPress={toggleLoad}
//       >
//         {isLoaded ? "Show" : "Hide"} Skeleton
//       </Button>
//     </div>
//   );
// };
//
// export const Default = {
//   render: DefaultTemplate,
//   parameters: {
//     design: {
//       type: "figma",
//       url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=286%3A67175&mode=dev",
//     },
//   },
//   args: {
//     ...defaultProps,
//   },
// };
//
// export const Standalone = {
//   render: StandaloneTemplate,
//   parameters: {
//     design: {
//       type: "figma",
//       url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=286%3A67175&mode=dev",
//     },
//   },
//   args: {
//     ...defaultProps,
//   },
// };
//
// export const LoadedState = {
//   render: LoadedStateTemplate,
//   parameters: {
//     design: {
//       type: "figma",
//       url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=286%3A67175&mode=dev",
//     },
//   },
//   args: {
//     ...defaultProps,
//   },
// };
