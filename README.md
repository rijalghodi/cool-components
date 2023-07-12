# Cool Components

This is a source code for a library that contains a collection of cool components you can utilize in your React and Mantine UI based projects. The library offers various components including:

- Search Bar
- Plus Button
- File Preview Input
- and more

## Tech Stack

- Mantine UI
- Node >= 16
- ReactJS >= 18
- NPM

## Development

- Clone the repo
- Install dependencies with `npm install`
- Run `npm run prepare` to enable the DX
- Run the development server with `npm run dev`
- Open [http://localhost:6006](http://localhost:6006) with your browser to see component library storybook.

## Publish

- Update version of package by `npm version <change-type>` (`<change-type>` is one of `major`, `minor`, `patch`)
- Publish. There are two ways to publish:
  - Manually
    - Build the project with `npm run local-build`
    - Publish into NPM with `npm publish`
  - Automatically
    - Push the project into `master` barnach

## Contribute

- Use `yarn prepare` to enable the DX
- Use `yarn format` to format the code using prettier
- Use `yarn typecheck` to check the types
- Use `yarn git:commit` to commit the changes according commitlint
- User `yarn git:push` to push the changes to the remote branch
