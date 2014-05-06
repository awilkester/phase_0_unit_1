// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Austin Hay
//  2. Jonathan Young

//  Your Reflection:

// To be honest, I felt like this week's GPS did not really work well for those of us signed up early in the week. Jonathan and I had only started to review the JS materials the hour before we began our pairing session. It was only posted <24 hours ago.I would LOVE to work on concepts and materials from the week -- totally awesome and I'm stoked! -- but it's really stressful and not so cool when we are expected to perform on assignments when we haven't even been given heads up on how to prepare for them. If jonathan and I had done this GPS later in the week after we had learned more about JS I think we would have had a much different and better experience. Also -- our instructor on staff had a really poor internet connection, which led to a very distracting interaction.  We couldn't hear or see her half the time and when she was there it was like she trying to tell us the code (because we didn't know any JS).Anyways, I hope all this feedback is useful for improving the the course cirriculum.//

//YOUR CODE HERE!

function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
  }

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!")
var kristenBell = new Client("Kristen Bell", 33, "Do you want to build a snowman?")
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

var clients = [adamSandler, kristenBell, jimCarrey]


  for(var i = 0; i < clients.length, i++){
    console.log(client[i]);
  }

function Print(Client){
  console.log(this.Client.name)
  console.log(this.Client.age)
  console.log(this.Client.quote)
  }

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

