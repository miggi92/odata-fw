const { Octokit } = require("@octokit/rest");
const { context } = require("@actions/github");
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const owner = "miggi92";
const repo = "odata-fw";
const projectId = "project_4303335";
const columnIdForNew = "a635e795";
const columnIdForBacklog = "f49ed7b7";

async function main() {
  const { payload } = github.context;
  const issue = payload.issue;
  const customPrioField = issue.custom_fields.find(field => field.name === "Priority");
  const customSizeField = issue.custom_fields.find(field => field.name === "Size");

  if (customPrioField && customSizeField && customSizeField.value && customPrioField.value) {
    const projectCards = await octokit.projects.listCards({
      column_id: columnIdForNew,
    });

    const card = projectCards.data.find(card => card.content_url.includes(issue.number));

    if (card) {
      await octokit.projects.moveCard({
        card_id: card.id,
        position: "top",
        column_id: columnIdForBacklog,
      });
      console.log(`Moved issue #${issue.number} to Backlog column`);
    }
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});