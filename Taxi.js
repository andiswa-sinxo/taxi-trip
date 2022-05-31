class Taxi {

    passageAction = 0;
    taxiTrips = 0;
    totalFare = 0.00;
    taxiAvail = 4;
    limit = 10;
    routeTrips =0;
    totalPayment = 0;

    constructor(destination, fare = 12) {
        this.destination = destination;
        this.taxiFare = fare;

    }

    add() {
        this.passageAction++;
    };

    subtract() {
        this.passageAction--
    };

    leave() {
        this.taxiTrips++;
        this.taxiAvail -= 1;
        this.passageAction -= this.limit

    };

    total() {
        return Number(this.taxiFare) * this.limit * this.taxiTrips
    };


    totalTrips() {
        let myTrips = this.total();
        this.routeTrips += myTrips
    };


}

const ranks = [{d: 'Nyanga', f: 3}, {f:4, d:'Gugs'}]

const nR = ranks.map( r => {
    return new Taxi(r.d, r.f);
})


console.log(nR[1].taxiFare)