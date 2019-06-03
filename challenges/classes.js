// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(cubeAttr){
      this.length = cubeAttr.length;
      this.width = cubeAttr.width;
      this.height = cubeAttr.height;
    }
  // INSERT METHOODS
  cuboidVol(){
    return this.length * this.width * this.height;
  }
  cuboidSurf(){
    return 2 * (this.length * this.width + this.length * this.width + this.width * this.height);
  }
  }
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });

  console.log(cuboid.cuboidVol()); // 100
  console.log(cuboid.cuboidSurf()); // 130
  
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.