# ExerciseApp
Exercise For 23People. step to step  
-----------------------------------------
v.0   - First Commit for separe branch and organize folders.

v.0.1 - import React, React-dom and styles.css for use.

v.0.2 - Add the necesary to make first hello world. 
        Add useState for the interaction with buttons
        Add .outline in Styles.css
        Add .input in Styles.css 
        Add a new className call "digits" 
	
V.0.3 - Add calcBtns to digits. if i try, i see the "keyboard"
        Add className grid, in this grid you find the "delete buttons" 
        Add a Clear Btn
	
V.0.4 - Rename File App.Js to Calculator.Js
        Add AC Button, this clean the screen
	
V.0.5 - Add className subgrid, in this grid you find the operations
        Add + (add) Button
	
V.0.6 - Add - (minus) Button, the same like + button
        Add x (multiply) Button, the same like + and - button
        Add / (divide) Button, the same like +, - and x button
	
V.0.7 - Add = (Final Score Button), when you like them, you enter in a try catch with the format or catch a err
        Fix an error in Minus button, when you touch, it make tiny...
        Fix an error in = button, this don't display anything
        Fix an error in = button, it's works...
	
V.0.8 - First pre-release. Calc works but don't have a beautifull design. 
        Work in beautifull and simple design.
        Add a simple and beautifull design looks like the calculator for windows.
        Add a new order for the app
	
V.1.0 - First Release

V.1.1 - Some changes in styles.css
        Some changes in calculator.js, exactly, the name in grid. 
V.1.2 - Changes in Calculator.js
        add new const for better use and order. Called operator - result - screen and equal
        operator contains operators in the calc
        result and screen now works separately, if i don't separate them. the calc display me "NaN" and don't works.this because I am not taking the operators.
        dataB - operator - result stay "undefined" for waiting values.
        now when i push on "calcbtns" i don't go to an target value, i set the number in insertNumber. i do this, because operators usually taking "integer" values and "0" too. 
        construct insertNumbers use the new const equal (previously false) to take decisions without mistakes. 
        add new const "handleClear" and "handleAC" using the previous data to erase correctly the screen changing their values.
        now the screen show better the numbers. previously appear numbers in bad positions.
        erase the last "total" for the new "setTotal". when i use the previously data for make a result correctly and easy to view.
        thanks to all this "quality of life" changes, operators will not appear on screen because they were replaced by the const.
        :)
        
        See it on https://codesandbox.io/s/calculator-23p-miz4s?file=/src/index.js

        
        
