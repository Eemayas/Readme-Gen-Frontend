/** @format */
import React from "react";
import { setProjectInstallationGuide } from "./store/projectInstallationGuideReducer";
import store from "@/app/store";
import SectionLayout from "@/app/main/components/SectionLayout";
import { useFetchProjectInstallationGuideData } from "./hooks/useFetchProjectInstallationGuideData";

const ProjectInstallationGuideSection: React.FC = () => {
  const {
    projectInstallationGuideMarkdownValue,
    fetchProjectInstallationGuideData,
  } = useFetchProjectInstallationGuideData();

  return (
    <SectionLayout
      sectionHeaderMainText="Project Installation"
      sectionHeaderSubText="project installation guide"
      actionButtonText="Generate Key feature of project &rarr;"
      actionButtonOnClick={fetchProjectInstallationGuideData}
      markdownEditorValue={projectInstallationGuideMarkdownValue}
      markdownEditorOnChange={(value) =>
        store.dispatch(setProjectInstallationGuide(value))
      }
      markdownClassName="h-[50vh]"
    />
  );
};

export default ProjectInstallationGuideSection;

// /** @format */

// import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
// import SectionHeader from "../../components/SectionHeader";
// import ActionButton from "@/components/ActionButton";
// import MarkDownEditor from "@/components/MarkDownEditor";
// import { useFetchProjectInstallationGuideData } from "./hooks/useFetchKeyFeatureData";
// import store from "@/app/store";
// import { setProjectInstallationGuide } from "./store/projectInstallationGuideReducer";

// const ProjectInstallationGuideSection: React.FC = () => {
//   const {
//     projectInstallationGuideMarkdownValue,
//     fetchProjectInstallationGuideData,
//   } = useFetchProjectInstallationGuideData();

//   return (
//     <>
//       <MoveUpFadeAnimation>
//         <SectionHeader
//           text="Project Installation"
//           subtext={"project installation guide"}
//         />

//         <div className="mt-10 flex w-full justify-center px-20">
//           <ActionButton
//             onClick={function (): void {
//               fetchProjectInstallationGuideData();
//             }}
//             text="Generate Key feature of project &rarr;"
//           />
//         </div>
//         <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
//         <MarkDownEditor
//           value={projectInstallationGuideMarkdownValue}
//           visible={true}
//           className="h-[50vh]"
//           onChange={(value) => {
//             store.dispatch(setProjectInstallationGuide(value));
//           }}
//         />
//       </MoveUpFadeAnimation>
//     </>
//   );
// };

// export default ProjectInstallationGuideSection;
