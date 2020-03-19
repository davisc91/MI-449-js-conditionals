var wantToHelp = window.confirm('I\'m so bored doing this social distancing stuff during the coronavirus outbreak. Do you want to help me figure out what I should do right now?')
if (!wantToHelp) {
  window.alert('Oh... okay :/')
} else {
  var whatToDo = window.prompt('Great! So what do you think I should do right now?')
  whatToDo = whatToDo || ''
  whatToDo = whatToDo.toLowerCase().trim()
  if (whatToDo === '') {
    window.alert('Aw man, I was really hoping you could help me out :(')
  } else if (whatToDo === 'homework') {
    window.alert('Ugh, I was afraid you would say that...')
  } else if (whatToDo === 'video games') {
    var whichGame = window.prompt('Ooo that\'s a really good idea! Which video game should I play? I have Life is Strange, Fortnite, and Horizon Zero Dawn.')
    if (!whichGame) {
      whichGame = 'cancel'
    }
    whichGame = whichGame.toLowerCase().trim()
    if (whichGame === 'life is strange' || whichGame === 'fortnite') {
      window.alert('I always play that but I never get tired of it, good choice :)')
    } else if (whichGame === 'horizon zero dawn') {
      window.alert('I haven\'t played that one in a while, I\'ll play it now!')
    } else if (whichGame === '') {
      window.alert('You didn\'t even type anything!')
    } else if (whichGame === 'cancel') {
      window.alert('Hm okay, I guess I\'ll pick my own game then...')
    } else {
      window.alert('I don\'t have that game!')
    }
  } else if (whatToDo === 'watch tv') {
    var whichService = window.prompt('Oh, I like that idea! Hulu or Netflix?')
    if (!whichService) {
      whichService = 'cancel'
    }
    whichService = whichService.toLowerCase().trim()
    if (whichService === 'hulu') {
      window.alert('You\'re right, I missed the last episode of The Bachelor so I\'ll get on that :)')
    } else if (whichService === 'netflix') {
      window.alert('Good choice, I might rewatch some Black Mirror episodes.')
    } else if (whichService === '') {
      window.alert('You didn\'t even type anything!')
    } else if (whichService === 'cancel') {
      window.alert('Hm okay, I guess I\'ll pick my own show then...')
    } else {
      window.alert('I don\'t have that streaming service!')
    }
  } else if (whatToDo === 'hang out with friends') {
    var randomNumber = Math.random()
    if (randomNumber > 0.7) {
      window.alert('Good idea, but only in groups of less than 10 of course!')
    } else if (randomNumber > 0.5) {
      window.alert('Hmm, I\'m a little too nervous to hang around people right now. Don\'t want to accidentally carry the virus!')
    } else if (randomNumber > 0.3) {
      window.alert('You\'re right, I\'m sure this whole thing isn\'t THAT big of a deal! I can be around people!! (....right?)')
    } else if (randomNumber > 0.1) {
      var friendsOrNot = window.prompt('I really want to... maybe if I just hung out with a few people that I have been socially isolating with? What do you think, yes or no?')
      if (!friendsOrNot) {
        friendsOrNot = 'cancel'
      }
      friendsOrNot = friendsOrNot.toLowerCase().trim()
      if (friendsOrNot === 'yes') {
        var numberOfPeople = window.prompt('Okay, I will do it! One last question though, how many people do you think is safe to be around?')
        if ((isNaN(numberOfPeople)) || (parseInt(numberOfPeople) === 0)) {
          window.alert('No one? I thought you said I should hang out with friends!')
        } else if (parseInt(numberOfPeople) > 10) {
          window.alert('I don\'t think it\'s safe to be around that many people right now!')
        } else if (parseInt(numberOfPeople) > 0) {
          window.alert('Sounds good to me!')
        } else {
          window.alert('Now I\'ll never know how many people is okay to be around! :(')
        }
      } else if (friendsOrNot === 'no') {
        window.alert('Okay, I guess I won\'t then just to be safe. Thanks!')
      } else if (friendsOrNot === '') {
        window.alert('You didn\'t even type anything!')
      } else if (friendsOrNot === 'cancel') {
        window.alert('Oh, I guess I\'ll just be stuck wondering if I should hang out with my friends by myself...')
      } else {
        window.alert('It was a yes or no question... :/')
      }
    }
  } else {
    window.alert('I don\'t really want to do that right now, but I appreciate the suggestion!')
  }
}
