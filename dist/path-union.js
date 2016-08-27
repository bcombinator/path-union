'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _compose = function (f, g) { return function () {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	return f(g.apply(void 0, args));
; }	}

var uniq = function (xs) { return xs.reduce(function (list, x) { return list.indexOf(x) === -1 ? list.concat(x) : list; }, []); }

var concat = function (xs, list) { return xs.concat(list); }

var compose = function () {
	var fns = [], len = arguments.length;
	while ( len-- ) fns[ len ] = arguments[ len ];

	return fns.reduce(_compose);
}

var union = compose(uniq, concat)

var join = function (separator) { return function (xs) { return xs.join(separator); }; }

var split = function (separator) { return function (str) { return str.split(separator); }; }

var chain = function (fn) { return function (xs) { return [].concat.apply([], xs.map(fn)); }; }

var of = Array.of.bind(Array)

var filter = function (pred) { return function (xs) { return xs.filter(pred); }; }

var prepend = function (a) { return function (b) { return a.concat(b); }; }

var pathUnion = compose(prepend('/'), join('/'), filter(Boolean), union, chain(split('/')), of)

exports.compose = compose;
exports.union = pathUnion;