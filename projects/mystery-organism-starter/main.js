// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (number,args) => {
  return {
    specimenNum: number,
    dna: args,
    mutate: function(){
        let randomDna = []
        do{
          let addBases = returnRandBase(this.dna)
          randomDna.push(addBases)
        /*  If needs don't repeat the element inside the array, use this IF 
         * if(!randomDna.includes(addBases)){ 
         *    randomDna.push(addBases)*/
          if(randomDna[0] === "A"){
            randomDna.shift("A")
          }
      } while(randomDna.length < 15)
      console.log(randomDna)
      return randomDna
    },
    compareDNA(pAequor){
      let ex1 = pAequor
      let ex2 = this.mutate()
      let count = 0
      for(var i=0; i < ex2.length; i++){
        if(ex1[i] === ex2[i]){
          count++
        }
        let common = ((100/pAequor.dna.length) * count).toFixed(2)
        console.log(common)
      }
    }
  }
}


const pAequor = pAequorFactory(1,["A","T","C","G"])
// pAequor.specimenNum = 5
//pAequor.mutate()
pAequor.compareDNA(["A","T","C","G"])