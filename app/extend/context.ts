import * as React from 'react';
// import * as requireFromString from 'require-from-string';
import * as ReactDOMServer from 'react-dom/server';

/**
 * 模版数据 => SSR页面
 * @param reactString
 * @param locals
 * @param manifestJson
 */
const renderReactString = async (reactString, locals, manifestJson) => {
  return renderToString(reactString, locals, manifestJson);
};
const normalizeReactElement = reactElement => {
  return reactElement && reactElement.default ? reactElement.default : reactElement;
};
const renderToString = async (reactElement, locals, manifestJson) => {
  reactElement = normalizeReactElement(reactElement);

  // support asyncData start
  if (reactElement.asyncData) {
    const data = await reactElement.asyncData(locals);
    locals = Object.assign(locals, data);
  }
  // support asyncData end

  const element = React.createElement(reactElement, locals);
  const html = ReactDOMServer.renderToString(element);

  // delete ctx
  delete locals.ctx;
  delete locals.request;
  delete locals.helper;
  delete locals.layout;

  return html;
};

export default {
  renderReactString
};
