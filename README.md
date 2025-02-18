# TypeScript Bug: Passing Array to String Function
This bug demonstrates a common TypeScript error that arises when attempting to pass an array to a function expecting a string argument. The compiler will throw an error because of type mismatch.

## Bug Description
The `greeter` function expects a string as input, but the code passes an array.  This results in a compilation error because TypeScript's type system catches the incompatible types.

## Solution
The solution involves either modifying the function signature to accept an array or changing how the array is handled before passing it to the function.  This example demonstrates the modification of the function signature to properly handle the array parameter.