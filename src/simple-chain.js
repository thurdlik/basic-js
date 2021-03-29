const CustomError = require("../extensions/custom-error");

class chainMaker {
  constructor() {
      this.elements = []
  }

  getLength() {
      return this.elements.length
  }

  addLink(value = '') {
      this.elements.push(value)
      return this
  }

  removeLink(position) {
      if (position >=0 && position <= this.elements.length) {
        this.elements.splice(position - 1, 1)
        return this
      }
        
      else if (position < 0 && position >= -this.elements.length) {
        this.elements.splice(position - 1, 1)
        return this
      }
      else {
        this.elements = []
        throw new Error("THROWN")
      }
        
      
      }
  

  reverseChain() {
      this.elements.reverse()
      return this
  }

  finishChain() {
      const elementsAsString = []
      this.elements.forEach(elem => {
          elementsAsString.push(`( ${elem} )`)
      })
      this.elements = []
      return elementsAsString.join('~~')
  }
}

module.exports = new chainMaker();
