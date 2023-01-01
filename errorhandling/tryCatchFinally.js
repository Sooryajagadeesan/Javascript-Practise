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
    console.log(`Javascript says "${error.toString()}"`); // toString() to smooth down the normal error message
} finally {
    console.log(`\n\nHurreyyyy! an error prone code is executed in a safe way`);
}