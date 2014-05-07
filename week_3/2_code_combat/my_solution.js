// I worked on this challenge [by myself]]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// RESCUE MISSION
 move down x2
 move right x1
 move up x2
 move right x2
 move down x1
 attack

 this.moveDown();
 this.moveDown();
 this.moveRight();
 this.moveUp();
 this.moveUp();
 this.moveRight();
 this.moveRight();
 this.moveDown();
 this.attackNearbyEnemy();

// GRAB THE MUSHROOM
 move up x1
 move right x1
 move left x1
 move up x1
 attack

 this.moveUp();
 this.moveRight();
 this.moveLeft();
 this.moveUp();
 this.attackNearbyEnemy();

// DRINK ME
 move right x1
 attack
 move right x1
 move down x1
 move up x1
 move right x1
 attack

 this.moveRight();
 this.attackNearbyEnemy();
 this.moveRight();
 this.moveDown();
 this.moveUp();
 this.moveRight();
 this.attackNearbyEnemy();

// TAUNT THE GUARDS
 move right x1
 bust down door
 move right x1
 say "Hey there!"
 move left x2
 say "Attack!"
 move right x1
 say "Follow me."
 move right x2
 move up x1
 move right x1
 say "Hello!"
 move down x1
 move right x1
 move up x1
 move right x1

 this.moveRight();
 this.bustDownDoor();
 this.moveRight();
 this.say("Hey there!");
 this.moveLeft();
 this.moveLeft();
 this.say("Attack!");
 this.moveRight();
 this.say("Follow me.");
 this.moveRight();
 this.moveRight();
 this.moveUp();
 this.moveRight();
 this.say("Hello!");
 this.moveDown();
 this.moveRight();
 this.moveUp();
 this.moveRight();

// IT'S A TRAP
 move down x2
 say "Hello!"
 move up x2
 say "Attack!"

 this.moveDown();
 this.moveDown();
 this.say("Hello!");
 this.moveUp();
 this.moveUp();
 this.say("Attack!");

// BREAK THE PRISON
 if William, then true
 if Krogg, then false
 if Lucas, then true
 if Brack, then false
 if Marcus, then true
 if MARCUS, then false
 if Gordo, then true

 if(name === "William")
    return true;
 if(name === "Krogg")
    return false;
 if(name === "Lucas") 
    return true;
 if(name === "Brack")
    return false;
 if(name === "Marcus")
    return true;
 if(name === "MARCUS")
    return false;
 if(name === "Gordon")
    return true;

// TAUNT
 say "Hey!"
 say "Hello!"
 say "Yoohoo!"
 say "Come here!"

 this.say("Hey!");
 this.say("Hello!");
 this.say("Yoohoo!");
 this.say("Come here!");

// COWARDLY TAUNT
 move 50,16
 say "Hey!"
 move 63,20
 move 70,10
 say "I can lure them in here."

 this.moveXY(50, 16);
 this.say("Hey!");
 this.moveXY(63, 20);
 this.moveXY(70, 10);
 this.say("I can lure them in here.")

// COMMANDING FOLLWERS
 move 49, 66
 move 60, 63
 move 75, 63
 say "Follow me!"
 move 63, 42
 say "Attack!"

 this.moveXY(49, 66);
 this.moveXY(60, 63);
 this.moveXY(75, 63);
 this.say("Follow me!");
 this.moveXY(63, 42);
 this.say("Attack!");

// MOBILE ARTILLERY
 move 30, 26
 attack 46, 5
 move 48, 37
 attack 49, 66
 attack 48, 51
 attack 70, 58
 attack 59, 44

this.moveXY(30, 26);
this.attackXY(46, 5);
this.moveXY(48, 37);
this.attackXY(49, 66);
this.attackXY(48, 51);
this.attackXY(70, 58);
this.attackXY(59, 44);

// Reflection:

// To be honest I'm not totally sure how this has anything to do with what we are learning and I really didn't find it useful. In fact I thought it was a big waste of time. In the future it could be cool to give students an option to do this or code academy or something else more in line with our individual learning styles.
