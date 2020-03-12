import {Link as LinkInterface} from '../interfaces'

export default class Link {

  private document: Document = document;

  /**
   * Create and render in the dom the link tags
   */
  public create(links: LinkInterface[]): void {
    this.setLinks(links)
  }

  /**
   * Return the link tags in HTML|String format, so you can manipulate.
   * Note: this does not add it to the Dom.
   */
  public html(links: LinkInterface[]): Node[] {
    const metasForHtml = [];
    links.forEach((link: LinkInterface) => metasForHtml.push(Link.createNode(link)));
    return metasForHtml;
  }

  private setLinks(links: LinkInterface[]): void {
    const linksForRender = [];
    links.forEach((link: LinkInterface) => linksForRender.push(Link.createNode(link)));

    if (linksForRender) {
      const lastMetaNode = this.document.querySelector('head').getElementsByTagName('link');
      const last = lastMetaNode && lastMetaNode[lastMetaNode.length - 1] ||  this.document.querySelector('head title');
      linksForRender.forEach((element, index) => {
        const refElement = index === 0 ? last : linksForRender[index - 1];
        refElement.parentNode.insertBefore(element, refElement.nextSibling);
      });
    }
  }

  private static createNode(link: LinkInterface): Node {
    const linkElement = document.createElement('link');
    for (let key in link) {
      linkElement.setAttribute(key, link[key]);
    }
    return linkElement;
  }

}
