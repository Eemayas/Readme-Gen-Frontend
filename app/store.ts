/** @format */

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/components/Modals/store/ModalReducer";
import repoReducer from "@/app/(home)/store/repoReducer";
import contributingGuideReducer from "@/app/main/sections/ContributingGuideSection/store/ContributingGuideReducer";
import folderStructureReducer from "@/app/main/sections/FolderStructureSection/store/folderStructureReducer";
const store = configureStore({
  reducer: {
    modal: modalReducer,
    repoReducer,
    contributingGuideReducer,
    folderStructureReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
