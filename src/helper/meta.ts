import {MetaInterface} from '../interfaces'

export default class Meta {

  private document: Document = document;

  /**
   * Create and render in the dom the meta tags
   */
  public create(metas: MetaInterface[]): void {
    this.setMetas(metas)
  }

  /**
   * Return the meta tags in HTML|String format, so you can manipulate.
   * Note: this does not add it to the Dom.
   */
  public html(metas: MetaInterface[]): Node[] {
    const metasForHtml = [];
    metas.forEach((meta: MetaInterface) => metasForHtml.push(this.createNode(meta)));
    return metasForHtml;
  }

  private setMetas(metas: MetaInterface[]): void {
    const metasForRender = [];
    metas.forEach((meta: MetaInterface) => {
      const hasMeta: Element | null = this.hasMeta(meta);
      if (hasMeta) {
        for (let key in meta) {
          hasMeta.setAttribute(key, meta[key]);
        }
      } else {
        metasForRender.push(this.createNode(meta));
      }
    });

    if (metasForRender) {
      const lastMetaNode = this.document.querySelector('head').getElementsByTagName('meta');
      const last = lastMetaNode && lastMetaNode[lastMetaNode.length - 1] ||  this.document.querySelector('head title');
      metasForRender.forEach((element, index) => {
        const refElement = index === 0 ? last : metasForRender[index - 1];
        refElement.parentNode.insertBefore(element, refElement.nextSibling);
      });
    }
  }

  private hasMeta(meta: MetaInterface): Element | null {
    if (meta.hasOwnProperty('name')) {
      const metaElement = this.document.querySelector('head meta[name="' + meta.name + '"]')
      if (metaElement) {
        return metaElement;
      }
    }
    if (meta.hasOwnProperty('property')) {
      const metaElement = this.document.querySelector('head meta[property="' + meta.property + '"]')
      if (metaElement) {
        return metaElement;
      }
    }
    if (meta.hasOwnProperty('itemprop')) {
      const metaElement = this.document.querySelector('head meta[itemprop="' + meta.itemprop + '"]')
      if (metaElement) {
        return metaElement;
      }
    }
    if (meta.hasOwnProperty('http-equiv')) {
      const metaElement = this.document.querySelector('head meta[itemprop="' + meta['http-equiv'] + '"]')
      if (metaElement) {
        return metaElement;
      }
    }
    return null;
  }

  private createNode(meta: MetaInterface): Node {
    const metaElement = this.document.createElement('meta');
    for (let key in meta) {
      metaElement.setAttribute(key, meta[key]);
    }
    return metaElement;
  }

}
