---
{"publish":true,"aliases":"","title":"Swift Notes","created":"2025-03-24 12:57:20","modified":"2025-07-17 12:41:09","cssclasses":""}
---


# Swift Notes

## 100 Days of Swift:

[Starting from here](https://www.hackingwithswift.com/100/swiftui)

### Day 1

*Variable*'s you can change their *value* whenever
var name = "Ted"

Can then go

name = "Fred"

```swift
var name = "Ted"
name = "Rebecca"
name = "Keeley"
```

Or whatever and "Ted" will be forgotten about

If don't ever want to change the *value*, can use a *constant* instead

```swift
let character = "Daphne"
```

![[Attachments/Pasted image 20240625220424.png]]

It won't let you change the *value* of the *character* because that's set as a *constant*.

```swift
var greeting = "Hello, playground"

  

var name = "Ted"

name = "Rebecca"

name = "Keeley"

name = "Fred"

  

let character = "Daphne"

  

  

var playerName = "Roy"

print(playerName)

  

playerName = "Dani"

print(playerName)

  

playerName = "Sam"

print(playerName)

  

playerName = "none of your damn business"

print(playerName)

  

print(name)

```

Will, when ran, spit out:

![[Attachments/Pasted image 20240625221235.png]]

Using constants instead of variables lets swift optimise code a bit better but also make it harder for me to accidentally change/mistype a variable by accident. 

Can have quotes within strings, but have to backlsalsh em out, like:

```swift
let quote = "Then he tapped a sign saying \"Believe\" and walked away."
```

Can do multi line strings using three quotes

```swift
let movie = "A day in
the life of an
Apple engineer"
```

Won't work, but this will:

```swift
let movie = """
A day in
the life of an
Apple engineer
"""
```

Can read the length of a string. EG

```swift
print(actor.count)
```

Would return 17 for "Denzel Washington"

Or can add them as their own constant and grab em "easier". That might make more sense once there's a lot of code to go through or something.

```swift
let nameLength = actor.count
print(nameLength)
```

Can call/print results in uppercase with

```swift
print(result.uppercased())
```

These could be handy for looking stuff up/debugging

```swift
print(movie.hasPrefix("A day"))
```

```swift
print(filename.hasSuffix(".jpg"))
```

Remember that those are case sensitive though. So prefix "a day" or suffix "JPG" would return FALSE

## Below here is Stuff from Donking around in Swift Playgrounds without Really Knowing what I'm Doing.

[[Boolean]] is either true OR false. Meaning we can write *conditional code*. If 

true, the "If" bit will run, if false, the "else" bit will run. 

## Examples/code Snippets:

### Loops

Eg:

> [!CODE]
> for i in 1...4{
> 
>     moveForward()
> 
>     collectGem()
> 
>     moveForward()
> 
>     moveForward()
> 
>     moveForward()
> 
>     turnRight()
> 
> }

### If Statements

EG (with a loop):

> [!Code]
> for i in 1 ... 4{
> 
> moveForward()
> 
> if isOnClosedSwitch {
> 
>     toggleSwitch()
> 
> }
> 
> }

### Else If

> [!Code]
> for i in 1 ... 2{
> 
>     moveForward()
> 
>     if isOnClosedSwitch {
> 
>         toggleSwitch()
> 
>     } else if isOnGem {
> 
>         collectGem()
> 
>     }
> 
> }

> [!Code]
> for i in 1 ... 10 {
> Commands go here
> }
> 
> if or else if
> 
> && - both conditions must be true
> 
> ! NOT - makes it the opposite, so the condition must be false
> 
> || OR - if *either* condition is true, code will run

#swift #programming #ipad

### Logical Operators

AND - && - Runs only if all conditions are true

OR - || - Runs if at least one condition is true

NOT - ! - Does the opposite. Eg if onGem is true, !onGem is false

EG

> [!code]
> for i in 1 ... 4 {
> 
>     moveForward()
> 
>     if isOnGem {
> 
>         collectGem()
> 
> } else if !isOnGem || isBlocked {
> 
>         turnLeft()
> 
>         moveForward()
> 
>         moveForward()
> 
>         collectGem()
> 
>         turnLeft()
> 
>         turnLeft()
> 
>         moveForward()
> 
>         moveForward()
> 
>         turnLeft()
> 
>     }
> 
> }

## Variables

Like a container for information

Int

String

Once something has an int value it can't then have a string value later, and vice versa

Eg:

> [!code]
> for i in 1 ... 21 {
> 
> if isOnGem{
> 
>     collectGem()
> 
>     gemCounter = gemCounter + 1
> 
> }    else if !isOnGem{
> 
>     moveForward()
> 
> }
> 
>     if isBlocked{
> 
>         turnRight()
> 
>     }
> 
> }

Thing I forget is you gotta do "nameofvariable = nameofvariable + 1" or whatevers, NOT just "nameofvariable + 1"

A *Type* is like a blueprint. 

Has features called *properties* - Like defined variables

Has behaviours called *methods* - Like defined functions

An *Instance* is like a house built from said blueprint. In this example, "blueportal" and "pinkportal" are *instances*, "isActive" is the *state*

> [!code]
> bluePortal.isActive = false
> 
> pinkPortal.isActive = false
> 
> moveForward()
> 
> moveForward()
> 
> moveForward()
> 
> collectGem()
> 
> turnLeft()
> 
> turnLeft()
> 
> pinkPortal.isActive = true
> 
> moveForward()
> 
> turnLeft()
> 
> turnLeft()
> 
> moveForward()
> 
> collectGem()
> 
> turnLeft()
> 
> turnLeft()
> 
> moveForward()
> 
> bluePortal.isActive = true
> 
> moveForward()
> 
> moveForward()
> 
> collectGem()
> 
> bluePortal.isActive = false
> 
> turnLeft()
> 
> turnLeft()
> 
> moveForward()
> 
> moveForward()
> 
> collectGem()

### Initialisation

Let blahblah = blahblah() "turns it on"

> [!code]
> Let expert = Expert()
> 
> expert.moveForward()
> 
> expert.moveForward()
> 
> expert.moveForward()
> 
> expert.turnLockUp()
> 
> expert.turnLeft()
> 
> expert.turnLeft()
> 
> expert.moveForward()
> 
> expert.moveForward()
> 
> expert.moveForward()
> 
> expert.turnLeft()
> 
> for i in 1 ... 3{
> 
>     expert.moveForward()
> 
>     expert.moveForward()
> 
>     expert.moveForward()
> 
>     expert.collectGem()
> 
>     expert.turnLeft()
> 
>     expert.turnLeft()
> 
>     expert.moveForward()
> 
>     expert.moveForward()
> 
>     expert.moveForward()
> 
>     expert.turnLeft()
> 
> }

### Functions

Get ya func set up first. Lets you name a set of commands to be run. 

Eg func tieMyShoe(){

Loop()

Swoop()

Pull()

}

> [!code]
> 
> func gemnSwitch() {
> moveForward()
> 
>     collectGem()
> 
>     moveForward()
> 
>     toggleSwitch()
> }
> 
> for i in 1 ... 4{
> 
>     gemnSwitch()
> 
>     moveForward()
> 
>     moveForward()
> 
>     turnLeft()
> 
> }

### Parameters

Have an input value to function - *type*

When calling the function, pass an *argument* that customises HOW it runs

> [!code]
> let expert = Expert()
> 
> func move(distance: Int) {
> 
> }
> 
> expert.move(distance:6)
> 
> expert.turnRight()
> 
> expert.move(distance:2)
> 
> expert.turnRight()
> 
> expert.move(distance:5)
> 
> expert.turnLeft()
> 
> expert.move(distance:5)
> 
> expert.turnLeft()
> 
> expert.turnLockUp()
> 
> expert.turnLeft()
> 
> expert.move(distance:3)
> 
> expert.turnRight()
> 
> expert.move(distance:3)
> 
> expert.turnRight()
> 
> expert.move(distance:4)
> 
> expert.collectGem()

> [!code]
> let expert = Expert()
> 
> world.place(expert, atColumn: 1, row: 5)
> 
> func move(distance: Int) {
> 
> }
> 
> 
> 
> expert.turnLeft()
> 
> expert.turnLeft()
> 
> expert.moveForward()
> 
> expert.collectGem()
> 
> expert.turnRight()
> 
> expert.moveForward()
> 
> expert.turnLockUp()
> 
> expert.turnRight()
> 
> expert.move(distance:5)
> 
> expert.turnRight()
> 
> expert.moveForward()
> 
> expert.collectGem()
> 
> expert.turnRight()
> 
> expert.turnRight()
> 
> expert.moveForward()
> 
> expert.turnLockUp()
> 
> expert.turnRight()
> 
> expert.move(distance:6)
> 
> expert.collectGem()

## Swift UI Views

Deffo a little bit lost to start with

> [!code]
> import SwiftUI
> 
> 
> 
> /*#-code-walkthrough(1.first)*/
> 
> struct/*#-code-walkthrough(1.introView)*/ IntroView: /*#-code-walkthrough(1.introView)*/ View {
> 
>     /*#-code-walkthrough(1.body)*/
> 
>     var body: some View {
> 
>         //#-learning-task(placeOneViewInsideAnother)
> 
>         //#-learning-task(addImageInHStack)
> 
>         //#-learning-task(modifierWalkthrough)
> 
>         /*#-code-walkthrough(2.bothModifiers)*/
> 
>         //#-learning-task(addFriend)
> 
>         //#-learning-task(modifier)
> 
>         /*#-code-walkthrough(2.bothModifiers)*/
> 
>         //#-learning-task(changeText)
> 
>         /*#-code-walkthrough(1.text)*/
> 
>         Text("Bonsoir, Amigo.")
> 
>         Text ("here is some more text")
> 
>         /*#-code-walkthrough(1.text)*/
> 
>         //#-learning-task(textElement)
> 
>     }
> 
>     /*#-code-walkthrough(1.body)*/
> 
> }
> 
> 
> 
> /*#-code-walkthrough(1.preview)*/
> 
> struct IntroView_Previews: PreviewProvider {
> 
>     static var previews: some View {
> 
>         VStack {
> 
>             IntroView()
> 
>         }
> 
>     }
> 
> }
> 
> /*#-code-walkthrough(1.preview)*/
> 
> /*#-code-walkthrough(1.first)*/

> [!code]
> 
> import SwiftUI
> 
> 
> /*#-code-walkthrough(1.first)*/
> 
> struct/*#-code-walkthrough(1.introView)*/ IntroView: /*#-code-walkthrough(1.introView)*/ View {
> 
>     /*#-code-walkthrough(1.body)*/
> 
>     var body: some View {
> 
>         //#-learning-task(placeOneViewInsideAnother)
> 
>         //#-learning-task(addImageInHStack)
> 
>         //#-learning-task(modifierWalkthrough)
> 
>         /*#-code-walkthrough(2.bothModifiers)*/
> 
>         //#-learning-task(addFriend)
> 
>         //#-learning-task(modifier)
> 
>         /*#-code-walkthrough(2.bothModifiers)*/
> 
>         //#-learning-task(changeText)
> 
>         /*#-code-walkthrough(1.text)*/
> 
>         Text("Bonsoir, Amigo.")
> 
>         Text ("here is some more text")
> 
>         Image("FriendAndGem")
> 
>             .resizable()
> 
>             .scaledToFit()
> 
>         /*#-code-walkthrough(1.text)*/
> 
>         //#-learning-task(textElement)
> 
>     }
> 
>     /*#-code-walkthrough(1.body)*/
> 
> }
> 
> 
> 
> /*#-code-walkthrough(1.preview)*/
> 
> struct IntroView_Previews: PreviewProvider {
> 
>     static var previews: some View {
> 
>         VStack {
> 
>             IntroView()
> 
>         }
> 
>     }
> 
> }
> 
> /*#-code-walkthrough(1.preview)*/
> 
> /*#-code-walkthrough(1.first)*/

## Hstacks

Let you place a view within another view. Or something?

> [!code]
> 
> import SwiftUI
> 
> 
> 
> /*#-code-walkthrough(1.first)*/
> 
> struct/*#-code-walkthrough(1.introView)*/ IntroView: /*#-code-walkthrough(1.introView)*/ View {
> 
>     /*#-code-walkthrough(1.body)*/
> 
>     var body: some View {
> 
>         HStack { 
> 
>             Text ("this is in the hstack")
> 
>         }
> 
>         //#-learning-task(addImageInHStack)
> 
>         //#-learning-task(modifierWalkthrough)
> 
>         /*#-code-walkthrough(2.bothModifiers)*/
> 
>         //#-learning-task(addFriend)
> 
>         //#-learning-task(modifier)
> 
>         /*#-code-walkthrough(2.bothModifiers)*/
> 
>         //#-learning-task(changeText)
> 
>         /*#-code-walkthrough(1.text)*/
> 
>         Text("Bonsoir, Amigo.")
> 
>         Text ("here is some more text")
> 
>         Image("FriendAndGem")
> 
>             .resizable()
> 
>             .scaledToFit()
> 
>         /*#-code-walkthrough(1.text)*/
> 
>         //#-learning-task(textElement)
> 
>     }
> 
>     /*#-code-walkthrough(1.body)*/
> 
> }
> 
> 
> 
> /*#-code-walkthrough(1.preview)*/
> 
> struct IntroView_Previews: PreviewProvider {
> 
>     static var previews: some View {
> 
>         VStack {
> 
>             IntroView()
> 
>         }
> 
>     }
> 
> }
> 
> /*#-code-walkthrough(1.preview)*/
> 
> /*#-code-walkthrough(1.first)*/

So like this, the image appears beside the text, rather than above/below it. Guessing the "h" in hstack refers to "horizontal". So they get arranged horizontally rather than vertically. 

> [!code]
> 
> import SwiftUI
> 
> 
> 
> /*#-code-walkthrough(1.first)*/
> 
> struct/*#-code-walkthrough(1.introView)*/ IntroView: /*#-code-walkthrough(1.introView)*/ View {
> 
>     /*#-code-walkthrough(1.body)*/
> 
>     var body: some View {
> 
>         HStack { 
> 
>             Text ("this is in the hstack")
> 
>             Image("FriendAndGem")
> 
>                 .resizable()
> 
>                 .scaledToFit()
> 
>         }
> 
>         //#-learning-task(addImageInHStack)
> 
>         //#-learning-task(modifierWalkthrough)
> 
>         /*#-code-walkthrough(2.bothModifiers)*/
> 
>         //#-learning-task(addFriend)
> 
>         //#-learning-task(modifier)
> 
>         /*#-code-walkthrough(2.bothModifiers)*/
> 
>         //#-learning-task(changeText)
> 
>         /*#-code-walkthrough(1.text)*/
> 
>         Text("Bonsoir, Amigo.")
> 
>         Text ("here is some more text")
> 
> 
> 
>         /*#-code-walkthrough(1.text)*/
> 
>         //#-learning-task(textElement)
> 
>     }
> 
>     /*#-code-walkthrough(1.body)*/
> 
> }
> 
> 
> 
> /*#-code-walkthrough(1.preview)*/
> 
> struct IntroView_Previews: PreviewProvider {
> 
>     static var previews: some View {
> 
>         VStack {
> 
>             IntroView()
> 
>         }
> 
>     }
> 
> }
> 
> /*#-code-walkthrough(1.preview)*/
> 
> /*#-code-walkthrough(1.first)*/

Views in views in view. It's views all the way down:

> [!code]
> 
> 
> import SwiftUI
> 
> 
> 
> struct FriendDetailView: View {
> 
>     var body: some View {
> 
>         VStack {
> 
>             HStack { 
> 
>                 Image("Friend")
> 
>                     .resizable()
> 
>                     .scaledToFit()
> 
>                 VStack {
> 
>                     Text ("Friendo")
> 
>                         .font(.largeTitle)
> 
>                 }
> 
>                 //#-learning-task(addTextInVStack)
> 
>                 //#-learning-task(describeFriend)
> 
>             }
> 
>         }
> 
>     }
> 
> }
> 
> 
> 
> struct FriendDetailView_Previews: PreviewProvider {
> 
>     static var previews: some View {
> 
>         VStack {
> 
>             FriendDetailView()
> 
>         }
> 
>     }
> 
> }

So with *this*, the image and text appear side by side, but because both sets of text are in a vstack *inside* the hstack, the text remains vertically aligned to each other, but horizontally in relation to the image

> [!code]
> 
> import SwiftUI
> 
> 
> 
> struct FriendDetailView: View {
> 
>     var body: some View {
> 
>         VStack {
> 
>             HStack { 
> 
>                 Image("Friend")
> 
>                     .resizable()
> 
>                     .scaledToFit()
> 
>         VStack {
> 
>                     Text ("Friendo")
> 
>                         .font(.largeTitle)
> 
>                  Text("Orange guy. If this gets longer how does it wrap or otherwise behave? The image will get smaller depending on the text but might get bigger again as we start a new line.")
> 
>                 .font(.caption)
> 
>                 }
> 
>                 //#-learning-task(addTextInVStack)
> 
>                 //#-learning-task(describeFriend)
> 
>             }
> 
>         }
> 
>     }
> 
> }
> 
> 
> 
> struct FriendDetailView_Previews: PreviewProvider {
> 
>     static var previews: some View {
> 
>         VStack {
> 
>             FriendDetailView()
> 
>         }
> 
>     }
> 
> }

Can mix n match, so the start of this'll get the image on top of two separate text boxes, can tweak the text bits separately. 

> [!code]
> import SwiftUI
> 
> 
> 
> struct ExperimentView: View {
> 
>     var body: some View {
> 
>         VStack{
> 
>             Text("This is a title for this screen")
> 
>                 .font(.headline)
> 
>         }
> 
>         VStack{
> 
>             Image("Hopper")
> 
>                 .resizable()
> 
>                 .scaledToFit()
> 
>             HStack{
> 
>                 Text("Hopper")
> 
>                     .font(.largeTitle)
> 
>                 Text("Hopper is a stretched praying mantis")
> 
>                     .font(.caption)
> 
>             }
> 
>             VStack {
> 
>                 FriendDetailView()
> 
>                 HStack {
> 
>                     Image("Blu")
> 
>                         .resizable()
> 
>                         .scaledToFit()
> 
>                     VStack{
> 
>                         Text("Blu")
> 
>                             .font(.largeTitle)
> 
>                         Text("This is something about Blu. They look like a teardrop")
> 
>                             .font(.caption)
> 
>                     }
> 
>                 }
> 
>             }
> 
>             //#-learning-task(createBluView)
> 
>             //#-learning-task(createHopperView)
> 
>         }
> 
>     }
> 
>     struct ExperimentView_Previews: PreviewProvider {
> 
>         static var previews: some View {
> 
>             VStack {
> 
>                 ExperimentView()
> 
>             }
> 
>         }
> 
>     }
> 
> }
