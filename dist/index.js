/** @license Apache-2.0 */

'use strict';

/**
* Compute the maximum value of a double-precision floating-point strided array according to a mask, ignoring `NaN` values.
*
* @module @stdlib/stats-strided-dnanmskmax
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var Uint8Array = require( '@stdlib/array-uint8' );
* var dnanmskmax = require( '@stdlib/stats-strided-dnanmskmax' );
*
* var x = new Float64Array( [ 1.0, -2.0, 4.0, 2.0, NaN ] );
* var mask = new Uint8Array( [ 0, 0, 1, 0, 0 ] );
*
* var v = dnanmskmax( x.length, x, 1 );
* // returns 2.0
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var Uint8Array = require( '@stdlib/array-uint8' );
* var dnanmskmax = require( '@stdlib/stats-strided-dnanmskmax' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
* var mask = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 1 ] );
*
* var v = dnanmskmax.ndarray( 5, x, 2, 1, mask, 2, 1 );
* // returns 4.0
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require/dist' );
var isError = require( '@stdlib/assert-is-error/dist' );
var main = require( './main.js' );


// MAIN //

var dnanmskmax;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	dnanmskmax = main;
} else {
	dnanmskmax = tmp;
}


// EXPORTS //

module.exports = dnanmskmax;

// exports: { "ndarray": "dnanmskmax.ndarray" }
