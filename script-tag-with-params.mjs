/**
 * Replace the current script tag based on the parameters.
 * 
 * @param {Document} document - The DOM.
 * @param {HTMLScriptElement} script - The current script been executed.
 * 
 * @license MIT
 * 
 * @example
 * <script async data-src="../scripts/tokenizer.js" data-client-id="{{client_id}}">
 * 
 * // Place the below JS here.
 * // Assume {{client_id}} is replaced by SSR or some sort of and 
 * // the actual value is used by the script tokenizer.js.
 * 
 * </script>
 */
; (function (document, script, undefined) {

  /**
   * Sanity check on the script tag this code belongs to.
   */
  console.assert(script !== undefined);
  console.assert(script.hasAttribute('data-src') && script.getAttribute('data-src').length > 0);

  var AttributeBlackList = ['data-src', 'src'];

  function isAttributeOneOf(attr, attrArray) {
    attrArray = attrArray | [];
    return attrArray.length < 1 || attrArray.indexOf(attr.name) > -1;
  }

  /**
   * Create a script tag w/ as current script
   */
  var js = document.createElement('script');
  for (var attr of script.attributes) {
    if (!isAttributeOneOf(attr, AttributeBlackList)) js.setAttribute(attr.name, attr.value);
  }

  /**
   * Read and set the `data-src` that needs to load.
   */
  js.src = script.getAttribute('data-src');

  /**
   * Self-destruct the current script, as it never existed.
   */
  if (script.parentNode) (function () {
    script.parentNode.replaceChild(js, script);
  })();

})(document, document.currentScript);