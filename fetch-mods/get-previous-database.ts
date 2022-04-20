import { Octokit } from "@octokit/action";

export async function getPreviousDatabase(gitHubToken: string) {
  const octokit = new Octokit({
    auth: gitHubToken,
  });

  const previousDatabaseResponse: any = (
    await octokit.rest.repos.getContent({
      // TODO get owner and repo from current action repo.
      owner: "Raicuparta",
      repo: "ow-mod-db",
      path: "database.json",
      ref: "master",
      mediaType: {
        format: "raw",
      },
    })
  ).data;

  const previousDatabase: Mod[] = JSON.parse(previousDatabaseResponse).releases;

  return previousDatabase;
}
