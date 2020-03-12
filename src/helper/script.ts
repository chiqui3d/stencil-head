import {Script as ScriptInteface} from '../interfaces'

export default class Script {

  private document: Document = document;

  /**
   * Create and render in the dom the link tags
   */
  public create(scripts: ScriptInteface[]): void {
    this.setScripts(scripts)
  }

  /**
   * Return the link tags in HTML|String format, so you can manipulate.
   * Note: this does not add it to the Dom.
   */
  public html(scripts: ScriptInteface[]): Node[] {
    const scriptsForHtml = [];
    scripts.forEach((script: ScriptInteface) => {
      scriptsForHtml.push(Script.createNode(script));
    });
    return scriptsForHtml;
  }

  private setScripts(scripts: ScriptInteface[]): void {
    const scriptsForRender = [];
    scripts.forEach((script: ScriptInteface) => {
      scriptsForRender.push(Script.createNode(script))
    });
    if (scriptsForRender) {
      const lastMetaNode = this.document.querySelector('head').getElementsByTagName('script');
      const last = lastMetaNode && lastMetaNode[lastMetaNode.length - 1] || this.document.querySelector('head title');
      scriptsForRender.forEach((element, index) => {
        const refElement = index === 0 ? last : scriptsForRender[index - 1];
        refElement.parentNode.insertBefore(element, refElement.nextSibling);
      });
    }
  }

  private static createNode(script: ScriptInteface): Node {
    const scriptElement = document.createElement('script');
    if (script.code) {
      scriptElement.innerHTML = script.code;
      delete script.code
    }
    for (let key in script) {
      scriptElement.setAttribute(key, script[key]);
    }
    return scriptElement;
  }

}
