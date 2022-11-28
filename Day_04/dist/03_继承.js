"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    // 狗的类 继承 Animal类
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑`);
        }
    }
    // 猫的类 继承 Animal类
    class Cat extends Animal {
        run() {
            console.log('Cat在叫');
        }
    }
    /*
        Animal 父类 Dog 子类
        使用继承后 子类将会拥有父类所有的方法和属性
        通过继承可以将多个类中共有的代码写在一个父类中
            这样只需写一次即可让所有的子类都同时拥有父类的属性和方法
        在子类添加父类没有的属性和方法 直接加

        子类添加了父类相同的方法 则子类方法会覆盖父类的方法 称为 方法重写
    */
    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 5);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
    cat.run();
})();
