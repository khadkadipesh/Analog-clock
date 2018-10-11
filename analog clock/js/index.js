class Watch {
   time() {   
    this.hourHand   = document.querySelector('.hour.hand');
    this.minuteHand = document.querySelector('.minute.hand');
    this.secondHand = document.querySelector('.second.hand');
    this.timer();
    
    setInterval(() => this.timer(), 1000);
  }  

  timer() {
    this.sethandRotation('hour');
    this.sethandRotation('minute');
    this.sethandRotation('second');
  }

  sethandRotation(hand) {
    let date = new Date(), hours, minutes, seconds, percentage, degree;
    
    switch (hand) {
      case 'hour':
        hours       = date.getHours();
        hand        = this.hourHand;
        percentage  = this.numberToPercentage(hours, 12);
        break;
      case 'minute':
        minutes     = date.getMinutes();
        hand        = this.minuteHand;
        percentage  = this.numberToPercentage(minutes, 60);
        break;
      case 'second':
        seconds     = date.getSeconds();
        hand        = this.secondHand;
        percentage  = this.numberToPercentage(seconds, 60);
             break;
    }
  
    degree                = this.percentageToDegree(percentage);
    hand.style.transform  = `rotate(${degree}deg) translate(-50%, -50%)`;
  }

  numberToPercentage(number = 0, max = 60) {
    return (number / max) * 100;
  }

  percentageToDegree(percentage = 0) {
    return (percentage * 360) / 100;
  }

}

let watch = new Watch();
watch.time();