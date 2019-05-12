//dygytal lib
Object.defineProperty(Array.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];
        for(let value=1 ;value<this.length; value++) {
            if (this[value] !== firstValue) {
                return false;}}
        return true;}
});
Object.defineProperty(String.prototype, "reverse", {
    get: function() {
        let arr = this.split('');
        arr.reverse();
        return arr.join('')
    }
});
Object.defineProperty(Number.prototype, "reverse", {
    get: function() {
        let arr = this.toString().split('');
        arr.reverse();
        if (arr.indexOf('.')!==-1){
            return parseFloat(arr.join(''))

        }
        else {
            return parseInt(arr.join(''))

        }
    }
});

Array.prototype.deleteIndex= function (index) {
    this.splice(index,1)
};

Array.prototype.deleteElementFromLeft= function (value) {
    let index = this.indexOf(value);
    this.splice(index,1)
};
Array.prototype.deleteElementFromRight= function (value) {
    let index = this.lastIndexOf(value);
    this.splice(index,1)
};
Object.defineProperty(Set.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];
        for(let value=1 ;value<this.size; value++) {
            if (this.elem(value) !== firstValue) {
                return false;}}
        return true;}
});
Set.prototype.elem = function(index){
    let iterator1 = this.values();
    while (index > 1) {
        iterator1.next().value;
        index--;
    }
    return iterator1.next().value;
};
function write(value) {
    console.log(value);
}
function getURL(){
    return location.href
}
//

let matrix= [
    ['0','0','0'],
    ['0','0','0'],
    ['0','0','0']
];
let index = 1;
let set = new Set();
//write(matrix[1][2]);
let random = Math.round(Math.random()*8)+1;
//write(random);
set.add(1);set.add(2);set.add(3);set.add(4);set.add(5);set.add(6);set.add(7);set.add(8);set.add(9);
class Wolf {
    constructor(){
        this.X=0;
        this.Y=0;
        this.value=0;
        this.index=index;
    }
}
class Food {
    constructor(){
        this.X=0;
        this.Y=0;
        this.value=0;
        this.index='F';
    }
}
let wolf1 = new Wolf();
positioning(wolf1);

index++;
random= Math.round(Math.random()*7)+1;
let wolf2 = new Wolf();
positioning(wolf2);

index++;
random= Math.round(Math.random()*6)+1;
let wolf3 = new Wolf();
positioning(wolf3);

let food= new Food();
random= Math.round(Math.random()*5)+1;
positioning(food);

let food2= new Food();
random= Math.round(Math.random()*5)+1;
positioning(food2);


let index1=1;
writeMatrix();

let near = 0;
nearFood(food,food2,wolf1,wolf2,wolf3);
if (near===1) {
    move(wolf1, wolf2, wolf3, food,food2);
}
else {
    move(wolf1, wolf2, wolf3, food2,food);
}
function nearFood(food1,food2,wolf1,wolf2,wolf3) {
    let waysToFood1=[];
    let waysToFood2=[];
    waysToFood1.push(Math.abs(wolf1.X-food1.X)+ Math.abs(wolf1.Y-food1.Y))
    waysToFood1.push(Math.abs(wolf2.X-food1.X)+ Math.abs(wolf2.Y-food1.Y))
    waysToFood1.push(Math.abs(wolf3.X-food1.X)+ Math.abs(wolf3.Y-food1.Y))

    waysToFood2.push(Math.abs(wolf1.X-food2.X)+ Math.abs(wolf1.Y-food2.Y))
    waysToFood2.push(Math.abs(wolf2.X-food2.X)+ Math.abs(wolf2.Y-food2.Y))
    waysToFood2.push(Math.abs(wolf3.X-food2.X)+ Math.abs(wolf3.Y-food2.Y))

    while (waysToFood2.length > 0 &&waysToFood1.length>0){
        if (waysToFood1[0]>=waysToFood2[0]){
            waysToFood1.splice(0,1)
        }
        else {
            waysToFood2.splice(0,1)
        }
    }
    if (waysToFood2.length === 0){
        near = 1;
    }
    else {
        near= 2;
    }
}

function move(wolf1,wolf2,wolf3,food,notNearFood) {
    wolf1.value = Math.abs(wolf1.X-food.X)+ Math.abs(wolf1.Y-food.Y);
    wolf2.value = Math.abs(wolf2.X-food.X)+ Math.abs(wolf2.Y-food.Y);
    wolf3.value = Math.abs(wolf3.X-food.X)+ Math.abs(wolf3.Y-food.Y);
    write(wolf1.value+' wolf 1 val');
    write(wolf2.value+' wolf 2 val');
    write(wolf3.value+' wolf 3 val');
    if (wolf1.value<wolf2.value&&wolf1.value<wolf3.value){
        write('wolf 1 is alpha');
        while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
            index1++;
            targetingLeader(wolf1, food);
            writeMatrix();
            targetingOmegas(wolf2, wolf3, wolf1,notNearFood);
            writeMatrix();

        }

    }
    else if (wolf2.value<wolf3.value&&wolf2.value<wolf3.value){
        write('wolf 2 is alpha');
        while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
            index1++
            targetingLeader(wolf2, food);
            writeMatrix();
            targetingOmegas(wolf1, wolf3, wolf2,notNearFood);
            writeMatrix();
        }

    }
    else if (wolf3.value<wolf1.value&&wolf3.value<wolf2.value){
        write('wolf 3 is alpha');
        while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
            index1++
            targetingLeader(wolf3, food);
            writeMatrix();
            targetingOmegas(wolf1, wolf2, wolf3,notNearFood);
            writeMatrix();
        }

    }
    else if (wolf1.value===wolf2.value){
        if ( Math.round(Math.random())<1){
            write('wolf 1 is alpha');
            while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
                index1++
                targetingLeader(wolf1, food);
                writeMatrix();
                targetingOmegas(wolf2, wolf3, wolf1,notNearFood);
                writeMatrix();
            }
        }
        else {
            write('wolf 2 is alpha');
            while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
                index1++
                targetingLeader(wolf2, food);
                writeMatrix();
                targetingOmegas(wolf1, wolf3, wolf2,notNearFood);
                writeMatrix();
            }

        }
    }
    else if (wolf3.value===wolf2.value){
        if ( Math.round(Math.random())<1){
            write('wolf 3 is alpha');
            while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
                index1++
                targetingLeader(wolf3, food);
                writeMatrix();
                targetingOmegas(wolf2, wolf1, wolf3,notNearFood);
                writeMatrix();
            }

        }
        else {
            write('wolf 2 is alpha');
            while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
                index1++
                targetingLeader(wolf2, food);
                writeMatrix();
                targetingOmegas(wolf1, wolf3, wolf2,notNearFood);
                writeMatrix();
            }

        }
    }
    else if (wolf1.value===wolf3.value){
        if ( Math.round(Math.random())<1){
            write('wolf 1 is alpha');
            while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
                index1++
                targetingLeader(wolf1, food);
                writeMatrix();
                targetingOmegas(wolf2, wolf3, wolf1,notNearFood);
                writeMatrix();
            }

        }
        else {
            write('wolf 3 is alpha');
            while (index1<4&&(wolf1.X!==wolf2.X || wolf1.X!==wolf3.X || wolf1.X!==wolf2.Y || wolf1.Y !== wolf3.Y )) {
                index1++
                targetingLeader(wolf3, food);
                writeMatrix();
                targetingOmegas(wolf2, wolf1, wolf3,notNearFood);
                writeMatrix();
            }

        }
    }
}
function targetingLeader(wolf,food) {
    if (wolf.Y < food.Y){
        matrix[wolf.Y][wolf.X]='0';
        wolf.Y++;
        matrix[wolf.Y][wolf.X]=wolf.index+''
    }
    else if (wolf.Y > food.Y){
        matrix[wolf.Y][wolf.X]='0';
        wolf.Y--;
        matrix[wolf.Y][wolf.X]=wolf.index+''
    }
    else if (wolf.X > food.X){
        matrix[wolf.Y][wolf.X]='0';
        wolf.X--;
        matrix[wolf.Y][wolf.X]=wolf.index+''
    }
    else if (wolf.X < food.X){
        matrix[wolf.Y][wolf.X]='0';
        wolf.X++;
        matrix[wolf.Y][wolf.X]=wolf.index+''
    }
}
function targetingOmegas(wolfOmega1,wolfOmega2,alpha,notNearFood) {
 //   write(wolfOmega1.index+' '+wolfOmega1.X+wolfOmega1.Y);
 //   write(wolfOmega2.index+' '+wolfOmega2.X+wolfOmega2.Y);
 //   write(alpha.index+' '+alpha.X+alpha.Y);
    let probab = Math.round(Math.random()*100);
if (probab>30) {
    if (wolfOmega1.Y < alpha.Y) {
        matrix[wolfOmega1.Y][wolfOmega1.X] = '0';
        wolfOmega1.Y++;
        matrix[wolfOmega1.Y][wolfOmega1.X] = wolfOmega1.index + ''
    } else if (wolfOmega1.Y > alpha.Y) {
        matrix[wolfOmega1.Y][wolfOmega1.X] = '0';
        wolfOmega1.Y--;
        matrix[wolfOmega1.Y][wolfOmega1.X] = wolfOmega1.index + ''
    } else if (wolfOmega1.X > alpha.X) {
        matrix[wolfOmega1.Y][wolfOmega1.X] = '0';
        wolfOmega1.X--;
        matrix[wolfOmega1.Y][wolfOmega1.X] = wolfOmega1.index + ''
    } else if (wolfOmega1.X < alpha.X) {
        matrix[wolfOmega1.Y][wolfOmega1.X] = '0';
        wolfOmega1.X++;
        matrix[wolfOmega1.Y][wolfOmega1.X] = wolfOmega1.index + ''
        }
    }
else {
    write('Omega stops listening to Alpha')
    if (wolfOmega1.Y < notNearFood.Y) {
        matrix[wolfOmega1.Y][wolfOmega1.X] = '0';
        wolfOmega1.Y++;
        matrix[wolfOmega1.Y][wolfOmega1.X] = wolfOmega1.index + ''
    } else if (wolfOmega1.Y > notNearFood.Y) {
        matrix[wolfOmega1.Y][wolfOmega1.X] = '0';
        wolfOmega1.Y--;
        matrix[wolfOmega1.Y][wolfOmega1.X] = wolfOmega1.index + ''
    } else if (wolfOmega1.X > notNearFood.X) {
        matrix[wolfOmega1.Y][wolfOmega1.X] = '0';
        wolfOmega1.X--;
        matrix[wolfOmega1.Y][wolfOmega1.X] = wolfOmega1.index + ''
    } else if (wolfOmega1.X < notNearFood.X) {
        matrix[wolfOmega1.Y][wolfOmega1.X] = '0';
        wolfOmega1.X++;
        matrix[wolfOmega1.Y][wolfOmega1.X] = wolfOmega1.index + ''
    }
}
if (probab < 70) {
    if (wolfOmega2.Y < alpha.Y) {
        matrix[wolfOmega2.Y][wolfOmega2.X] = '0';
        wolfOmega2.Y++;
        matrix[wolfOmega2.Y][wolfOmega2.X] = wolfOmega2.index + ''
    } else if (wolfOmega2.Y > alpha.Y) {
        matrix[wolfOmega2.Y][wolfOmega2.X] = '0';
        wolfOmega2.Y--;
        matrix[wolfOmega2.Y][wolfOmega2.X] = wolfOmega2.index + ''
    } else if (wolfOmega2.X > alpha.X) {
        matrix[wolfOmega2.Y][wolfOmega2.X] = '0';
        wolfOmega2.X--;
        matrix[wolfOmega2.Y][wolfOmega2.X] = wolfOmega2.index + ''
    } else if (wolfOmega2.X < alpha.X) {
        matrix[wolfOmega2.Y][wolfOmega2.X] = '0';
        wolfOmega2.X++;
        matrix[wolfOmega2.Y][wolfOmega2.X] = wolfOmega2.index + ''
    }
}
else {
    write('Omega stops listening to Alpha')
    if (wolfOmega2.Y < notNearFood.Y) {
        matrix[wolfOmega2.Y][wolfOmega2.X] = '0';
        wolfOmega2.Y++;
        matrix[wolfOmega2.Y][wolfOmega2.X] = wolfOmega2.index + ''
    } else if (wolfOmega2.Y > notNearFood.Y) {
        matrix[wolfOmega2.Y][wolfOmega2.X] = '0';
        wolfOmega2.Y--;
        matrix[wolfOmega2.Y][wolfOmega2.X] = wolfOmega2.index + ''
    } else if (wolfOmega2.X > notNearFood.X) {
        matrix[wolfOmega2.Y][wolfOmega2.X] = '0';
        wolfOmega2.X--;
        matrix[wolfOmega2.Y][wolfOmega2.X] = wolfOmega2.index + ''
    } else if (wolfOmega2.X < notNearFood.X) {
        matrix[wolfOmega2.Y][wolfOmega2.X] = '0';
        wolfOmega2.X++;
        matrix[wolfOmega2.Y][wolfOmega2.X] = wolfOmega2.index + ''
    }

}
}
function positioning(wolf) {
//    write(random);
//    write(set);
    let wolfString = wolf.index+'';
if ( set.elem(random) === 9) {
    matrix[0][0] = wolfString;
    wolf.X=0;
    wolf.Y=0;
}
else if ( set.elem(random) === 1) {
    matrix[1][0] = wolfString;
    wolf.X=0;
    wolf.Y=1;
}
else if ( set.elem(random) === 2) {
    matrix[2][0] = wolfString;
    wolf.X=0;
    wolf.Y=2;
}
else if ( set.elem(random) === 3) {
    matrix[1][1] = wolfString;
    wolf.X=1;
    wolf.Y=1;
}
else if ( set.elem(random) === 4) {
    matrix[1][2] = wolfString;
    wolf.X=2;
    wolf.Y=1;
}
else if ( set.elem(random) === 5) {
    matrix[2][1] = wolfString;
    wolf.X=1;
    wolf.Y=2;
}
else if ( set.elem(random) === 6) {
    matrix[2][2] = wolfString;
    wolf.X=2;
    wolf.Y=2;
}
else if ( set.elem(random) === 7) {
    matrix[0][1] = wolfString;
    wolf.X=1;
    wolf.Y=0;
}
else if ( set.elem(random) === 8) {
    matrix[0][2] = wolfString;
    wolf.X=2;
    wolf.Y=0;
}
set.delete(set.elem(random))
}
function writeMatrix() {
    write(matrix[0]);
    write(matrix[1]);
    write(matrix[2]);
    write('')
}




