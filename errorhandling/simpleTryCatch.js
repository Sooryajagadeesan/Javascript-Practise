// errors can be handled using error handling in javascript

/**
 *      SYNTAX :
 *      try { 
 *          critical statement;
 *      } catch(error) {
 *          handling code;
 *      } finally {
 *          code that runs whether or not an error occurs.
 *      }
 */


// using a non-existing variable 

try {
    console.log(number); // non-exixting variable
} catch(error) {
    console.log(error.toString()); // toString() to smooth down the normal error message
}