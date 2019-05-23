class Person{

    error = false;

    constructor(p){
      if( typeof(p) !== "object" ){
        this.error = true;
        this.errorMSG();
      }else{
        this.p = p;
      }
    }

    readyForLunch(){
      var now = new Date();
      var start = this.getDateTime("s");
      var end = this.getDateTime("e");

      if( now < start ) return 'It is too early for Lunch :( ';
      else if( now > end ) return 'It is too late for Lunch :( ';
      else return 'Go! (╯°□°）╯︵ ┻━━━━┻';
    }

    isLikeCoffee(){
      return this.p.coffee.is_like;
    }

    getDateTime(t){
      var today = new Date();
      if( t=="s" ){
        var s = (this.p.lunchtime.start_date).split(":");
        return new Date(today.getFullYear(), today.getMonth(), today.getDate(), s[0], s[1], 0);
      }else if( t=="e" ){
        var e = (this.p.lunchtime.end_date).split(":");
        return new Date(today.getFullYear(), today.getMonth(), today.getDate(), e[0], e[1], 0);
      }else{
        return "500 - SystemError";
      }
    }

    errorMSG(){
      console.error("This is not an Object!");
      return false;
    }
  }
  var asd = "asd";

  var balazs = {
    name: 'Balázs',
    age: 28,
    height: 178,
    coffee : {
      favorite : {
        color: "black",
        name: "Espresso Forte?",
        alias: "Caffe Del Torro"
      },
      latest_time : "15:01",
      is_like: "Hogy a viharba' ne?!",
    },
    lunchtime : {
      start_date : "11:50",
      end_date : "12:50"
    },
    activities: ["Lunch", "Drink Coffee", "Theory crafting"],
  };

  var b = new Person(balazs);

  console.log( b.readyForLunch() );
