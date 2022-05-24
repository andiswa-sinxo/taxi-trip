document.addEventListener('alpine:init', () => {
    Alpine.data('route', () => ({
        mainRank: 'Cape Town',
        init() {
            console.log(this.rank)
        },
        rank: [
            {
                destination: "Gugulethu",
                passageAction: 0,
                taxiTrips: 0,
                taxiFare: 20.00,
                totalFare: 0.00,
                taxiAvail: 4,
                limit: 10,
                
                    add(){
                        this.passageAction++;
                    },
                    subtract(){
                        this.passageAction--
                    },
                    leave(){
                        this.taxiTrips++;
                        this.taxiAvail -=1;
                        this.passageAction -= this.limit
                    },
                    total(){
                      return Number(this.taxiTrips)*10
                    }

                    
            },
            {
                destination: "Nyanga",
                passageAction: 0,
                taxiTrips: 0,
                taxiFare: 21.00,
                totalFare: 0.00,
                taxiAvail: 3,
                limit: 10,

                add(){
                    this.passageAction++;
                },
                subtract(){
                    this.passageAction--
                },
                leave(){
                    this.taxiTrips++;
                    this.taxiAvail -=1;
                    this.passageAction -= this.limit
                }
            },
            {
                destination: "Khayelitsha",
                passageAction: 0,
                taxiTrips: 0,
                taxiFare: 35.00,
                totalFare: 0.00,
                taxiAvail: 7,
                limit: 10,

                add(){
                    this.passageAction++;
                },
                subtract(){
                    this.passageAction--
                },
                leave(){
                    this.taxiTrips++;
                    this.taxiAvail -=1;
                    this.passageAction -= this.limit

                }
            },
            {
                destination: "Thornton",
                passageAction: 0,
                taxiTrips: 0,
                taxiFare: 18.00,
                totalFare: 0.00,
                taxiAvail: 2,
                limit: 10,

                add(){
                    this.passageAction++;
                },
                subtract(){
                    this.passageAction--
                },
                leave(){
                    this.taxiTrips++;
                    this.taxiAvail -=1;
                    this.passageAction -= this.limit
                }
            }
            
    
        ]
       
    }))
})


