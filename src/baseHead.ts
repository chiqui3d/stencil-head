import {HeadInterface} from './interfaces';
import Meta from './helper/meta';
import Link from './helper/link';
import Script from './helper/script';
import Style from './helper/style';
import Html from './helper/html';

export default class BaseHead {

  private data: HeadInterface;
  private document: Document = document;

  constructor(data: HeadInterface) {
    this.data = data;
  }

  /**
   * Create and render in the dom all meta tags
   */
  public async createHead() {
    if (this.data.html){
      const html = new Html();
      await html.create(this.data.html)
    }
    if (this.data.title){
      await this.setTitle(this.data.title)
    }
    if (this.data.baseHref){
      await this.setBaseHref(this.data.baseHref)
    }
    if (this.data.charset){
      await this.setCharset(this.data.charset)
    }
    if (this.data.metas){
      const meta = new Meta();
      await meta.create(this.data.metas)
    }
    if (this.data.links){
      const link = new Link();
      link.create(this.data.links)
    }
    if (this.data.scripts){
      const script = new Script();
      script.create(this.data.scripts)
    }
    if (this.data.styles){
      const style = new Style();
      style.create(this.data.styles)
    }
  }

  /**
   * Return all head tags in HTML|String format, so you can manipulate.
   * Note: this does not add it to the Dom.
   */
  public html(): string {
    const head = [];
    if (this.data.html){
      const html = new Html();
      const htmlElement = html.html(this.data.html);
      head.push(htmlElement);
    }
    if (this.data.charset){
      head.push(this.getHtmlCharset(this.data.charset));
    }
    if (this.data.baseHref){
      head.push(this.getBaseHref(this.data.baseHref));
    }
    if (this.data.title){
      const title = document.createElement('title')
      title.text = this.data.title;
      head.push(title);
    }
    if (this.data.metas){
      const meta = new Meta();
      head.push(meta.html(this.data.metas));
    }
    if (this.data.links){
      const link = new Link();
      head.push(link.html(this.data.links))
    }
    if (this.data.scripts){
      const script = new Script();
      head.push(script.html(this.data.scripts));
    }
    if (this.data.styles){
      const style = new Style();
      head.push(style.html(this.data.styles));
    }
    return head.map((element) => {
      if (element instanceof Array){
        return element.map((elementFromArray) => elementFromArray.outerHTML).join('\n');
      }
      return element.outerHTML;
    }).join('\n');
  }

  private setTitle(title: string): void {
    const titleElement:HTMLTitleElement|null = this.document.querySelector('head title');
    if (titleElement){
      titleElement.text = title;
    }else{
      const newTitleElement = this.document.createElement('title')
      newTitleElement.text = title;
      this.document.querySelector('head').prepend(newTitleElement)
    }

  }

  private setCharset(charset: string): void {
    const charsetMeta = this.document.querySelector('head meta[charset]');
    if (charsetMeta){
      charsetMeta.setAttribute('charset',charset);
    }else{
      const meta = this.document.createElement('meta');
      meta.setAttribute('charset', charset);
      this.document.querySelector('head').prepend(meta)
    }
  }

  private getHtmlCharset(charset: string): Node {
    const charsetElement = this.document.createElement('meta');
    charsetElement.setAttribute('charset',charset);
    return charsetElement;
  }

  private setBaseHref(baseHref: string): void {
    const baseHrefElement = this.document.querySelector('head base');
    if (baseHrefElement){
      baseHrefElement.setAttribute('href',baseHref);
    }else{
      const newBaseHrefElement = this.document.createElement('base');
      newBaseHrefElement.setAttribute('href', baseHref);
      this.document.querySelector('head').prepend(newBaseHrefElement)
    }
  }

  private getBaseHref(baseHref: string): Node {
    const baseHrefElement = this.document.createElement('base');
    baseHrefElement.setAttribute('href',baseHref);
    return baseHrefElement;
  }

}
