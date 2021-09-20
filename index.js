/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...



const FullName ="Mohammed Alarbash"

const YearOfBirth = "1997" 

const Hobby = "Reading Comics"

const FunFact = "I Am a Fooodie"

const image = "https://cdn.vox-cdn.com/thumbor/fIZZSEIhp5zAbm62UekB9w0FjtE=/0x0:1900x950/1200x800/filters:focal(859x326:1163x630)/cdn.vox-cdn.com/uploads/chorus_image/image/57057985/batman_the_animated_series_art_1900.0.jpg";






/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

const fullNameString = `My Name is ${FullName}`;
 const yearOfBirthString = `I Am ${2021- YearOfBirth} years old`
 const hobbyString = `My Hobby is ${Hobby}`




/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  stars = stars +1
  // Increment stars by 1 👇🏻
}
function decrementBy1() {
  stars= stars -1
  // decrement stars by 1 👇🏻
}

function incrementBy2() {

  stars= stars +2
  // Increment stars by 2 👇🏻
}
function decrementBy2() {
  stars= stars -2
  // decrement stars by 2 👇🏻
}
