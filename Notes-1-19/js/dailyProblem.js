
//Constructor
function Slide() {
    this.nums = [];
    this.add = function (num) {
        this.nums.push(num);
        if (this.nums.length > 3) {
            this.nums.shift();
        }
    };
    this.get = function () {
        let total = 0;
        for (let i = 0; i < this.nums.length; i++) {
            total = total + this.nums[i];
        }
        return total / this.nums.length;
    };
    // return {
    //     add(number) {
    //         // adds number to the list of numbers
    //         this.push(array);
    //     },
    //     get() {
    //         // returns the average of three most recent #s
    //     },
    // };
    return this;
}

let average = new Slide();
average.add(1);
average.add(3);
average.get(); // return 2 (4/2)
average.add(11);
average.add(4);
average.get() // return 6 (18/3)

//What should add(); do? What do I need to do it?
//  - add num to array - an empty array and a .push
// What should get(); do? What do I need to do it?
//  - Looks at 3 newest nums and averages them - returns average
//What type of thing is slide(); returning?

//Closure:
function slide() {
    let nums = [];

    return {
        add(num) {
            nums.push(num);

            if (nums.length > 3) {
                nums.shift();
            }

        },
        get() {
            let total = 0;
            for (let i = 0; i < this.nums.length; i++) {
                total = total + this.nums[i];
            }
            return total / this.nums.length;
        },
    };
}