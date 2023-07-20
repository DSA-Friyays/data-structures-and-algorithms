class Robot {
    constructor() {
      this.coor = {
        x: 0,
        y: 0,
      };
      this.coordinateMap = {
        N: 0,
        S: 0,
        E: 0,
        W: 0,
      };
      this.crateList = [
        { id: 1, x: 1, y: 1 },
        { id: 2, x: 5, y: 5 },
      ];
      this.isLifting = false
      this.liftedCrate = []
    }
  
    getCoor() {
      return this.coor;
    }
  
    setCoor(coor) {
      this.coor = coor;
    }
  
    robotMovement(instruction) {
      const command = instruction.split(",");
      for (let i = 0; i < command.length; i++) {
        let coor = this.getCoor();
        if ("N" === command[i]) {
          if (coor.y < 5) {
            this.coordinateMap["N"] += 1;
          } else {
            throw "out of bound error X axis";
          }
        }
        if ("S" === command[i]) {
          if (coor.y > -5) {
            this.coordinateMap["S"] += 1;
          } else {
            return "out of bound error";
          }
        }
        if ("E" === command[i]) {
          if (coor.x < 5) {
            this.coordinateMap["E"] += 1;
          } else {
            return "out of bound error";
          }
        }
        if ("W" === command[i]) {
          if (coor.x > -5) {
            this.coordinateMap["W"] += 1;
          } else {
            return "out of bound error";
          }
        }
        this.currentRobotPosition();
      }
    }
  
    simpleRobotMovement(instruction) {
      console.log(instruction);
      const command = instruction.split(" ");
      for (let i = 0; i < command.length; i++) {
        let coor = this.getCoor();
        if ("N" === command[i]) {
          if (coor.y < 5) {
            this.coordinateMap["N"] += 1;
          } else {
            throw "out of bound error X axis";
          }
        }
        if ("S" === command[i]) {
          if (coor.y > -5) {
            this.coordinateMap["S"] += 1;
          } else {
            return "out of bound error";
          }
        }
        if ("E" === command[i]) {
          if (coor.x < 5) {
            this.coordinateMap["E"] += 1;
          } else {
            return "out of bound error";
          }
        }
        if ("W" === command[i]) {
          if (coor.x > -5) {
            this.coordinateMap["W"] += 1;
          } else {
            return "out of bound error";
          }
        }
        this.currentRobotPosition();
      }
    }
  
    wareHouse(value) {
    
      const command = value.split(" ");
      for (let i = 0; i < command.length; i++) {



        // carrying method
        if (command[i] === "G") {

            if(this.isLifting){
                return "already carrying a crate"
            }
          /// ensure that we are not carry a crate
          // need some varification logic, to check if you are at the current location of the crate
          let coor = this.getCoor();
          //console.log("robot coor", coor);
    
          const foundItem = this.crateList?.find(
            (item) => item.x === coor.x && item.y === coor.y
          );
          if(foundItem){
            // delete the item
            this.crateList = this.crateList.filter(item => !(item.x === coor.x && item.y === coor.y));
            this.liftedCrate.push(foundItem)
            console.log("hi",  this.crateList)
            this.isLifting = true
          }
          ///console.log(foundItem);
















          // dropping functionality
        } else if (command[i] === "D") {
          if(!this.isLifting) return "not carrying anything"

          let currentPositionOfRobot = this.getCoor();
          if(currentPositionOfRobot){
            this.crateList.push({ id:2, ...currentPositionOfRobot})
           // console.log("current", this.crateList)
            this.isLifting = false
          }
          
        } else {
          this.simpleRobotMovement(command[i].toString());
        }
      }
      // it navigates succefully to the position of the crate
  
      // check if its already carrying a crate
      // using the G command to pick the crate and and modify the current location of the crate
    }
  
    currentRobotPosition() {
      const x = this.coordinateMap["E"] - this.coordinateMap["W"];
      const y = this.coordinateMap["N"] - this.coordinateMap["S"];
  
      const coor = {
        x,
        y,
      };
      const output = `(${coor.x}, ${coor.y})`;
      this.setCoor(coor);
      console.log("curr", output);
    }
  
    robotError(value) {
      console.log(value);
    }
  }
  
  const robotClass = new Robot();
  
  //   console.log("robot",  robotClass.robotMovement(
  //     "N"
  //   ))
  console.log(
    "robot",
    robotClass.wareHouse("N N N N N E E E E E G S S W W D W W W S S S D")
  );
  
  robotClass.currentRobotPosition();
  // [N, N, N, N, N, N, S, S, S, , G, W, W, W, W]
  