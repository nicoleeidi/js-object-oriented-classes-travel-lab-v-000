class Driver {
  constructor(name,startDate){
    this.name=name
    this.startDate=new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}
class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation=beginningLocation
    this.endingLocation=endingLocation
  }
  avenueToInteger(avenue){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    return eastWest.indexOf(avenue)
  }
  blocksTravelled(){



    let distance1= Math.abs(this.beginningLocation.horizontal - this.endingLocation.horizontal)
    let distance2= Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return distance1 + distance2
  }
  estimatedTime(peak){
    if (peak){return this.blocksTravelled()/2}
    else {return this.blocksTravelled()/3}
  }


}
