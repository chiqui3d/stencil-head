export interface Rel{
  stylesheet?: string;
  canonical?: string;
  amphtml?: string;
  manifest?: string;
  author?: string;
  alternate?: string;
  archives?: string;
  index?: string;
  self?: string;
  pingback?: string;
  preconnect?: string;
  prefetch?: string;
  prerender?: string;
  preload?: string;
  icon?: string;
  'dns-prefetch'?: string;
  'apple-touch-icon'?: string;
  'mask-icon'?: string;
}

export interface Link {
  href: string;
  rel?: keyof Rel | string;
  hreflang?: string;
  type?: string;
  title?: string;
  sizes?: string;
  color?: string;
  integrity?: string;
  crossorigin?: string
};
export interface Script {
  src?: string;
  type?: string;
  code?: string;
  integrity?: string;
  crossorigin?: string;
};

export interface MetaNameInterface {
  description: string;
  viewport?: string;
  robots?: string;
  generator?: string;
  rating?: string;
  'google-site-verification'?: string;
  ICBM?: string;
  'geo.position'?: string;
  'geo.region'?: string;
  'geo.placename'?: string;
  'application-name'?: string;
  'theme-color'?: string;
  'mobile-web-app-capable'?:string;
  referrer?: string;
}
export interface MetaPropertyInterface {
  'og:title'?: string;
  'og:description'?: string;
  'og:app_id'?: string;
  'og:url'?: string;
  'og:type'?: string;
  'og:image'?: string;
  'og:locale'?: string;
  'og:video'?: string;
  'article:author'?: string;
  'twitter:card'?: string;
  'twitter:title'?: string;
  'twitter:creator'?: string;
  'twitter:url'?: string;
  'twitter:image'?: string;
}
export interface MetaItempropInterface {
  name?: string;
  description?: string;
  image?: string;
}
export interface MetaHttpEquivInterface {
  'x-dns-prefetch-control'?: string;
  'Window-Target'?: string;
  'x-ua-compatible'?: string;
  'Content-Security-Policy'?: string;
}

export interface MetaInterface {
  name?: keyof MetaNameInterface | string;
  content?: string;
  property?: keyof MetaPropertyInterface | string;
  itemprop?: keyof MetaItempropInterface | string;
  'http-equiv'?: keyof MetaHttpEquivInterface | string;
}

export interface HeadInterface {
  html?: object;
  charset?: "utf-8" | "iso-8859-1" | string;
  title: string;
  metas?: MetaInterface[] | object[];
  links?: Link[];
  scripts?: Script[] | object[];
  styles?: string[];
  baseHref?: string;
}
