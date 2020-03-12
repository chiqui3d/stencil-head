import {Component, Prop} from '@stencil/core'
import BaseHead from '../../baseHead';
import {HeadInterface} from '../../interfaces'

@Component({
  tag: 'app-head'
})
export class Head {
  @Prop() data: HeadInterface;

  connectedCallback(){
      return new BaseHead(this.data).createHead()
  }
}
