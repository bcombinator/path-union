import {compose, prepend, join, filter, union, chain, split, of, id} from './prelude'

const pathUnion = compose(prepend('/'), join('/'), filter(id), union, chain(split('/')), of)

export {compose, pathUnion as union}
