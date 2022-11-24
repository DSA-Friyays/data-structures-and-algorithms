class SimpleCalculator {
  constructor() {
    this.total = 0;
  }

  setValue(newValue) {
    this.total = newValue;
    console.log("the total in view", this.total);
  }
  // plugin register

  register(plugin) {
    const { name, exec } = plugin;
    this[name] = exec;
  }

  additionFunc(val) {
    this.setValue(this.total + val);
  }

  subtractionFunc(val) {
    this.setValue(this.total - val);
  }
}

// the plugin

const squareFunc = {
  name: "squareFunc",
  exec: () => {
    this.setValue(this.total * this.total);
  },
};

// the above code albiet easier to read and implement, disobeys the open close principle, thus changing the architecture a bit is preferable to conform to the principle

// The Calculator
// const betaCalc = {
//     currentValue: 0,

//     setValue(value) {
//       this.currentValue = value;
//       console.log(this.currentValue);
//     },

//     core: {
//       'plus': (currentVal, addend) => currentVal + addend,
//       'minus': (currentVal, subtrahend) => currentVal - subtrahend
//     },
//     plugins: {},

//     press(buttonName, newVal) {
//       const func = this.core[buttonName] || this.plugins[buttonName];
//       this.setValue(func(this.currentValue, newVal));
//     },

//     register(plugin) {
//       const { name, exec } = plugin;
//       this.plugins[name] = exec;
//     }
//   }

//   // Our Plugin
//   const squaredPlugin = {
//     name: 'squared',
//     exec: function(currentValue) {
//       return currentValue * currentValue;
//     }
//   };

//   betaCalc.register(squaredPlugin);

//   // Using the calculator
//   betaCalc.setValue(3);      // => 3
//   betaCalc.press('plus', 2); // => 5
//   betaCalc.press('squared'); // => 25
//   betaCalc.press('squared'); // => 625
