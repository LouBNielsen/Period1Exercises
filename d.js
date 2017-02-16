function f(x, y, ...rest) {
    let sum = x + y;
    console.log("Sum: " + sum);

    for (let i = 0; i < rest.length; i++) {
        console.log("rest value " + i + " is a: " + rest[i].constructor.name);
    }
}

f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {});

var rest = [true,false,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
f(5,8,...restParams)
console.log("EX5 B: hvis man laver console.log på f(5,8,...restParams) giver det undefined");
