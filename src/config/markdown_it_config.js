/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee
 */

'use strict';


/**
 * node modules
 */
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js').default;


const markdown = new MarkdownIt({

  // Convert '\n' in paragraphs into <br>
  breaks: true,

  // Autoconvert URL-like text to links (e.g. google.com)
  linkify: true,

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: (str, lang) => {

    if (!lang && !hljs.getLanguage(lang)) return '';

    try {

      return hljs.highlight(str, {
        language: lang,
        ignoreIllegals: true
      }).value;

    } catch (error) {

      console.error('Error highlighting language: ', error.message);
      throw error;

    }

  }

});


module.exports = markdown;