var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Name your new Concourse resource'
    }, {
      type: 'input',
      name: 'description',
      message: 'Describe your new Concourse resource'
    }, {
      type: 'input',
      name: 'licensee_name',
      message: 'Name to associate the license with'
    }]).then((answers) => {
      this.name = answers.name;
      this.description = answers.description;
      this.licensee_name = answers.licensee_name;
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
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile')
    );
    this.fs.copy(
      this.templatePath('.dockerignore'),
      this.destinationPath('.dockerignore')
    );
    this.fs.copy(
      this.templatePath('scripts/*'),
      this.destinationPath('scripts/')
    );
  }
};
