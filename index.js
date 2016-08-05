import {compose, prepend, join, filter, union, chain, split, of} from './prelude'

export default compose([prepend('/'), join('/'), filter(Boolean), union, chain(split('/')), of])
