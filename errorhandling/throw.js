// errors can be handled using error handling in javascript
// throw keyword allows us to trigger the catch(), it is used inside try block

/**
 *      SYNTAX :
 *      try { 
 *          critical statement;
 *          on a condition, throw "error message"
 *      } catch(error) {
 *          handling code;
 *      } finally {
 *          code that runs whether or not an error occurs.
 *      }
 */


let number = Infinity;

try {
    if(isFinite( !number)){
        // custom error message
        throw "The variable 'number' is not FINITE";
    }   

} catch(error) {
    console.log(error);
} finally {
    console.log(`\n\nHey!!!! We throwed a CUSTOM ERROR MESSAGE`);
}
