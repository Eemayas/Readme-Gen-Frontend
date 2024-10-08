/** @format */

import React from "react";
import SectionLayout from "@/app/main/components/SectionLayout";
import { useFetchContributorsData } from "./hooks/useFetchContributorsData";
import store from "@/app/store";
import { setContributors } from "./store/contributorsReducer";

const ContributorsSection: React.FC = () => {
  const { contributorsMarkdownValue, fetchContributorsData } =
    useFetchContributorsData();

  return (
    <SectionLayout
      sectionHeaderMainText="Contributors"
      sectionHeaderSubText="List of contributors for the project"
      actionButtonText="Generate contributors of project &rarr;"
      actionButtonOnClick={fetchContributorsData}
      markdownEditorValue={contributorsMarkdownValue}
      markdownEditorOnChange={(value) => store.dispatch(setContributors(value))}
      markdownClassName="h-[50vh]" // Optional class name
    />
  );
};

export default ContributorsSection;

// /** @format */

// import MoveUpFadeAnimation from "@/components/MoveUpFadeAnimation";
// import SectionHeader from "../../components/SectionHeader";
// import ActionButton from "@/components/ActionButton";
// import { useFetchContributorsData } from "./hooks/useFetchContributorsData";
// import MarkDownEditor from "@/components/MarkDownEditor";
// import store from "@/app/store";
// import { setContributors } from "./store/contributorsReducer";

// const ContributorsSection: React.FC = () => {
//   const { contributorsMarkdownValue, fetchContributorsData } =
//     useFetchContributorsData();

//   return (
//     <>
//       <MoveUpFadeAnimation>
//         <SectionHeader text="Contributors" subtext={"contributors"} />

//         <div className="mt-10 flex w-full justify-center px-20">
//           <ActionButton
//             onClick={function (): void {
//               fetchContributorsData();
//             }}
//             text="Generate contributors of project &rarr;"
//           />
//         </div>
//         <hr className="my-8 h-[2px] border-0 bg-gray-500 dark:bg-gray-700"></hr>
//         <MarkDownEditor
//           value={contributorsMarkdownValue}
//           visible={true}
//           className="h-[50vh]"
//           onChange={(value) => store.dispatch(setContributors(value))}
//         />
//       </MoveUpFadeAnimation>
//     </>
//   );
// };

// export default ContributorsSection;
