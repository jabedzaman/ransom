import type { Metadata } from "next";
import { appConfig } from "./app.config";

export const metadata: Metadata = {
  title: {
    template: `%s • ${appConfig.app.name}`,
    default: appConfig.app.name,
  },
  description: appConfig.app.description,
};
