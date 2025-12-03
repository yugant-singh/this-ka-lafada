# JavaScript: Understanding `this`, `call`, `apply`, and `bind`

Yeh README tumhare practice files (script.js aur this_ka_lafda.txt) ko
use karke pure detail me explain karta hai ki JavaScript me `this` kaise
kaam karta hai.

## 1. `this` ka Basic Rule

`this` us object ko refer karta hai jo current function ko execute kar
raha hota hai. - `this` ki value context ke hisaab se change hoti hai.

## 2. Global Context

Browser: window\
Node.js: {}

## 3. Normal Function Ke Andar

Strict Mode: undefined\
Non-Strict Mode: window

## 4. Object Method Ke Andar

Object method me `this` us object ko refer karta hai.

## 5. Arrow Function Ke Andar

Arrow function ka `this` lexical hota hai, yani parent scope se aata
hai.

## Function Methods: call, apply, bind

### call()

-   `this` manually set
-   Function turant run hota hai

### apply()

-   Same as call but arguments array me

### bind()

-   Ek naya function return karta hai jisme `this` permanently set hota
    hai.

## setTimeout & this

Direct reference dene par `this` lost ho jata hai.\
`bind()` use karne par `this` fix ho jata hai.

## Summary Table

-   Global → window/global\
-   Function strict → undefined\
-   Function non-strict → window\
-   Object method → that object\
-   Arrow function → parent scope\
-   call/apply → manual this\
-   bind → permanent this
