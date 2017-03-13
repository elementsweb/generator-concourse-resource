var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var path = require('path');

describe('concourse-resource:app', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'concourse-bitbucket-status',
        description: 'Concourse Bitbucket Status',
        licensee_name: 'elementsweb'
      })
      .on('end', done);
  });

  it('the generator can be required without throwing', function() {
    require('../generators/app');
  })

  it('has generated a README file', function() {
    assert.file('README.md');
    assert.fileContent('README.md', 'concourse-bitbucket-status');
    assert.fileContent('README.md', 'Concourse Bitbucket Status');
    assert.fileContent('README.md', '2017 elementsweb');
  });

  it('has generated a LICENSE file', function() {
    assert.file(['LICENSE']);
  });

  it('has generated a Dockerfile and .dockerignore', function() {
    assert.file([
      'Dockerfile',
      '.dockerignore'
    ]);
  });

  it('has generated the scripts', function() {
    assert.file([
      'scripts/check',
      'scripts/in',
      'scripts/out'
    ]);
  });
});
