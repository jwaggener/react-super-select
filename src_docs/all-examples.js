var basicAjaxExample = require('./super-selects/basic-ajax'),
    basicExample = require('./super-selects/basic-example'),
    basicSearchable = require('./super-selects/basic-searchable'),
    customTemplate = require('./super-selects/custom-template'),
    groupBy = require('./super-selects/group-by'),
    localized = require('./super-selects/localized'),
    multiselect = require('./super-selects/multiselect'),
    paging = require('./super-selects/paging'),
    tagsExample = require('./super-selects/tags-example');

var allExamples = [
  basicExample,
  basicAjaxExample,
  basicSearchable,
  customTemplate,
  groupBy,
  localized,
  multiselect,
  paging,
  tagsExample
];

module.exports = allExamples;
