# Release a new version

- We use `np` and `react-native-version` to handle versioning and publishing.
- Also, we use GitHub Actions to handle the release process, so you just need to dispatch a new release event, and the rest will be handled automatically.

## Steps

### 1. Create a PR to merge your feature/fix branch into `develop`

### 2. Run the release workflow

- Go to the [Release workflow](https://github.com/nicolascavallin/warm_app/actions/workflows/release.build.yml), tap on **Run workflow**, and select the `version bump` option that fits with the kind of release.

#### **Version Bump**

The `np` tool follow the [semver](https://semver.org/) convention, so you can choose the version bump type with the following results:

For example, if the current version is: 1.0.1, then:

- `patch` will bump the version to 1.0.2
- `minor` will bump the version to 1.1.0
- `major` will bump the version to 2.0.0
- `hotfix` will bump the version to 1.0.2-0
- `prerelease` will bump the version to 1.0.2-0
- `prepatch` will bump the version to 1.0.2-0
- `preminor` will bump the version to 1.1.0-0
- `premajor` will bump the version to 2.0.0-0

If the current version is: 1.0.2-0, then:

- `patch` will bump the version to 1.0.2
- `minor` will bump the version to 1.1.0
- `major` will bump the version to 2.0.0
- `hotfix` will bump the version to 1.0.2-1
- `prerelease` will bump the version to 1.0.2-1
- `prepatch` will bump the version to 1.0.3-0
- `preminor` will bump the version to 1.1.0-0
- `premajor` will bump the version to 2.0.0-0

> **Note**
> The only difference between `hotfix` and `prerelease` is that hotfix will have the _hotfix_ suffix, and run the `codepush` command that release the new code for OTA updates. Then you must run the workflow again with the `patch` option to release the new version to the stores.

> **Warning**
> You'll be able to SKIP the bump version step. Use in case that GitHub Actions or AppCenter fails to release the new version, and if you are sure that the version was not released.
> If a `hotfix` fails, you must run the codepush command manually.

### 3. Check the release process

- If the GitHub Actions workflow fails, you'll receive a notification through Slack.
- If the GitHub Actions workflow succeed, the AppCenter workflow will start automatically.
- If the AppCenter workflow fails, you'll receive a notification through Slack.
- If the AppCenter workflow succeed, you'll receive a notification through Slack and the new version will sent to the stores.

## What the Release Workflow does

- Run linters and tests (E2E and Unit).
- Bump the version.
- Create and push a new tag.
- Create a new release on GitHub (marked as `release` or `pre-relase`).
- Create the PR to merge the `develop` branch into `main` (only for `patch`, `minor`, and `major`).
- Call AppCenter API for Build the app for Android and iOS.
- Call AppCenter API for codepush the new version for OTA updates (only for `hotfix`).

## What AppCenter workflow does

- Build and sign the app for Android and iOS.
- Release the app to the stores.
