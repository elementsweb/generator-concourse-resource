# generator-concourse-resource
Yeoman generator to provide the scaffolding for a new Concourse CI resource

## Installation
While this Yeoman generator is still in development, you'll have to download it first to use with `yo`.

```
git clone https://github.com/elementsweb/generator-concourse-resource.git
cd generator-concourse-resource
npm i
npm link
```

## Usage
You can use this generator with `yo` with ease. In the directory you wish to create your resource run the following command:

```
yo concourse-resource
```

Answer the questions asked by the generator, these answers will be injected into various files that will be created in your directory.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.

## History

|Version|Change description|
|---|---|
|`0.1.0`|Generator creates basic resource file structure|

## Credits

- elementsweb __(lead developer)__

## License

Copyright 2017 elementsweb

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
