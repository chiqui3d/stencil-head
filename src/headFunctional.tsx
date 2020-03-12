import BaseHead from './baseHead';
import {HeadInterface} from "./interfaces"

export const Head = ({data}:{data: HeadInterface}) => new BaseHead(data).createHead();
