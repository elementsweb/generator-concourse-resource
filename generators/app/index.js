var Generator = require('yeoman-generator');
var yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('skip-welcome', {
      desc: 'Skips the welcome message',
      type: Boolean
    });
  }

  prompting() {
    if (!this.options['skip-welcome']) {
      this.log(yosay('Out of the box I setup the file structure to help you build your Concourse resource.'));
    }

    return this.prompt([{
      name: 'name',
      message: 'Name your new Concourse resource'
    }, {
      name: 'description',
      message: 'Describe your new Concourse resource'
    }, {
      name: 'licensee_name',
      message: 'Name to associate the license with'
    }, {
      type: 'list',
      name: 'language',
      message: 'Choose a language to write in',
      choices: ['Python', 'Shell']
    }]).then((answers) => {
      this.name = answers.name;
      this.description = answers.description;
      this.licensee_name = answers.licensee_name;
      this.language = answers.language.toLowerCase();
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        name: this.name,
        description: this.description,
        licensee_name: this.licensee_name,
        year: new Date().getFullYear()
      }
    );
    this.fs.copy(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE')
    );
    this.fs.copy(
      this.templatePath(`Dockerfile-${this.language}`),
      this.destinationPath('Dockerfile')
    );
    this.fs.copy(
      this.templatePath('.dockerignore'),
      this.destinationPath('.dockerignore')
    );
    this.fs.copy(
      this.templatePath(`scripts/${this.language}/*`),
      this.destinationPath('scripts/')
    );
  }
};
