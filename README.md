# GitHub Action: do not allow committers on a Pull Request to approve the PR

While GitHub prevents self-approval of PRs, it doesn't prevent a user from approving a PR they worked on. In some scenarios, this could allow for PRs to be approved with no outside review.

This action prevents any committers on a Pull Request from approving the PR. It can be used standalone (e.g. triggered by on all submitted Pull Requests in a repo), or as a Required Status Check.

