# Contributing to generator-concourse-resource

## How to file a bug report
Use the Github issue tracker to submit an issue. Provide as much information as you can, including steps for reproducing the bug if possible.

## How to suggest a new feature
Use the Github issue tracker to submit a proposal for a new feature on enhancement.

By raising an issue to propose new features assumes that you expect existing project contributors to make the required changes. If you are looking to develop the new feature yourself, you should create a fork, commit your changes then create a pull request instead.

## How to set up your environment and run tests
You should fork the project repository first if you are looking to make changes.

Clone the project repository:
```
https://github.com/elementsweb/generator-concourse-resource.git
cd generator-concourse-resource
```

Install project dependencies and create a local npm link:
```
npm i
npm link
```

You'll now be able to use your local copy of the generator as follows:
```
yo concourse-resource
```

## Contributing changes
Before submitting a pull request ensure you've covered a few prerequisites:
- Run unit tests with `npm t`
- Run test coverage with `npm run coverage`

Once you're happy with your changes and they pass test and coverage, you can create a pull request.

1. Fork it!
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.
