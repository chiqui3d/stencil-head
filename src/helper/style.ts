export default class Style{

  private document: Document = document;

  /**
   * Create and render in the dom the style tags
   */
  public create(styles): void {
      this.setStyles(styles)
  }

  /**
   * Return the style tags in HTML|String format, so you can manipulate.
   * Note: this does not add it to the Dom.
   */
  public html(styles: string[]): Node[] {
    const stylesForHtml = [];
    styles.forEach((style)=> {
      stylesForHtml.push(Style.createNode(style));
    });
    return stylesForHtml;
  }

  private setStyles(styles: string[]): void{
    const stylesForRender = [];
    styles.forEach((style: string)=> {
      stylesForRender.push(Style.createNode(style))
    });
   if (stylesForRender){
      const lastMetaNode = this.document.querySelector('head').getElementsByTagName('style');
      const last = lastMetaNode && lastMetaNode[lastMetaNode.length-1];
      if (last){
        stylesForRender.forEach((element, index) => {
          const refElement = index === 0 ? last : stylesForRender[index - 1];
          refElement.parentNode.insertBefore(element, refElement.nextSibling);
        });
      }else{
        document.querySelector('head').append(...stylesForRender)
      }
    }
  }

  private static createNode(style: string): Node {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    styleElement.innerHTML = style;

    return styleElement;
  }

}
