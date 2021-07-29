export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6103268bd5229487b3394d18",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6bsd2se3",
                  apiId: "43d844db-87c4-4b5f-9f84-b2a2965551fa",
                },
                {
                  buildHookId: "6103268bd522948915394a54",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-x7kpefxt",
                  apiId: "5a6f055e-de48-426b-803a-db29f868b2b2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/prosperous-man/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-x7kpefxt.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
