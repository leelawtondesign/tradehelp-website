import { defineLocations } from "sanity/presentation";
import type { PresentationPluginOptions } from "sanity/presentation";
export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    legalPage: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/legalPage/${doc?.slug}`,
          },
        ],
      }),
    }),
  },
};