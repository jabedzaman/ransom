import { useStore } from "react-redux";
import type { AppStore } from "@/lib/store";

export const useAppStore = useStore.withTypes<AppStore>();
