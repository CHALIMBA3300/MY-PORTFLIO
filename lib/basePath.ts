const isGithubActions = process.env.GITHUB_ACTIONS === "true";

export const basePath =
  isGithubActions && process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, "")}`
    : "";
