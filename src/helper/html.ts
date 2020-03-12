export default class Html{

  private document: Document = document;

  /**
   * Set html attributes in the dom
   */
  public create(htmlAtt): void {
      this.setHtmlAtt(htmlAtt)
  }

  /**
   * Return the html attributes in HTML|String format, so you can manipulate.
   * Note: this does not add it to the Dom.
   */
  public html(htmlAtt: object): Node {
    const htmlElement = document.createElement('html');
    for(let key in htmlAtt){
      htmlElement.setAttribute(key, htmlAtt[key]);
    }
    return htmlElement;
  }

  private setHtmlAtt(htmlAtt: object): void{
    const html = this.document.querySelector('html')
    for(let key in htmlAtt){
      html.setAttribute(key, htmlAtt[key]);
    }
  }

}
