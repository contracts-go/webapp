# Contracts

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) (USE NVM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Examples

### Using the models

Can use the 'store' object to do all firebase queries for `'user'`, 
`'company'`, and `'document'`.

```javascript
model: function() {
    return this.get('store').findAll('user');
  }
```

```handlebars
{{#each model as |test|}}

        <div>{{test.email}}</div>
        <div>{{test.name}}</div>
        <div>{{test.type}}</div>
        <div>Company: {{test.company.name}}</div>
        <div>Company location: {{test.company.location.readable}}</div>
        <div>{{test.title}}</div>
        <div>
            <ul>
            {{#each test.documents as |doc|}}
                <li>
                    {{doc.title}} -- {{doc.project.industry}} -- {{doc.project.description}}
                </li>
            {{/each}}
            </ul>
        </div>
        <!--<div>{{test.name}}</div>-->
        <!--<div>{{test.type}}</div>-->
        <!--<div>{{test.location.postalCode}}</div>-->

        <br>
    {{/each}}
```

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* `ember server --environment test' for testing
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Use firebase to deploy from inside the dist folder.

