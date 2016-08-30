(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@bcombinator/prelude')) :
	typeof define === 'function' && define.amd ? define(['exports', '@bcombinator/prelude'], factory) :
	(factory((global.pathUnion = global.pathUnion || {}),global.bcombinatorPrelude));
}(this, function (exports,_bcombinator_prelude) { 'use strict';

	var pathUnion = _bcombinator_prelude.compose(_bcombinator_prelude.prepend('/'), _bcombinator_prelude.join('/'), _bcombinator_prelude.filter(_bcombinator_prelude.id), _bcombinator_prelude.union, _bcombinator_prelude.chain(_bcombinator_prelude.split('/')), _bcombinator_prelude.of)

	exports.compose = _bcombinator_prelude.compose;
	exports.union = pathUnion;

	Object.defineProperty(exports, '__esModule', { value: true });

}));