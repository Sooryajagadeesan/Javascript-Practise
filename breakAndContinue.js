/*
    break - used to exit the loop and transfer the control to the next statement of the loop
    continue - LIGHT VERSION OF break . used to skip the current iteration and 
               tranfers the control to the next iteration of the loop
*/

// NOTE : These keywords are ACTIVE ONLY if they are used inside a LOOP


let keyWords = [ 'let', 'continue','for','while','break','I Am Sure That This Will Not Be Printed']

// lets iterate through this array

for(let key of keyWords){
    if(key == 'continue'){
        console.log(`We picked '${key}' - The iteration is skipped`)
        continue
        console.log('I WILL NOT BE PRINTED') // will not printed
    }
    else if ( key == 'break'){
        console.log(`We picked '${key}' - The loop is BREAKED`)
        break
        console.log('I WILL NOT BE PRINTED') // will not printed
    }
    else{
        console.log(`We picked '${key}' - stay COOL and WAIT till the time arrives`)
    }

    // NOTE that 'break' terminates the entire loop.
}

