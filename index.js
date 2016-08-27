import {compose, prepend, join, filter, union, chain, split, of} from './prelude'

const pathUnion = compose(prepend('/'), join('/'), filter(Boolean), union, chain(split('/')), of)

export {compose, pathUnion as union}
